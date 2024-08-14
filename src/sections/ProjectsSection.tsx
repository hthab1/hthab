import CardBG1 from "@/components/CardBG1";
import Skill from "@/components/Skill";
import { Projects, ProjectType } from "@/data/projects";
import React, { ReactNode } from "react";

function ProjectsSection() {
  return (
    <div className="flex flex-col pt-32 gap-10 relative">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 sticky backdrop-blur flex lg:hidden top-0 py-3 z-20 px-4">
        Projects
      </h2>
      {Projects?.filter((project) => project?.frontPage)?.map((item, index) => (
        <ExperienceContainer
          className="flex w-full group/experience"
          key={index}
          link={item.link}
        >
          <div className="w-full flex flex-col-reverse lg:flex-row p-4 gap-4 relative group">
            <CardBG1 />
            <ProjectHeader item={item} />
            <div className="flex flex-col flex-1 z-10">
              <ProjectTitle item={item} />
              <p className="mt-2 text-sm leading-normal">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.stack?.map((skill, skillIndex) => (
                  <Skill skill={skill} key={index} />
                ))}
              </div>
            </div>
          </div>
        </ExperienceContainer>
      ))}
      <ProjectFullArchive />
    </div>
  );
}

const ProjectHeader = ({ item }: { item: ProjectType }) => {
  return (
    <header className="w-[200px] lg:w-[110px] text-[#64748B] text-xs z-10 opacity-60">
      <img
        src={item?.cover}
        alt=""
        loading="lazy"
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      />
    </header>
  );
};

const ProjectTitle = ({ item }: { item: ProjectType }) => {
  return (
    <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 group/experience:hover:text-teal-300  group/link text-base">
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
      <span>
        {item.name} {item.madeAt ? "·" : ""}{" "}
        <span className="inline-block">
          {item.madeAt}
          <ArrowIcon />
        </span>
      </span>
    </div>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

const ProjectFullArchive = () => {
  return (
    <div className="mt-12 px-4 lg:px-0">
      <a
        className="inline-flex items-center font-semibold leading-tight text-slate-200  group"
        aria-label="View Full Project Archive"
        href="/projects"
      >
        <span>
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
            View More Project{" "}
          </span>
          <span className="whitespace-nowrap ">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              Archive
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </span>
      </a>
    </div>
  );
};

const ExperienceContainer = ({
  link,
  children,
  className,
}: {
  link?: string;
  children: ReactNode;
  className?: string;
}) => {
  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className={`${className}`}>
      {children}
    </a>
  ) : (
    <div className={`${className}`}>{children}</div>
  );
};

export default ProjectsSection;
