import React, { useState, useEffect } from "react";
import { mockJobs } from "./mockJobs";
import { format } from "date-fns";

const JobCard = ({ job }) => (
  <article className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="p-4">
      <header className="mb-2">
        <h2 className="text-xl font-bold">
          <a href={"#"} className="hover:underline">
            {job.JobTitle}
          </a>
        </h2>
      </header>
      <h3 className="text-lg mb-1">{job.EmployerName}</h3>
      <h4 className="text-gray-600 mb-2 flex items-center">
        <img
          src="/location-sign-svgrepo-com.svg"
          alt="Location"
          className="w-4 h-4 inline-block mr-1"
        />
        {job?.Location}
      </h4>
      {job?.Salary && (
        <p className="text-sm mb-1">
          <span className="font-light">Salary: </span>
          {job.Salary}
        </p>
      )}
      {job?.Deadline && (
        <p className="text-sm mb-1">
          <span className="font-light">Deadline: </span>
          {new Date(job.Deadline).toLocaleDateString()}
        </p>
      )}
      {job?.Experience && (
        <p className="text-sm mb-1">
          <span className="font-light">Experience: </span>
          {job.Experience}
        </p>
      )}
      {job?.JobDescription && <p className="text-sm mt-2">{job.JobDescription}</p>}
    </div>
    <footer className="px-4 pb-2 flex gap-2 items-center">
      {job.isFeatured && <div className="badge badge-primary">Featured</div>}
      <div className="text-sm text-gray-600">{
      // new Date(job.Published).toLocaleDateString()
      format(new Date(job.Published), "MMMM dd, yyyy")
      }</div>
    </footer>
  </article>
);

const SkeletonLoader = () => (
  <div className="skeleton w-full h-48 mb-4"></div>
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
      {isLoading ? (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      ) : error ? (
        <div className="alert alert-error">{error}</div>
      ) : (
        jobs.map((job, index) => (
          <div key={job._id} className={`${index !== 0 ? "border-t-2" : ""}`}>
            <JobCard job={job} />
          </div>
        ))
      )}

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