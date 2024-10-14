import { JobDescriptionProps } from "@/types/type";

const JobDescription = ({ job } : JobDescriptionProps) => {
  return (
    <div>
      <h1 className="text-lg font-bold text-teal-500">
        {job.title} -{" "}
        <a href="https://www.metfone.com.kh/" className="text-blue-500">
          {job.company}
        </a>
      </h1>
      <h2 className="text-md text-gray-400 font-bold mb-2">
        {job.date}
      </h2>
      <ul className="flex flex-col gap-2 list-disc pl-4 text-gray-400">
        {job.description.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
