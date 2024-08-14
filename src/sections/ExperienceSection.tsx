import CardBG1 from "@/components/CardBG1";
import Skill from "@/components/Skill";
import { Experiences, ExperienceType } from "@/data/experiences";
import React, { ReactNode } from "react";

function ExperienceSection() {
  return (
    <div className="flex flex-col pt-32 gap-10 relative px-4 lg:px-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 sticky backdrop-blur flex lg:hidden top-0 py-3 z-20">
        Experience
      </h2>
      {Experiences?.map((item, index) => (
        <ExperienceContainer
          className="flex w-full group/experience"
          key={index}
          link={item.link}
        >
          <div className="w-full flex flex-col lg:flex-row lg:p-4 gap-4 relative group">
            <CardBG1 />
            <ExperienceHeader item={item} />
            <div className="flex flex-col flex-1 z-10">
              <ExperienceTitle item={item} />
              <p className="mt-2 text-sm leading-normal">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills?.map((skill, skillIndex) => (
                  <Skill skill={skill} key={index} />
                ))}
              </div>
            </div>
          </div>
        </ExperienceContainer>
      ))}
      <ExperienceResume />
    </div>
  );
}

const ExperienceHeader = ({ item }: { item: ExperienceType }) => {
  return (
    <header className="w-[110px] text-[#64748B] text-xs z-10">
      {item?.start} — {item?.end} {item?.year}
    </header>
  );
};

const ExperienceTitle = ({ item }: { item: ExperienceType }) => {
  return (
    <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 group/experience:hover:text-teal-300  group/link text-base">
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
      <span>
        {item.title} ·{" "}
        <span className="inline-block">
          {item.company}
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

const ExperienceResume = () => {
  return (
    <div>
      <a
        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View Full Résumé (opens in a new tab)"
      >
        <span>
          View Full{" "}
          <span className="inline-block">
            Resume
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
    <a href={link} className={`${className}`}>
      {children}
    </a>
  ) : (
    <div className={`${className}`}>{children}</div>
  );
};

export default ExperienceSection;
