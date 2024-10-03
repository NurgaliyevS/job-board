import { isDevelopment } from "@/utils/isDevelopment";
import { lemonSqueezyApiInstance } from "@/utils/lemonAxios";

export default async function handler(req, res) {
  try {
    const request = await req.body;

    if (!request.productId) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID is required" });
    }

    console.log("Request:", request);

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: request?.userId || "123",
              email: request?.email || "123",
            },
            discount_code: isDevelopment() ? "YXMDK1NA" : "C0MTGZMG",
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQEEZY_STORE_ID.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: isDevelopment()
                ? process.env.NEXT_PUBLIC_LEMON_SQEEZY_VARIANT_TEST
                : request?.variantId ||
                  process.env.LEMON_SQEEZY_VARIANT.toString(),
            },
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Checkout created successfully",
      data: response.data?.data?.attributes.url,
    });
  } catch (error) {
    console.log("Error response:", error?.response?.data);
    console.log("Error message:", error?.message);
    return res
      .status(500)
      .json({ success: false, message: "An error occured" });
  }
}
