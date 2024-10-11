import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

function Pricing(props) {
  const router = useRouter();

  const publishListing = () => {
    toast.success(
      "You have successfully saved your job listing. Now we will review your job listing."
    );
    router.push("/post-job/submit/review");
  };

  const publishPremiumListing = () => {
    toast.success(
      "You have successfully saved your job listing. Now we will review your job listing."
    );
    router.push("/post-job/submit/review?premium=true");
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center my-8">
        Select your Performance
      </h1>
      <div className="flex gap-4 justify-between">
        <div className="card bg-base-100 shadow-xl w-2/3">
          <div className="card-body">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col w-11/12">
                <h2 className="text-2xl font-bold text-primary">
                  Premium Listing
                </h2>
                <p className="text-lg font-semibold">Listed up to 30 days</p>
              </div>
              <p className="font-bold text-primary text-6xl">$35</p>
            </div>
            <div className="flex items-center justify-center border-t-2 border-b-2">
              <span className="text-lg text-center p-4 flex gap-1">
                Reach
                <p className="text-primary text-lg">1,000+</p>
                Jobseekers
              </span>
            </div>
            <div className="my-4 flex gap-4 items-center h-20">
              <img src={"/rocket-svgrepo-com.svg"} className="w-8 h-8" />
              <div className="flex flex-col">
                <h3 className="font-bold text-primary">Attract top talent</h3>
                <p>Reach more jobseekers. Get more applicants.</p>
              </div>
            </div>
            <div className="mt-2 mb-6">
              <h3 className="font-bold mb-6">IDEAL FOR</h3>
              <ul className="list-disc list-inside flex flex-col gap-6">
                <li className="min-h-20">
                  <span className="font-semibold text-success">Priority Hires</span>
                  <br />
                  When it really matters, do what it takes to hire the best.
                </li>
                <li className="min-h-20">
                  <span className="font-semibold text-success">Technical Jobs</span>
                  <br />
                  Reach more people with the background you need.
                </li>
                <li className="min-h-20">
                  <span className="font-semibold text-success">Urgent Recruiting</span>
                  <br />
                  Get more applicants, right away.
                </li>
                <li className="min-h-20">
                  <span className="font-semibold text-success">High-Volume Recruiting</span>
                  <br />
                  We will review your job posting in the next 7 days.
                </li>
              </ul>
            </div>
            <button
              className="btn btn-primary mt-auto"
              onClick={publishPremiumListing}
            >
              PUBLISH LISTING
            </button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-1/3">
          <div className="card-body">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col w-11/12">
                <h2 className="text-xl font-bold opacity-90">Basic Listing</h2>
                <p className="text-lg font-semibold">Listed up to 15 days</p>
              </div>
              <p className="font-bold text-xl opacity-90">Free</p>
            </div>

            <div className="flex items-center justify-center border-t-2 border-b-2">
              <span className="text-lg text-center p-4 flex gap-1">
                Reach 100+ Jobseekers
              </span>
            </div>

            <div className="my-4 flex gap-4 items-center h-20">
              <img src={"/test-svgrepo-com.svg"} className="w-8 h-8" />

              <div className="flex flex-col">
                <h3 className="font-bold">Basic Visibility</h3>
                <p>Listed in search results of job board.</p>
              </div>
            </div>

            <div className="mt-2 mb-6">
              <h3 className="font-bold mb-6">IDEAL FOR</h3>
              <ul className="list-disc list-inside flex flex-col gap-6">
                <li className="min-h-20">
                  <span className="font-semibold text-success">Lower Priority Hires</span>
                  <br />
                  When it's less important.
                </li>
                <li className="min-h-20">
                  <span className="font-semibold text-success">
                    Easier-To-Fill Positions
                  </span>
                  <br />
                  When getting great applicants is easy.
                </li>
                <li className="min-h-20">
                  <span className="font-semibold text-success">'No-Budget' Recruiting</span>
                  <br />
                  If you can only afford 'Free', our Basic Listings get you
                  applicants at no-cost.
                </li>
                <li className="min-h-20">
                  <span className="font-semibold text-success">Low-Volume Recruiting</span>
                  <br />
                  We will review your job posting in the next 30 days.
                </li>
              </ul>
            </div>
            <button className="btn mt-auto" onClick={publishListing}>
              PUBLISH LISTING
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center mb-60">
        <div className="mt-4">
          <h3 className="font-bold">Questions?</h3>
          <a href="mailto:nurgasab@gmail.com" className="text-primary">
            Send us an email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
