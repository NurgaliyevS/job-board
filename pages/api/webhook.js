import connectMongoDB from "@/backend/mongodb";
import User from "@/backend/user";
import crypto from "crypto";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function verifySignature(req, rawBody) {
  const secret = process.env.LEMON_SQEEZY_WEBHOOK_SIGNATURE;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const signature = Buffer.from(req.headers["x-signature"] || "", "utf8");

  if (!crypto.timingSafeEqual(digest, signature)) {
    throw new Error("Invalid signature.");
  }
}

async function handleOrderCreated(body) {
  const isSuccessful = body.data.attributes.status === "paid";
  const userStatus = body.data.attributes.first_order_item.variant_name;
  const receiptLink = body.data.attributes.urls.receipt;
  const variantId = body.data.attributes.first_order_item.variant_id;
  const emailAuthorized = body?.meta?.custom_data?.email;

  await connectMongoDB();

  const userData = {
    name: body.data.attributes.user_name,
    user_status: isSuccessful ? userStatus || "paid" : "free",
    receipt_link: receiptLink,
    variant_id: variantId,
    variant_name: isSuccessful ? userStatus || "paid" : "free"
  };

  if (emailAuthorized && typeof emailAuthorized === 'string' && emailAuthorized.length > 3) {
    return updateOrCreateUser(emailAuthorized, userData);
  }

  return updateOrCreateUser(body.data.attributes.user_email, userData);
}

async function updateOrCreateUser(email, userData) {
  let user = await User.findOne({ email });

  if (user) {
    Object.assign(user, userData);
    await user.save();
  } else {
    user = new User({ ...userData, email });
    await user.save();
  }

  return user;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const buf = await buffer(req);
    const rawBody = buf.toString();

    await verifySignature(req, rawBody);

    const body = JSON.parse(rawBody);
    const eventType = req.headers["x-event-name"];

    console.log(body, 'body');

    if (eventType === "order_created") {
      await handleOrderCreated(body);
    }

    res.status(200).json({ message: "Webhook received" });
  } catch (err) {
    console.error(err, 'err');
    res.status(500).json({ message: "Server error" });
  }
}