import React, { useState, useEffect } from "react";
import SkeletonLoader from "./Job/SkeletonLoader";
import JobCard from "./Job/JobCard";

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
        jobs?.map((job, index) => (
          <div key={job._id} className={`${index !== 0 ? "border-t-2" : ""}`}>
            <JobCard job={job} />
          </div>
        ))
      )}

      {/* Pagination */}
      <div className="flex justify-center bg-white border-t-2 p-4 shadow-lg rounded-xl overflow-hidden">
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
