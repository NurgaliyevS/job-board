import connectMongoDB from "@/backend/mongodb";
import Subscriber from "@/backend/subscriber";

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "GET":
      try {
        const email = req.query.email;

        if (email) {
          const subscriber = await Subscriber.findOne({ email });
          if (!subscriber) {
            return res
              .status(404)
              .json({ success: false, message: "Subscriber not found" });
          }
          return res
            .status(200)
            .json({ success: true, message: "Subscriber found", data: subscriber });
        } else {
          const subscribers = await Subscriber.find();
          return res.status(200).json({ success: true, message: "Subscribers found", data: subscribers });
        }
      } catch (error) {
        return res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    case "POST":
      try {
        const { email } = req.body;

        if (!email) {
          return res.status(400).json({ success: false, message: "Email is required" });
        }

        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
          return res.status(409).json({ success: false, message: "Email already subscribed" });
        }

        const subscriber = await Subscriber.create({ email });
        return res.status(201).json({
          success: true,
          message: "Subscribed successfully",
          data: subscriber,
        });
      } catch (error) {
        return res.status(400).json({ success: false, message: "Bad request" });
      }
    default:
      return res.status(400).json({ success: false, message: "Bad request" });
  }
}