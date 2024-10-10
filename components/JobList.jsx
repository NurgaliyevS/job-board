import React, { useState, useEffect } from "react";
import { mockJobs } from "./mockJobs";

const JobCard = ({ job }) => (
  <article className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="p-4">
      <header className="mb-2">
        <h2 className="text-xl font-bold">
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
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  const fetchJobs = async (page) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/job/job-details?page=${page}&limit=20`
      );
      const data = await response.json();
      const { jobs, totalPages } = data;
      setJobs(jobs);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {jobs.map((job, index) => (
        <div key={job._id} className={`${index !== 0 ? "border-t-2" : ""}`}>
          <JobCard job={job} />
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="btn-group">
          <button
            className="btn btn-sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`btn btn-sm ${
                currentPage === page + 1 ? "btn-active" : ""
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="btn btn-sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobList;
