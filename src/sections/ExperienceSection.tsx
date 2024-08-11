import CardBG1 from "@/components/CardBG1";
import Skill from "@/components/Skill";
import React, { ReactNode } from "react";

type ExperienceType = {
  start: string;
  end: string;
  title: string;
  description: string;
  company: string;
  year?: string;
  link: string;
  skills?: string[];
};

function ExperienceSection() {
  const items: ExperienceType[] = [
    {
      start: "2024",
      end: "Present",
      title: "Senior Frontend Developer, Accessibility",
      company: "Klaviyo",
      link: "https://www.klaviyo.com/",
      description:
        "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skills: ["JavaScript", "TypeScript", "React", "Storybook"],
    },
    {
      start: "2018",
      end: "2024",
      title: "Lead Engineer",
      company: "Upstatement",
      link: "https://upstatement.com/",
      description:
        "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML & SCSS",
        "React",
        "Next.js",
        "React Native",
        "Wordpress",
        "Contentful",
        "Node.js",
        "PHP",
      ],
    },
    {
      start: "JULY",
      end: "DEC",
      year: "2017",
      title: "UI Engineer Co-op",
      company: "Apple",
      link: "https://www.apple.com/apple-music/",
      description:
        "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
      skills: ["Ember", "SCSS", "Javascript", "Musickit.js"],
    },
    {
      start: "2016",
      end: "2017",
      title: "Developer",
      company: "Scout Studio",
      link: "https://scout.camd.northeastern.edu/",
      description:
        "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
      skills: ["Jekyll", "SCSS", "Javascript", "Wordpress"],
    },
    {
      start: "JULY",
      end: "DEC",
      year: "2016",
      title: "Software Engineer Co-op",
      company: "Starry",
      link: "https://us.mullenlowe.com/",
      description:
        "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
      skills: ["Cordova", "Backbone", "Javascript", "CSS"],
    },
    {
      start: "JULY",
      end: "DEC",
      year: "2015",
      title: "Creative Technologist Co-op",
      company: "MullenLowe U.S.",
      link: "https://starry.com/",
      description:
        "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
      skills: ["HTML", "CSS", "Javascript", "jQuery"],
    },
  ];

  return (
    <div className="flex flex-col pt-32 gap-10">
      {items?.map((item, index) => (
        <ExperienceContainer
          className="flex w-full group/experience"
          key={index}
          link={item.link}
        >
          <div className="w-full flex p-4 gap-4 relative group">
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
