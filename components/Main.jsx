import { useState, useEffect, useRef } from "react";
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  
  const filterRef = useRef(null);
  const filterBtnRef = useRef(null);
  const locationBtnRef = useRef(null);
  const plausible = usePlausible();
  const { data: session } = useSession();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current && 
        !filterRef.current.contains(event.target) &&
        filterBtnRef.current &&
        !filterBtnRef.current.contains(event.target)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'filters') {
      setShowFilters(!showFilters);
    } else {
      setShowFilters(false);
    }
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(item => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleJobTypeToggle = (jobType) => {
    setSelectedJobTypes(prev => {
      if (prev.includes(jobType)) {
        return prev.filter(item => item !== jobType);
      } else {
        return [...prev, jobType];
      }
    });
  };

  const handleAllCategories = () => {
    setSelectedCategories([...CATEGORIES]);
  };

  const handleClearCategories = () => {
    setSelectedCategories([]);
  };

  const handleAllJobTypes = () => {
    setSelectedJobTypes([...JOB_TYPES]);
  };

  const handleClearJobTypes = () => {
    setSelectedJobTypes([]);
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
          ref={filterBtnRef}
          onClick={() => handleButtonClick('filters')}
          className="btn btn-outline btn-error gap-0.5 text-base border-2"
        >
          Job Filters
          <Icon />
        </button>
        <button 
          ref={locationBtnRef}
          onClick={() => handleButtonClick('locations')}
          className="btn btn-outline btn-error gap-0.5 text-base border-2"
        >
          Locations
          <Icon />
        </button>

        {showFilters && (
          <div ref={filterRef} className="absolute top-full rounded-xl shadow-2xl p-4 z-50 min-w-full">
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
                        checked={selectedCategories.includes(category)}
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
                        checked={selectedJobTypes.includes(type)}
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
                onClick={() => setShowFilters(false)}
                className="px-4 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowFilters(false)}
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