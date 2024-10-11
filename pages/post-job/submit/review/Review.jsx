import { useRouter } from "next/router";
import React from "react";

function Review(props) {
  const router = useRouter();
  const { premium } = router.query;

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center my-8">Confirmation Page</h1>

      <div className="flex gap-4">
        <div className="flex gap-4 justify-between w-3/4">
          <div className="card bg-base-100 shadow-xl w-full">
            <div className="card-body">
              <div className="">
                <h2 className="text-2xl font-bold text-primary">
                  Success! You have submitted your job posting.
                </h2>
                <p className="text-lg font-semibold">
                  We will review your job posting and get back to you.
                </p>
              </div>

              <div className="border-t-2 my-4"></div>

              <span className="text-lg font-medium">What happens next?</span>

              <div className="flex flex-col gap-5 mt-4">
                <div className="flex gap-4 items-center">
                  <img
                    src="/number-1-circle-svgrepo-com.svg"
                    className="w-14 h-14"
                  />
                  <div>
                    <h3 className="font-bold text-primary">Review Process</h3>
                    <p>We will review your job posting in the next {premium ? 7 : 30} days.</p>
                  </div>
                  {/* div to the end */}
                  <div className="ml-auto">
                    <img src="/profile-svgrepo-com.svg" className="w-14 h-14" />
                  </div>
                </div>

                <div className="flex gap-4 items-center border-t-2 pt-4">
                  <img
                    src="/number-2-circle-svgrepo-com.svg"
                    className="w-14 h-14"
                  />
                  <div>
                    <h3 className="font-bold text-primary">
                      Confirmation Email
                    </h3>
                    <p>
                      We will send you a confirmation email once your job
                      posting is live.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <img src="/mail-svgrepo-com.svg" className="w-14 h-14" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold">Questions?</h3>
          <a href="mailto:nurgasab@gmail.com" className="text-primary">
            Send us an email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Review;
