import React from "react";
import axios from "axios";
import { experienceLevels, jobTypes, locations } from "./job-default";
import { useSession } from "next-auth/react";

const JobConstructor = () => {
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    console.log("Form data:", formObject);

    // Restructure the form data to match the MongoDB schema
    const jobData = {
      JobTitle: formObject.jobTitle,
      EmployerName: formObject.employerName,
      Location: formObject.location,
      Salary: formObject.salaryDetails,
      JobDescription: formObject.jobDescription,
      Deadline: formObject.applicationDeadline,
      Experience: formObject.requiredExperience,
      JobType: formObject.jobType,
      City: formObject.city,
      HowToApply: formObject.applicationInstructions,
      Creator: {
        FullName: formObject.fullName,
        phoneNumber: formObject.phoneNumber,
        email: formObject.email,
      },
    };

    try {
      const response = await axios.post("/api/job/job-details", jobData);
      console.log("Job listing submitted successfully:", response.data);
      // Handle success (e.g., show success message, redirect)
    } catch (error) {
      console.error("Error submitting job listing:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center my-8">Enter Job Listing</h1>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
                  name="fullName"
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
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  disabled
                  value={session?.user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
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
              <select name="jobType" className="select select-bordered w-full">
                <option value="">Select job type</option>
                {jobTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employer Name</span>
              </label>
              <input
                type="text"
                name="employerName"
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
                name="jobTitle"
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
                  name="city"
                  placeholder="Enter city"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <select name="location" className="select select-bordered">
                  <option value="">Select location</option>
                  {Object.entries(locations).map(([group, options]) => (
                    <optgroup key={group} label={group}>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Details</span>
              </label>
              <input
                type="text"
                name="salaryDetails"
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
              <select
                name="requiredExperience"
                className="select select-bordered"
              >
                <option value="">Select experience level</option>
                {experienceLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                name="jobDescription"
                className="textarea textarea-bordered h-24"
                placeholder="Enter job description"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Application Instructions</span>
              </label>
              <textarea
                name="applicationInstructions"
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
              <input
                type="date"
                name="applicationDeadline"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Submit Job Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobConstructor;
