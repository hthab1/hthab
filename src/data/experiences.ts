export type ExperienceType = {
  start: string;
  end: string;
  title: string;
  description: string;
  company: string;
  year?: string;
  link: string;
  skills?: string[];
};

export const Experiences: ExperienceType[] = [
  {
    start: "2023",
    end: "Present",
    title: "Senior Frontend Developer",
    company: "Touchcore",
    link: "https://touchcore.com.ng/",
    description:
      "Developed and maintained front-end solutions using Next.js, TypeScript, and Tailwind CSS, delivering high-conversion landing pages. Built and managed React Native applications for smooth, cross-platform user experiences. Led front-end development for a live booking website, enabling efficient hotel, tour, and flight bookings.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "GraphQL",
      "React Native",
      "REST API",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    start: "2022",
    end: "2023",
    title: "Frontend Developer",
    company: "Startupagile",
    link: "https://startupagile.io/",
    description:
      "Led the development of the user interface for Mamba Fantasy, a dynamic fantasy betting application built with React Native and TypeScript. Also took a hands-on approach in both frontend development and API integration for StartupAgile's internal projects.",
    skills: ["JavaScript", "TypeScript", "React", "React Native", "REST API"],
  },
  {
    start: "2021",
    end: "2022",
    title: "Junior Frontend Developer",
    company: "Touchcore",
    link: "https://touchcore.com.ng/",
    description:
      "ed front-end development across various projects using React, Redux, and React Native. Designed the UI architecture for FixerWithin, a handyman app, and developed both the mobile app and dashboard for TetraOne, a real estate platform. Also contributed to VoixOut, a social media platform, and optimized the user interface for Odiopay, an e-commerce site.",
    skills: ["Javascript", "GraphQL", "React", "React Native", "REST API"],
  },
];
