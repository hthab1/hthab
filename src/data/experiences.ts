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
