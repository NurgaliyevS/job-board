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

  useEffect(() => {
    setJobs(mockJobs.slice(0, 20));
    setTotalPages(10);

    // const fetchJobs = async () => {
    //   try {
    //     // Replace this URL with your actual API endpoint
    //     const response = await fetch(`/api/jobs?page=${currentPage}`);
    //     const data = await response.json();
    //     setJobs(data.jobs);
    //     setTotalPages(data.totalPages);
    //   } catch (error) {
    //     console.error("Error fetching jobs:", error);
    //   }
    // };

    // fetchJobs();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {jobs.map((job, index) => (
        <div key={job.url} className={`${index !== 0 ? "border-t-2" : ""}`}>
          <JobCard job={job} />
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center bg-white border-t-2 p-4 shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 gap-2 w-full">
          <button
            className="btn btn-sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Back
          </button>
          {totalPages === 1 && (
            <button
              className="btn btn-sm"
              onClick={() => handlePageChange(1)}
              disabled
            >
              1
            </button>
          )}
          {totalPages > 1 && (
            <button
              className="btn btn-sm"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              1
            </button>
          )}
          {totalPages > 2 &&
            Array.from({ length: totalPages - 2 }, (_, i) => i + 2).map(
              (page) => (
                <button
                  key={page}
                  className="btn btn-sm"
                  onClick={() => handlePageChange(page)}
                  disabled={currentPage === page}
                >
                  {page}
                </button>
              )
            )}
          <button
            className="btn btn-sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobList;
