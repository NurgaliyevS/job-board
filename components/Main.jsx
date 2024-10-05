import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

const CATEGORIES = [
  "Admin & Leadership",
  "Botany",
  "Ecology",
  "Environmental Education",
  "Fisheries",
  "Forestry",
  "Hydrology",
  "Land Trust",
  "Marine Biology",
  "General / Stewardship",
  "Policy And Law",
  "Outdoor Recreation",
  "Restoration",
  "Sustainability",
  "Wildlife",
];

const JOB_TYPES = [
  "AmeriCorps",
  "Paid Internship",
  "Permanent",
  "Student / postdoc",
  "Temporary",
  "Unpaid",
];

function Icon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
}

export default function Main() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedJobTypes, setSelectedJobTypes] = useState(new Set());
  // Keep a backup of selections for cancellation
  const [backupCategories, setBackupCategories] = useState(new Set());
  const [backupJobTypes, setBackupJobTypes] = useState(new Set());
  
  const plausible = usePlausible();
  const { data: session } = useSession();

  const handleFilterOpen = () => {
    setBackupCategories(new Set(selectedCategories));
    setBackupJobTypes(new Set(selectedJobTypes));
    setShowFilters(true);
  };

  const handleCancel = () => {
    setSelectedCategories(new Set(backupCategories));
    setSelectedJobTypes(new Set(backupJobTypes));
    setShowFilters(false);
  };

  const handleApply = () => {
    setShowFilters(false);
    // Here you could trigger a search with the selected filters
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleJobTypeToggle = (jobType) => {
    setSelectedJobTypes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobType)) {
        newSet.delete(jobType);
      } else {
        newSet.add(jobType);
      }
      return newSet;
    });
  };

  const handleAllCategories = () => {
    setSelectedCategories(new Set(CATEGORIES));
  };

  const handleClearCategories = () => {
    setSelectedCategories(new Set());
  };

  const handleAllJobTypes = () => {
    setSelectedJobTypes(new Set(JOB_TYPES));
  };

  const handleClearJobTypes = () => {
    setSelectedJobTypes(new Set());
  };

  return (
    <section className="max-w-5xl mx-auto flex flex-col items-center justify-center px-8 p-2 lg:p-6 my-12">
      <div className="flex flex-col gap-10 lg:gap-12 items-center justify-center text-center mb-10">
        <h1 className="font-extrabold text-4xl tracking-tight md:-mb-4">
          Discover The Latest Environmental Jobs
        </h1>
        <p className="text-lg text-base-content-secondary leading-relaxed max-w-md mx-auto">
          Job board for environmental professionals.
        </p>
      </div>

      <div className="flex gap-4 relative">
        <button
          onClick={handleFilterOpen}
          className="btn btn-outline btn-error gap-0.5 text-base border-2"
        >
          Job Filters
          <Icon />
        </button>
        <button className="btn btn-outline btn-error gap-0.5 text-base border-2">
          Locations
          <Icon />
        </button>

        {showFilters && (
          <div className="absolute top-full rounded-xl shadow-2xl p-4 z-50 min-w-full">
            <div className="flex">
              <div className="w-96 border-r p-2">
                <h3 className="font-medium mb-2">
                  Category
                  <button 
                    onClick={handleAllCategories}
                    className="text-xs ml-2 text-success mr-1 hover:underline"
                  >
                    All
                  </button>
                  |
                  <button 
                    onClick={handleClearCategories}
                    className="text-xs text-success ml-1 hover:underline"
                  >
                    Clear
                  </button>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((category) => (
                    <label key={category} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.has(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="rounded border-zinc-300 dark:border-zinc-600"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-96 p-2">
                <h3 className="font-medium mb-2">
                  Job Type
                  <button 
                    onClick={handleAllJobTypes}
                    className="text-xs ml-2 text-success mr-1 hover:underline"
                  >
                    All
                  </button>
                  |
                  <button 
                    onClick={handleClearJobTypes}
                    className="text-xs text-success ml-1 hover:underline"
                  >
                    Clear
                  </button>
                </h3>
                <div className="space-y-2">
                  {JOB_TYPES.map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedJobTypes.has(type)}
                        onChange={() => handleJobTypeToggle(type)}
                        className="rounded border-zinc-300 dark:border-zinc-600"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4 border-t">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                Cancel
              </button>
              <button 
                onClick={handleApply}
                className="px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}