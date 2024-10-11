import { format } from "date-fns";

const JobCard = ({ job }) => (
  <article className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="p-4">
      <header className="mb-2">
        <h2 className="text-xl font-bold">
          <a href={"#"} className="hover:underline">
            {job.JobTitle}
          </a>
        </h2>
      </header>
      <h3 className="text-lg mb-1">{job.EmployerName}</h3>
      <h4 className="text-gray-600 mb-2 flex items-center">
        <img
          src="/location-sign-svgrepo-com.svg"
          alt="Location"
          className="w-4 h-4 inline-block mr-1"
        />
        {job?.Location}
      </h4>
      {job?.Salary && (
        <p className="text-sm mb-1">
          <span className="font-light">Salary: </span>
          {job.Salary}
        </p>
      )}
      {job?.Deadline && (
        <p className="text-sm mb-1">
          <span className="font-light">Deadline: </span>
          {format(new Date(job.Deadline), "MMMM dd, yyyy")}
        </p>
      )}
      {job?.Experience && (
        <p className="text-sm mb-1">
          <span className="font-light">Experience: </span>
          {job.Experience}
        </p>
      )}
      {job?.JobDescription && (
        <p className="text-sm mt-2">{job.JobDescription}</p>
      )}
    </div>
    <footer className="px-4 pb-2 flex gap-2 items-center">
      {job.isFeatured && <div className="badge badge-primary">Featured</div>}
      <div className="text-sm text-gray-600">
        {format(new Date(job.Published), "MMMM dd, yyyy")}
      </div>
    </footer>
  </article>
);

export default JobCard;