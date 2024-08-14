export type ProjectType = {
  id: string;
  name: string;
  link: string;
  linkText: string;
  cover: string;
  description: string;
  stack?: string[];
  frontPage?: boolean;
  detail?: any;
  madeIn?: string;
  madeAt?: string;
};

export const Projects: ProjectType[] = [
  {
    id: "intraverse",
    name: "Intraverse",
    link: "https://www.intraverse.africa/",
    linkText: "intraverse.africa",
    cover: "/intraversecover.png",
    description:
      "Web application allowing travel agents to book packages, including hotels, tours, and flights, for their clients. Features include customizable website templates for agents. Responsibilities include developing and maintaining the tours and hotels booking modules",
    stack: ["React", "HTML", "Tailiwind CSS"],
    frontPage: true,
    detail: {},
    madeIn: "2023",
    madeAt: "Touchcore",
  },
  {
    id: "alansons",
    name: "Alansons ltd",
    link: "https://www.alansonsltd.com/",
    linkText: "alansonsltd.com",
    cover: "/alansonscover.png",
    description:
      "Landing page and multi-page site for a shipping company, featuring a blog section and project showcase. Managed the entire front-end development, including integration with Airtable for dynamic content management using React, Next.js, and Tailwind CSS.",
    stack: ["Next.js", "React", "Airtable", "Typescript"],
    frontPage: true,
    detail: {},
    madeIn: "2024",
    madeAt: "Touhcore",
  },
  {
    id: "odiopay",
    name: "Odiopay",
    link: "https://play.google.com/store/apps/details?id=shopper.odiopay.com&hl=en",
    linkText: "shopper.odiopay.com",
    cover: "/odiopaycover.png",
    description:
      "E-commerce platform enabling users to purchase products with an initial payment and finance the balance through monthly installments. Handled the landing pages and product integration, and built the front end of the mobile app using React Native, ensuring seamless functionality on both iOS and Android.",
    stack: [
      "React Native",
      "React",
      "Typescript",
      "Next.js",
      "Javascript",
      "REST API",
    ],
    frontPage: true,
    detail: {},
    madeIn: "2022",
    madeAt: "Touhcore",
  },
  {
    id: "fixerwithin",
    name: "Fixerwithin",
    link: "https://play.google.com/store/apps/datasafety?id=customer.fixerwithin.com",
    linkText: "customer.fixerwithin.com",
    cover: "/fixerwithincover.png",
    description:
      "Platform connecting handymen with clients. Developed both the client and handyman apps using React Native, integrating APIs with GraphQL. Implemented features such as map integration to facilitate location-based services and enhance user experience.",
    stack: ["React", "React Native", "Javascript", "GraphQL"],
    frontPage: true,
    detail: {},
    madeIn: "2022",
    madeAt: "Touhcore",
  },
  {
    id: "shebatime",
    name: "Shebatime",
    link: "https://shebatime.com/",
    linkText: "shebatime.com",
    cover: "/shebatimecover.png",
    description:
      "Makeup selling platform built from the ground up, handling full-stack development from design to deployment. Utilized the MERN stack (MongoDB, Express, React, Node.js) for the web application, and developed the mobile app using React Native and TypeScript.",
    stack: [
      "React",
      "React Native",
      "Javascript",
      "TypeScript",
      "REST API",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    frontPage: true,
    detail: {},
    madeIn: "2023",
  },
  {
    id: "mamba",
    name: "Mamba fantasy",
    link: "https://apps.apple.com/us/app/mamba-fantasy/id6449004109",
    linkText: "apps.apple.com/us/app/mamba-fantasy",
    cover: "/shebatimecover.png",
    description:
      "Cricket fantasy betting app where I handled the front-end development using React Native. Additionally, I developed a custom plugin to integrate the game into another company's e-commerce app as part of a business deal.",
    stack: ["React", "React Native", "Javascript", "TypeScript", "REST API"],
    detail: {},
    madeIn: "2023",
    madeAt: "Startupagile",
  },
  {
    id: "blueprt",
    name: "Blue print",
    link: "https://blueprt.agency/",
    linkText: "blueprt.agency",
    cover: "/shebatimecover.png",
    description:
      "Built the landing page for a marketing agency using React, Webflow, and JavaScript. Focused on creating a responsive and optimized front-end to enhance user experience and performance.",
    stack: ["React", "Webflow", "Javascript"],
    detail: {},
    madeIn: "2022",
  },
  {
    id: "tetraone",
    name: "Tetraone",
    link: "https://play.google.com/store/apps/details?id=com.tetraone.tetraone&hl=en_US",
    linkText: "com.tetraone.tetraone",
    cover: "/shebatimecover.png",
    description:
      "Developed the dashboard and two React Native apps for a platform that facilitates rent payments, property leasing, and more. Created one app for customers and another for agents, using React and React Native to ensure seamless functionality across all interfaces.",
    stack: ["React", "React Native", "Javascript", "REST API"],
    detail: {},
    madeIn: "2023",
    madeAt: "Touchcore",
  },
  {
    id: "bosscar",
    name: "Bosscar",
    link: "https://play.google.com/store/apps/details?id=com.bosscar.app&hl=en_US",
    linkText: "com.bosscar.app",
    cover: "/shebatimecover.png",
    description:
      "Developed the dashboard and mobile app for a car buying and selling platform. Handled full-stack development using the MERN stack (MongoDB, Express, React, Node.js) for the backend and React Native for the mobile application.",
    stack: [
      "React",
      "React Native",
      "Javascript",
      "TypeScript",
      "REST API",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    detail: {},
    madeIn: "2023",
  },
];
