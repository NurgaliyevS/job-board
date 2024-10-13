import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  useEffect(() => {
    fetchJobs(currentPage);
  }, [
    currentPage,
    selectedCategories,
    selectedJobTypes,
    selectedLocations,
    selectedRegions,
  ]);

  const fetchJobs = async (page) => {
    setIsLoading(true);
    setError(null);
    try {
      const params = {
        page,
        limit: 20,
      };
      if (selectedCategories.length) {
        params.categories = selectedCategories.join(",");
      }
      if (selectedJobTypes.length) {
        params.jobTypes = selectedJobTypes.join(",");
      }
      if (selectedLocations.length) {
        params.locations = selectedLocations.join(",");
      }
      if (selectedRegions.length) {
        params.regions = selectedRegions.join(",");
      }

      const response = await axios.get("/api/job/job-details", { params });
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

  const handleFilterChange = (filterType, values) => {
    switch (filterType) {
      case "categories":
        setSelectedCategories(values);
        break;
      case "jobTypes":
        setSelectedJobTypes(values);
        break;
      case "locations":
        setSelectedLocations(values);
        break;
      case "regions":
        setSelectedRegions(values);
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  const value = {
    jobs,
    currentPage,
    totalPages,
    isLoading,
    error,
    selectedJobId,
    selectedCategories,
    selectedJobTypes,
    selectedLocations,
    selectedRegions,
    handlePageChange,
    handleJobSelect,
    handleFilterChange,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}
