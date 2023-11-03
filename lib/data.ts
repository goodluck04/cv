import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/1.png";
import rmtdevImg from "@/public/2.png";
import wordanalyticsImg from "@/public/3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Gym Portfolio",
    description:"Designed and developed a fully responsive gym website.Ensured the website responsiveness on various devices,",
    tags: ["React", "TypeScript", "React Hook Form", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Blog App",
    description:
      "Developed a full-stack application using Next.js.Implemented authentication system with NextAuth.js.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind", "Mongoose"],
    imageUrl: rmtdevImg,
  },
  {
    title: "NEXTUI",
    description:"Designed Dribbble-inspired web platform using Next.js, providing artists and creators with a space to showcase their work.",
    tags: ["React", "Next.js", "Postgres", "Tailwind", "Prisma"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Rest API",
  "C++",
  "Express",
  "PostgreSQL",
  "Python",
  "Azure",
  "Framer Motion",
  "Algorithm",
  "Data Structure"
] as const;