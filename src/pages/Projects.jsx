import { useState } from "react";
import { getConfigData } from "../data/configReader";
import { useQuery } from "@tanstack/react-query";
import coverDefault from "../../public/FavIcon_portfolio.png";
const fetchProjects = async () => {
  const response = await fetch(
    "https://amirreza-dev.info/api/projects"
  );
  console.log(response);
  return response.json();
};

export default function Home() {
  const configData = getConfigData();
  const projects = configData.projects;
  const [loading, isLoadig] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  const {
    data: projectsdb,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <>
      <div className="px-2 mt-3 mb-3">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              Projects
            </div>
          </div>
          {/* Projects List */}
          <div className="flex flex-col">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              (projectsdb || projects).map((project, index) => (
                <a
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                  href={project.projectLink || project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200 hidden md:flex md:items-center md:justify-content md:px-3">
                    <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={project.imageUrl || coverDefault}
                        alt="project image"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="font-medium text-lg">{project.title}</h1>
                    <p className="text-gray-500 text-md">
                      {project.description}
                    </p>
                  </div>
                  <button className="ml-auto hidden md:inline-block">
                    <svg
                      className={svgClass}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
