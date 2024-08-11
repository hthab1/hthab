import { Projects, ProjectType } from "@/data/projects";
import React from "react";
import Skill from "./Skill";
import Link from "next/link";

function ProjectsTable() {
  return (
    <table id="content" className="mt-12 w-full border-collapse text-left">
      <ProjectHeadTable />
      <tbody>
        {Projects.map((project, index) => (
          <ProjectRow key={index} project={project} />
        ))}
      </tbody>
    </table>
  );
}

const ProjectHeadTable = () => {
  return (
    <thead className="sticky top-0 z-10 border-b border-slate-300/10 px-6 py-5">
      <tr>
        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
          Project
        </th>
        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
          Made at
        </th>
        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
          Built with
        </th>
        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
          Link
        </th>
      </tr>
    </thead>
  );
};
const ProjectRow = ({ project }: { project: ProjectType }) => {
  return (
    <tr className="border-b border-slate-300/10 lg:hover:bg-slate-800/50 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{project.madeIn}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <div>
          <div className="block sm:hidden"></div>
          <Link
            href={`/projects/${project?.id}`}
            className="block hover:text-teal-300"
          >
            {project?.name}
          </Link>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="translate-y-px whitespace-nowrap text-[#94A3B8] ">
          {project.madeAt}
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap gap-2">
          {project.stack?.map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="emersoncollective.com (opens in a new tab)"
            >
              <span>
                {" "}
                <span className="inline-block">
                  {project?.linkText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default ProjectsTable;
