import React, { useState } from "react";
import SkeletonLoader from "./Job/SkeletonLoader";
import JobCard from "./Job/JobCard";
import JobDetailView from "./Job/JobDetailView";
import GetNewJobsByEmail from "./Job/GetNewJobsByEmail";
import { useJobContext } from "./Filters/JobContext";

function JobList() {
  const {
    jobs,
    currentPage,
    totalPages,
    isLoading,
    error,
    selectedJobId,
    handlePageChange,
    handleJobSelect,
    setSelectedJobId
  } = useJobContext();

  const [showJobList, setShowJobList] = useState(true);

  const selectedJob = jobs.find((job) => job._id === selectedJobId);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col lg:flex-row">
        <div className={`w-full lg:w-2/5 lg:pr-4 ${selectedJob ? "lg:border-r" : ""} ${showJobList ? "" : "hidden lg:block"}`}>
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
              <div
                key={job._id}
                className={`${index !== 0 ? "border-t-2" : ""}`}
                onClick={() => {
                  handleJobSelect(job._id);
                  setShowJobList(false);
                }}
              >
                <JobCard job={job} isSelected={selectedJobId === job._id} />
              </div>
            ))
          )}

          {/* Pagination */}
          <div className="flex justify-center bg-white border-t-2 p-4 shadow-lg rounded-xl overflow-x-auto mt-4">
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

        {!selectedJob && (
          <div className="w-full lg:w-72 mt-4 lg:mt-0 lg:pl-4">
            <GetNewJobsByEmail />
          </div>
        )}
        {selectedJob && (
          <div className={`w-full lg:w-3/5 mt-4 lg:mt-0 lg:pl-4 ${showJobList ? "hidden lg:block" : ""}`}>
            <JobDetailView
              job={selectedJob}
              onClose={() => {
                setSelectedJobId(null);
                setShowJobList(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default JobList;