  import { NextResponse } from "next/server";
  import { Ratelimit } from "@upstash/ratelimit";
  import { Redis } from "@upstash/redis";

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(15, "60 s"),
  });

  export default async function middleware(request) {
    console.log("Middleware triggered"); // Log to confirm middleware execution

    try {
      const ip = request.ip ?? "127.0.0.1";
      console.log(`IP Address: ${ip}`); // Log the IP address
  
      const { success } = await ratelimit.limit(ip);
      console.log(`Rate limit success: ${success}`); // Log the rate limit result
  
      return success
        ? NextResponse.next()
        : NextResponse.redirect(new URL("/blocked", request.url));
    } catch (error) {
      console.error("Error in middleware:", error); // Log any errors
      return NextResponse.next(); // Allow the request to proceed in case of error
    }
  }

  export const config = {
    matcher: ["/api/auth/signin/email"],
  };
