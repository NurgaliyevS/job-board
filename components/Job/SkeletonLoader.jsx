const SkeletonLoader = () => (
  <article className="bg-white shadow-lg rounded-xl overflow-hidden animate-pulse">
    <div className="p-4">
      <header className="mb-2">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      </header>
      <div className="h-5 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="flex items-center mb-2">
        <div className="w-4 h-4 bg-gray-200 rounded-full mr-1"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-20 bg-gray-200 rounded w-full mt-2"></div>
    </div>
    <footer className="px-4 pb-2 flex gap-2 items-center">
      <div className="h-6 bg-gray-200 rounded w-20"></div>
      <div className="h-4 bg-gray-200 rounded w-32"></div>
    </footer>
  </article>
);

export default SkeletonLoader;
