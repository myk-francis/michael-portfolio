import type { NavItem, ProjectItem, SkillItem, SocialItem } from "../types/portfolio";
import aws from "../assets/aws.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import handyman from "../assets/Handyman.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import movies from "../assets/movies.png";
import node from "../assets/node.png";
import portfolio from "../assets/homePorto.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import coinbase from "../assets/HomeLight.png";
import realEstate from "../assets/realestate.jpg";
import { SiCloudflare, SiNextdotjs, SiPrisma, SiReact, SiVercel } from "react-icons/si";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const skills: SkillItem[] = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "React Native", iconComponent: SiReact, iconColorClass: "text-cyan-300" },
  { name: "Next.js", iconComponent: SiNextdotjs },
  { name: "Node.js", icon: node },
  { name: "Prisma", iconComponent: SiPrisma, iconColorClass: "text-emerald-300" },
  { name: "MongoDB", icon: mongo },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Vercel", iconComponent: SiVercel },
  { name: "Cloudflare", iconComponent: SiCloudflare, iconColorClass: "text-orange-300" },
  { name: "Firebase", icon: firebase },
  { name: "GitHub", icon: github },
  { name: "AWS", icon: aws }
];

export const projects: ProjectItem[] = [
  {
    title: "Movie Discovery App",
    description: "React web app for browsing and filtering movie content.",
    image: movies,
    stack: ["React", "Tailwind", "API"],
    demoUrl: "https://myk-francis.github.io/michael-portfolio/",
    codeUrl: "https://github.com/myk-francis/ellipsis_js_challenge"
  },
  {
    title: "Handyman Mobile App",
    description: "Hybrid mobile solution for service booking and management.",
    image: handyman,
    stack: ["React Native", "Expo", "Firebase"],
    demoUrl: "https://github.com/myk-francis/handyman",
    codeUrl: "https://github.com/myk-francis/handyman"
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio built for performance and clean storytelling.",
    image: portfolio,
    stack: ["React", "Tailwind", "GitHub Pages"],
    demoUrl: "https://myk-francis.github.io/mike-portfolio/",
    codeUrl: "https://github.com/myk-francis/mike-portfolio"
  },
  {
    title: "Coinbase Experience",
    description: "Crypto dashboard concept with responsive data presentation.",
    image: coinbase,
    stack: ["React", "Charts", "CSS"],
    demoUrl: "https://github.com/myk-francis/coinbase",
    codeUrl: "https://github.com/myk-francis/coinbase"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing interface with focused conversion UX.",
    image: realEstate,
    stack: ["React", "Node", "MongoDB"],
    demoUrl: "https://myk-francis.github.io/michael-portfolio/",
    codeUrl: "https://github.com/myk-francis"
  }
];

export const socialLinks: SocialItem[] = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/michael-francis-733135149"
  },
  {
    label: "GitHub",
    url: "https://github.com/myk-francis"
  }
];
