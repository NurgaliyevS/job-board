import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";
import Icon from "./Filters/Filters";
import FilterSection from "./Filters/FilterSection";
import LocationSection from "./Filters/LocationSection";
import { useJobContext } from "./Filters/JobContext";

export default function Main() {
  const [showFilters, setShowFilters] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const filterRef = useRef(null);
  const locationRef = useRef(null);
  const filterBtnRef = useRef(null);
  const locationBtnRef = useRef(null);
  const plausible = usePlausible();
  const { data: session } = useSession();

  const {
    selectedCategories,
    selectedJobTypes,
    selectedLocations,
    selectedRegions,
    handleFilterChange,
  } = useJobContext();

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

  return (
    <section className="container max-w-6xl mx-auto flex flex-col px-4 sm:px-8 p-2 lg:p-6 my-2">
      <div className="flex flex-col gap-6 sm:gap-10 lg:gap-12 mb-6 sm:mb-10">
        <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight md:-mb-4">
          Discover The Latest Environmental Jobs
        </h1>
        <p className="text-base sm:text-lg text-base-content-secondary leading-relaxed max-w-md">
          Job board for environmental professionals.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 relative">
        <button
          ref={filterBtnRef}
          onClick={() => handleButtonClick("filters")}
          className="btn bg-white btn-outline btn-error gap-0.5 text-base border-2 w-full sm:w-auto"
        >
          Job Filters
          <Icon />
        </button>
        <button
          ref={locationBtnRef}
          onClick={() => handleButtonClick("locations")}
          className="btn bg-white btn-outline btn-error gap-0.5 text-base border-2 w-full sm:w-auto"
        >
          Locations
          <Icon />
        </button>

        {showFilters && (
          <FilterSection
            filterRef={filterRef}
            setShowFilters={setShowFilters}
            selectedCategories={selectedCategories}
            selectedJobTypes={selectedJobTypes}
            handleFilterChange={handleFilterChange}
          />
        )}

        {showLocations && (
          <LocationSection
            locationRef={locationRef}
            setShowLocations={setShowLocations}
            selectedLocations={selectedLocations}
            selectedRegions={selectedRegions}
            handleFilterChange={handleFilterChange}
          />
        )}
      </div>
    </section>
  );
}