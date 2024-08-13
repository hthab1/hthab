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

let exampleProject = {
  id: "spotify-app",
  name: "Build a Spotify Connected",
  link: "https://www.newline.co/courses/build-a-spotify-connected-app",
  linkText: "newline.co",
  cover: "/example.jpeg",
  description:
    "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
  stack: ["React", "Express", "Sportify API", "Heroku"],
  frontPage: true,
  detail: {},
  madeIn: "2018",
  madeAt: "Upstatement",
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
];
