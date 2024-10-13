import { LOCATIONS, REGIONS } from "./Filters";

export default function LocationSection({
  locationRef,
  setShowLocations,
  selectedLocations,
  selectedRegions,
  handleFilterChange,
}) {
  const handleLocationToggle = (location) => {
    const newLocations = selectedLocations.includes(location)
      ? selectedLocations.filter((item) => item !== location)
      : [...selectedLocations, location];
    handleFilterChange("locations", newLocations);
  };

  const handleRegionToggle = (region) => {
    const newRegions = selectedRegions.includes(region)
      ? selectedRegions.filter((item) => item !== region)
      : [...selectedRegions, region];
    handleFilterChange("regions", newRegions);
  };

  const handleAllLocations = () => {
    handleFilterChange("locations", [...LOCATIONS]);
  };

  const handleClearLocations = () => {
    handleFilterChange("locations", []);
  };

  const handleAllRegions = () => {
    handleFilterChange("regions", [...REGIONS]);
  };

  const handleClearRegions = () => {
    handleFilterChange("regions", []);
  };

  return (
    <div
      ref={locationRef}
      className="absolute top-full rounded-xl shadow-2xl p-2 z-50 w-full sm:w-[900px] bg-white"
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

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3 border-b sm:border-b-0 sm:border-r p-2">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {LOCATIONS.map((location) => (
              <label key={location} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationToggle(location)}
                  className="rounded border-zinc-300 dark:border-zinc-600"
                />
                <span className="text-xs text-neutral-600">{location}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-2">
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
  );
}
