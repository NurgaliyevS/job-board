import React from "react";
import { mockJobs } from "./mockJobs";

const JobCard = ({ job }) => (
  <article className="bg-white shadow-lg rounded-xl overflow-hidden mb-4">
    <div className="p-4">
      <header className="mb-2">
        <h2 className="text-xl font-bold">
          {/* disable */}
          <a href={"#" + job.url} className="hover:underline">
            {job.title}
          </a>
        </h2>
      </header>
      <h3 className="text-lg mb-1">{job.company}</h3>
      <h4 className="text-gray-600 mb-2 flex items-center">
        <img
          src="/location-sign-svgrepo-com.svg"
          alt="Location"
          className="w-4 h-4 inline-block mr-1"
        />
        {job.location}
      </h4>
      {job?.salary && (
        <p className="text-sm mb-1">
          <span className="font-light">Salary: </span>
          {job.salary}
        </p>
      )}
      {job?.deadline && (
        <p className="text-sm mb-1">
          <span className="font-light">Deadline: </span>
          {job.deadline}
        </p>
      )}
      {job?.experience && (
        <p className="text-sm mb-1">
          <span className="font-light">Experience: </span>
          {job.experience}
        </p>
      )}
      {job?.description && <p className="text-sm mt-2">{job.description}</p>}
    </div>
    <footer className="px-4 pb-2 flex gap-2 items-center">
      {job.featured && <div className="badge badge-primary">Featured</div>}
      <div className="text-sm text-gray-600">{job.publishDate}</div>
    </footer>
  </article>
);

function JobList() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {mockJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobList;
