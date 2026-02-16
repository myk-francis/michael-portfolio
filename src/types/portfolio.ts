import type { IconType } from "react-icons";

export interface NavItem {
  id: string;
  label: string;
}

export type SkillItem =
  | {
      name: string;
      icon: string;
    }
  | {
      name: string;
      iconComponent: IconType;
      iconColorClass?: string;
    };

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  stack: string[];
  demoUrl: string;
  codeUrl: string;
}

export interface SocialItem {
  label: string;
  url: string;
}
