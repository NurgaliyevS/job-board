import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";
import Icon, { CATEGORIES, JOB_TYPES, LOCATIONS, REGIONS } from "./Filters";

export default function Main() {
  const [showFilters, setShowFilters] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const filterRef = useRef(null);
  const locationRef = useRef(null);
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
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target) &&
        locationBtnRef.current &&
        !locationBtnRef.current.contains(event.target)
      ) {
        setShowLocations(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleButtonClick = (buttonType) => {
    if (buttonType === "filters") {
      setShowFilters(!showFilters);
      setShowLocations(false);
    } else if (buttonType === "locations") {
      setShowLocations(!showLocations);
      setShowFilters(false);
    }
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleJobTypeToggle = (jobType) => {
    setSelectedJobTypes((prev) => {
      if (prev.includes(jobType)) {
        return prev.filter((item) => item !== jobType);
      } else {
        return [...prev, jobType];
      }
    });
  };

  const handleLocationToggle = (location) => {
    setSelectedLocations((prev) => {
      if (prev.includes(location)) {
        return prev.filter((item) => item !== location);
      } else {
        return [...prev, location];
      }
    });
  };

  const handleRegionToggle = (region) => {
    setSelectedRegions((prev) => {
      if (prev.includes(region)) {
        return prev.filter((item) => item !== region);
      } else {
        return [...prev, region];
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

  const handleAllLocations = () => {
    setSelectedLocations([...LOCATIONS]);
  };

  const handleClearLocations = () => {
    setSelectedLocations([]);
  };

  const handleAllRegions = () => {
    setSelectedRegions([...REGIONS]);
  };

  const handleClearRegions = () => {
    setSelectedRegions([]);
  };

  return (
    <section className="max-w-5xl mx-auto flex flex-col px-8 p-2 lg:p-6 my-2">
      <div className="flex flex-col gap-10 lg:gap-12 mb-10">
        <h1 className="font-extrabold text-4xl tracking-tight md:-mb-4">
          Discover The Latest Environmental Jobs
        </h1>
        <p className="text-lg text-base-content-secondary leading-relaxed max-w-md">
          Job board for environmental professionals.
        </p>
      </div>

      <div className="flex gap-4 relative">
        <button
          ref={filterBtnRef}
          onClick={() => handleButtonClick("filters")}
          className="btn bg-white btn-outline btn-error gap-0.5 text-base border-2"
        >
          Job Filters
          <Icon />
        </button>
        <button
          ref={locationBtnRef}
          onClick={() => handleButtonClick("locations")}
          className="btn bg-white btn-outline btn-error gap-0.5 text-base border-2"
        >
          Locations
          <Icon />
        </button>

        {showFilters && (
          <div
            ref={filterRef}
            className="absolute top-full rounded-xl shadow-2xl p-2 z-50 w-[900px] bg-white"
          >
            <div className="flex justify-end space-x-2 pb-2 border-b">
              <button
                onClick={() => setShowFilters(false)}
                className="btn btn-sm btn-ghost"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
              >
                Apply
              </button>
            </div>
            <div className="flex">
              <div className="w-2/3 border-r p-2">
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
                    <label
                      key={category}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="rounded border-zinc-300 dark:border-zinc-600"
                      />
                      <span className="text-xs text-neutral-600">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-1/2 p-2">
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
                      <span className="text-xs text-neutral-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {showLocations && (
          <div
            ref={locationRef}
            className="absolute top-full rounded-xl shadow-2xl p-2 z-50 w-[900px] bg-white"
          >
            <div className="flex justify-end space-x-2 pb-2 border-b">
              <button
                onClick={() => setShowLocations(false)}
                className="btn btn-sm btn-ghost"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowLocations(false)}
                className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
              >
                Apply
              </button>
            </div>

            <div className="flex">
              <div className="w-2/3 border-r p-2">
                <h3 className="font-medium mb-2">
                  United States
                  <button
                    onClick={handleAllLocations}
                    className="text-xs ml-2 text-success mr-1 hover:underline"
                  >
                    All
                  </button>
                  |
                  <button
                    onClick={handleClearLocations}
                    className="text-xs text-success ml-1 hover:underline"
                  >
                    Clear
                  </button>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {LOCATIONS.map((location) => (
                    <label
                      key={location}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => handleLocationToggle(location)}
                        className="rounded border-zinc-300 dark:border-zinc-600"
                      />
                      <span className="text-xs text-neutral-600">
                        {location}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-1/2 p-2">
                <h3 className="font-medium mb-2">
                  Regions
                  <button
                    onClick={handleAllRegions}
                    className="text-xs ml-2 text-success mr-1 hover:underline"
                  >
                    All
                  </button>
                  |
                  <button
                    onClick={handleClearRegions}
                    className="text-xs text-success ml-1 hover:underline"
                  >
                    Clear
                  </button>
                </h3>
                <div className="space-y-2">
                  {REGIONS.map((region) => (
                    <label key={region} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedRegions.includes(region)}
                        onChange={() => handleRegionToggle(region)}
                        className="rounded border-zinc-300 dark:border-zinc-600"
                      />
                      <span className="text-xs text-neutral-600">{region}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
