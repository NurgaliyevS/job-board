import React, { useState } from "react";
import axios from "axios";
import {
  experienceLevels,
  jobTypes,
  locations,
} from "../../components/jobDefault";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const JobConstructor = () => {
  const { data: session } = useSession();
  const [touchedFields, setTouchedFields] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleBlur = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (!value) {
      setTouchedFields((prev) => ({ ...prev, [name]: true }));
    } else if (value) {
      setTouchedFields((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Mark all fields as touched on submit attempt
    const formElements = form.elements;
    const newTouchedFields = {};
    for (let i = 0; i < formElements.length; i++) {
      // can you make required fields only touched
      if (formElements[i].required && !formElements[i].value) {
        newTouchedFields[formElements[i].name] = true;
      }
    }
    setTouchedFields(newTouchedFields);

    if (!form.checkValidity()) {
      return;
    }

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

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
        email: session?.user?.email,
      },
    };
    setIsLoading(true);
    try {
      const response = await axios.post("/api/job/job-details", jobData);
      console.log("Job listing submitted successfully:", response.data);
      // Handle success (e.g., show success message, redirect)
      if (response.status === 201) {
        router.push("/post-job/submit")
      } else {
        toast.error("Error submitting job listing");
      }
    } catch (error) {
      console.error("Error submitting job listing:", error);
      // Handle error (e.g., show error message)
    } finally {
      setIsLoading(false);
    }
  };

  const RequiredLabel = ({ children }) => (
    <label className="label">
      <span className="label-text">
        {children} <span className="text-red-500">*</span>
      </span>
    </label>
  );

  const ErrorMessage = ({ field, message }) =>
    touchedFields[field] && (
      <span className="text-red-500 text-sm mt-1">{message}</span>
    );

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center my-8">Enter Job Listing</h1>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="text-xl font-semibold mb-5">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <RequiredLabel>Your Full Name</RequiredLabel>
                <input
                  type="text"
                  name="fullName"
                  placeholder="First and last name"
                  className="input input-bordered"
                  required
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  field="fullName"
                  message="Full name is required"
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

            <h2 className="text-xl font-semibold mt-8 mb-5">
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
              <RequiredLabel>Employer Name</RequiredLabel>
              <input
                type="text"
                name="employerName"
                placeholder="Enter employer name"
                className="input input-bordered"
                required
                onBlur={handleBlur}
              />
              <ErrorMessage
                field="employerName"
                message="Employer name is required"
              />
            </div>

            <div className="form-control">
              <RequiredLabel>Job Title</RequiredLabel>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter job title"
                className="input input-bordered"
                required
                onBlur={handleBlur}
              />
              <ErrorMessage field="jobTitle" message="Job title is required" />
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
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-control">
                <RequiredLabel>Location</RequiredLabel>
                <select
                  name="location"
                  className="select select-bordered"
                  required
                  onBlur={handleBlur}
                >
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
                <ErrorMessage field="location" message="Location is required" />
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
              <RequiredLabel>Application Instructions</RequiredLabel>
              <textarea
                name="applicationInstructions"
                className="textarea textarea-bordered h-24"
                placeholder="Describe how and where you want applicants to apply"
                required
                onBlur={handleBlur}
              ></textarea>
              <ErrorMessage
                field="applicationInstructions"
                message="Application instructions are required"
              />
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
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
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
