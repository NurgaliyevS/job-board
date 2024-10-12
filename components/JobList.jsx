import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonLoader from "./Job/SkeletonLoader";
import JobCard from "./Job/JobCard";
import JobDetailView from "./Job/JobDetailView";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  const fetchJobs = async (page) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/job/job-details?page=${page}&limit=20`);
      const { jobs, totalPages } = response?.data;
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
    setSelectedJobId(null); // Reset selected job when changing pages
  };

  const handleJobSelect = (jobId) => {
    setSelectedJobId(jobId);
  };

  const selectedJob = jobs.find(job => job._id === selectedJobId);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex">
        <div className={`w-2/5 pr-4 ${selectedJob ? 'border-r' : ''}`}>
          {isLoading ? (
            <>
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </>
          ) : error ? (
            <div className="alert alert-error">{error}</div>
          ) : (
            jobs?.map((job) => (
              <div key={job._id} className="mb-4 cursor-pointer" onClick={() => handleJobSelect(job._id)}>
                <JobCard job={job} isSelected={selectedJobId === job._id} />
              </div>
            ))
          )}

          {/* Pagination */}
          <div className="flex justify-center bg-white border-t-2 p-4 shadow-lg rounded-xl overflow-hidden mt-4">
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

        {selectedJob && (
          <div className="w-3/5 pl-4">
            <JobDetailView job={selectedJob} onClose={() => setSelectedJobId(null)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default JobList;