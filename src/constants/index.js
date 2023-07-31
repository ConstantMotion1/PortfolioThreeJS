import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    threejs,
    twou,
    helaspice,
    centennial,
    ez,
    pj,
    SCClogin
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Three.js",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Coding Teaching Assistant",
      company_name: "2U",
      icon: twou,
      iconBg: "#383E56",
      date: "January 2023 - Present",
      points: [
        "Assist students during activity and project work time",
        "Research and answer student questions",
        "Provide empathy, support, and encouragement while engaging students",
        "Utilize effective teaching methods to see greater results",
      ],
    },
    {
      title: "Food Lab Technician",
      company_name: "Hela Spice",
      icon: helaspice,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Jun 2021",
      points: [
        "Working in accordance with the Ontario Occupational Health & Safety Act",
        "Following Good Manufacturing Practices and Food Safety guidelines",
        "Various chemical, physical, allergen and sensory testing as required",
        "Close cooperation with manufacturing department, including numerous on floor checks & supervision",
        "Documentation checks and results recording",
        "HACCP checks",
      ],
    },
    {
      title: "Chemistry Lab Technician",
      company_name: "Centennial College",
      icon: centennial,
      iconBg: "#383E56",
      date: "Sept 2018 - Apr 2019",
      points: [
        "Restocked laboratory work stations and sterilized surfaces to maintain readiness for any project requirement",
        "Efficiently organized and maintined equipment to keep laboratory productive and safe",
        "Accurately made chemical concentrations for labs",
        "Made sure all students wore porper PPEs in the lab environment",
      ],
    },
  ];
  
  const projects = [
    {
      name: "SCC Decor",
      description:
        "Internal employee app used to track convention events and the decoration that accompany them",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase api",
          color: "green-text-gradient",
        },
        {
          name: "realtime database firebase",
          color: "pink-text-gradient",
        },
      ],
      image: SCClogin,
      source_code_link: "https://github.com/ConstantMotion1/SCCDecor",
    },
    {
      name: "EZ Dossier",
      description:
        "Portfolio maker for users to create a developer portfolio to showcase their projects",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "graphQL",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: ez,
      source_code_link: "https://github.com/ConstantMotion1/EZDossier",
    },
    {
      name: "Psychic Journey",
      description:
        "Hangman game with RPG style elements and character selection",
      tags: [
        {
          name: "handlebars",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: pj,
      source_code_link: "https://github.com/NathanKryz/psychic-journey",
    },
  ];
  
  export { services, technologies, experiences, projects };