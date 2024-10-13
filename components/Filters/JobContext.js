import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const JobContext = createContext();

export function useJobContext() {
  return useContext(JobContext);
}

export function JobProvider({ children }) {
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
    setSelectedJobId(null);
  };

  const handleJobSelect = (jobId) => {
    setSelectedJobId(jobId);
  };

  const value = {
    jobs,
    currentPage,
    totalPages,
    isLoading,
    error,
    selectedJobId,
    handlePageChange,
    handleJobSelect,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}