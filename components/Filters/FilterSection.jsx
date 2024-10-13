import { CATEGORIES, JOB_TYPES } from "./Filters";

export default function FilterSection({
  filterRef,
  setShowFilters,
  selectedCategories,
  selectedJobTypes,
  handleFilterChange,
}) {
  const handleCategoryToggle = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    handleFilterChange("categories", newCategories);
  };

  const handleJobTypeToggle = (jobType) => {
    const newJobTypes = selectedJobTypes.includes(jobType)
      ? selectedJobTypes.filter((item) => item !== jobType)
      : [...selectedJobTypes, jobType];
    handleFilterChange("jobTypes", newJobTypes);
  };

  const handleAllCategories = () => {
    handleFilterChange("categories", [...CATEGORIES]);
  };

  const handleClearCategories = () => {
    handleFilterChange("categories", []);
  };

  const handleAllJobTypes = () => {
    handleFilterChange("jobTypes", [...JOB_TYPES]);
  };

  const handleClearJobTypes = () => {
    handleFilterChange("jobTypes", []);
  };

  return (
    <div
      ref={filterRef}
      className="absolute top-full rounded-xl shadow-2xl p-2 z-50 w-full sm:w-[900px] bg-white"
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
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3 border-b sm:border-b-0 sm:border-r p-2">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CATEGORIES.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="rounded border-zinc-300 dark:border-zinc-600"
                />
                <span className="text-xs text-neutral-600">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-2">
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
  );
}
