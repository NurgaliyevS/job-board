import React from "react";
import { format } from "date-fns";

const JobDetailView = ({ job, onClose }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="p-6">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">{job.JobTitle}</h2>
        <h3 className="text-xl mb-2">{job.EmployerName}</h3>
        <div className="flex items-center mb-4">
          <img
            src="/location-sign-svgrepo-com.svg"
            alt="Location"
            className="w-5 h-5 mr-2"
          />
          <span className="text-success">
            {job?.City ? `${job.City}, ` : ""} {job?.Location}
          </span>
        </div>
        <div className="border-t-2 mb-4"></div>

        <div className="bg-green-50">
          <div className="p-4">
            {job?.JobType && (
              <p className="mb-2">
                <span className="font-semibold">Job Type:</span> {job.JobType}
              </p>
            )}
            {job?.Salary && (
              <p className="mb-2">
                <span className="font-semibold">Salary:</span> {job.Salary}
              </p>
            )}
            {job?.Deadline && (
              <p className="mb-2">
                <span className="font-semibold">Deadline:</span>{" "}
                {format(new Date(job.Deadline), "MMMM dd, yyyy")}
              </p>
            )}
            {job?.Experience && (
              <p className="mb-2">
                <span className="font-semibold">Experience:</span>{" "}
                {job.Experience}
              </p>
            )}
          </div>
        </div>
        {job?.JobDescription && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Job Description</h4>
            <p className="opacity-70 whitespace-pre-line">{job.JobDescription}</p>
          </div>
        )}
        {job?.HowToApply && (
          <div className="mt-4 bg-red-200">
            <h4 className="text-lg font-semibold mb-2 p-4">How to Apply</h4>
            <p className="opacity-70 p-4 whitespace-pre-line">{job.HowToApply}</p>
            <p className="mt-2 text-lg font-semibold p-4">
              When you apply, please indicate that you are responding to the posting from Environmental Job Boards
            </p>
          </div>
        )}
      </div>
      <footer className="bg-gray-100 px-6 py-4">
        <p className="text-sm text-gray-600">
          Posted on {format(new Date(job.Published), "MMMM dd, yyyy")}
        </p>
      </footer>
    </div>
  );
};

export default JobDetailView;