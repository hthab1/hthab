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
  linkText: "newline.co/courses/build-a-spotify-connected-app",
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
  exampleProject,
  exampleProject,
  exampleProject,
  exampleProject,
  exampleProject,
];
