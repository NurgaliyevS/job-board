import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { toast } from "react-toastify";

const Confirm = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/job/job-details");
      setJobs(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch jobs");
      setLoading(false);
    }
  };

  const handleVerify = async (jobId, isVerified) => {
    try {
      await axios.put(`/api/job/job-details?id=${jobId}`, {
        isVerified: !isVerified,
      });
      setJobs(
        jobs.map((job) =>
          job._id === jobId ? { ...job, isVerified: !isVerified } : job
        )
      );
    } catch (err) {
      setError("Failed to update job verification status");
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`/api/job/job-details?id=${jobId}`);
      toast.error("Job deleted successfully");
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (err) {
      setError("Failed to delete job");
    }
  };

  const handleVerifyAll = async () => {
    try {
      const updatedJobs = await Promise.all(
        jobs.map(async (job) => {
          if (!job.isVerified) {
            await axios.put(`/api/job/job-details?id=${job._id}`, {
              isVerified: true,
            });
            toast.success("Job verified successfully");
            return { ...job, isVerified: true };
          }
          return job;
        })
      );
      setJobs(updatedJobs);
    } catch (err) {
      setError("Failed to verify all jobs");
    }
  };

  const handleDeleteAll = async () => {
    try {
      await Promise.all(
        jobs.map((job) => axios.delete(`/api/job/job-details?id=${job._id}`))
      );
      setJobs([]);
    } catch (err) {
      setError("Failed to delete all jobs");
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center my-8">Admin Panel</h1>
      <div className="flex justify-between mb-4">
        <button className="btn btn-success" onClick={handleVerifyAll}>
          Verify All
        </button>
        <button className="btn btn-error" onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>
      <div className="space-y-8">
        {jobs?.map((job) => (
          <div
            key={job._id}
            className="collapse collapse-arrow bg-base-100 px-2"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              {job.JobTitle}
              <br />
              {job.EmployerName}
              <br />
              <p className="text-success">{job?.Location}</p>
            </div>
            <div className="collapse-content bg-base-100">
              <p className="border-t-2 p-2"></p>
              <p>
                <strong className="font-extrabold opacity-60">Salary:</strong> {job?.Salary}
              </p>
              <p>
                <strong className="font-extrabold opacity-60">Job Description:</strong> {job?.JobDescription}
              </p>
              <p>
                <strong className="font-extrabold opacity-60">Published:</strong>{" "}
                {format(new Date(job.Published), "MMMM dd, yyyy")}
              </p>
              <p>
                <strong className="font-extrabold opacity-60">Skills:</strong> {job?.Skills}
              </p>
              <p>
                <strong className="font-extrabold opacity-60">Required Experience:</strong> {job?.Experience}
              </p>
              <p>
                <strong className="font-extrabold opacity-60">Job Type:</strong> {job.JobType}
              </p>
              <p>
                <strong className="font-extrabold opacity-60">City:</strong> {job.City}
              </p>
              <p>
                <strong className="font-extrabold opacity-60">Application Instructions:</strong> {job?.HowToApply}
              </p>
              <div className="mt-4 flex gap-4">
                <button
                  className={`btn ${
                    job.isVerified ? "btn-error" : "btn-success"
                  }`}
                  onClick={() => handleVerify(job._id, job.isVerified)}
                >
                  {job.isVerified ? "Unverify" : "Verify"}
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Confirm;