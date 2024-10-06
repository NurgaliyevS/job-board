import React from "react";

const JobCard = ({ job }) => (
  <article className="bg-white shadow-lg rounded-xl overflow-hidden mb-4">
    <div className="p-4">
      <header className="mb-2">
        <h2 className="text-xl font-bold">
          <a href={job.url} className="hover:underline">
            {job.title}
          </a>
        </h2>
      </header>
      <h3 className="text-lg mb-1">{job.company}</h3>
      <h4 className="text-gray-600 mb-2 flex items-center">
        <img
          src="/location-sign-svgrepo-com.svg"
          alt="Location"
          className="w-4 h-4 inline-block mr-1"
        />
        {job.location}
      </h4>
      {job?.salary && (
        <p className="text-sm mb-1">
          <span className="font-light">Salary: </span>
          {job.salary}
        </p>
      )}
      {job?.deadline && (
        <p className="text-sm mb-1">
          <span className="font-light">Deadline: </span>
          {job.deadline}
        </p>
      )}
      {job?.experience && (
        <p className="text-sm mb-1">
          <span className="font-light">Experience: </span>
          {job.experience}
        </p>
      )}
      {job?.description && <p className="text-sm mt-2">{job.description}</p>}
    </div>
    <footer className="px-4 pb-2 flex gap-2 items-center">
      {job.featured && <div className="badge badge-primary">Featured</div>}
      <div className="text-sm text-gray-600">{job.publishDate}</div>
    </footer>
  </article>
);

function JobList() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {mockJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobList;

const mockJobs = [
  {
    title: "Engagement Coordinator",
    company: "Lower Nehalem Community Trust",
    location: "Manzanita, OR",
    salary: "$48,000 - $55,000",
    deadline: "Oct 31, 2024",
    experience: "2 - 6 years",
    description:
      "We are seeking an enthusiastic Engagement Coordinator to join our team and help connect our community with nature conservation efforts.",
    publishDate: "2 days ago",
    featured: true,
    url: "https://www.example.com/job-listing-1",
  },
  {
    title: "Wildlife Biologist",
    company: "National Park Service",
    location: "Yellowstone, WY",
    salary: "$65,000 - $85,000",
    deadline: "Nov 15, 2024",
    experience: "5+ years",
    description:
      "Join our team of dedicated scientists studying and protecting the diverse wildlife in Yellowstone National Park.",
    publishDate: "1 week ago",
    featured: false,
    url: "https://www.example.com/job-listing-2",
  },
  {
    title: "Sustainable Agriculture Specialist",
    company: "EcoFarm Initiative",
    location: "Remote",
    experience: "3 - 5 years",
    description:
      "Help farmers transition to sustainable practices. This role combines agricultural expertise with environmental conservation.",
    publishDate: "3 days ago",
    featured: true,
    url: "https://www.example.com/job-listing-3",
  },
  {
    title: "Marine Conservation Project Manager",
    company: "Ocean Alliance",
    location: "San Diego, CA",
    salary: "$70,000 - $90,000",
    deadline: "Dec 1, 2024",
    experience: "7+ years",
    description:
      "Lead exciting projects to protect marine ecosystems and promote sustainable fishing practices along the California coast.",
    publishDate: "Just now",
    featured: false,
    url: "https://www.example.com/job-listing-4",
  },
  {
    title: "Environmental Education Coordinator",
    company: "Green Schools Network",
    location: "Boston, MA",
    salary: "$45,000 - $55,000",
    experience: "1 - 3 years",
    description:
      "Develop and implement environmental education programs for K-12 students, fostering the next generation of environmental stewards.",
    publishDate: "5 days ago",
    featured: true,
    url: "https://www.example.com/job-listing-5",
  },
];
