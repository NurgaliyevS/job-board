import React from "react";

const JobConstructor = () => {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center my-8">Enter Job Listing</h1>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <form>
            <h2 className="text-xl font-semibold">
              Your Information (not displayed in listing)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First and last name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="input input-bordered"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Job Listing Information
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select job type
                </option>
                <option>Permanent</option>
                <option>Temporary</option>
                <option>Paid Internship</option>
                <option>Student / postdoc</option>
                <option>AmeriCorps</option>
                <option>Unpaid</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employer Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter employer name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title (of listing)</span>
              </label>
              <input
                type="text"
                placeholder="Enter job title"
                className="input input-bordered"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Select location
                  </option>
                  <option>Africa</option>
                  <option>Asia</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Europe</option>
                  <option>Latin America</option>
                  <option>Other</option>
                  <option>Remote / Flexible</option>
                  {/* Add all US states here */}
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Details</span>
              </label>
              <input
                type="text"
                placeholder="Enter salary details"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Required Experience (optional)
                </span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select experience level
                </option>
                <option>Entry Level (0 - 1 years)</option>
                <option>Mid Level (2 - 6 years)</option>
                <option>High Level (7+ years)</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Enter job description"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Application Instructions</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Describe how and where you want applicants to apply"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Application Deadline (optional)
                </span>
              </label>
              <input type="date" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobConstructor;
