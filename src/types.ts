export interface Project {
  id: string;
  title: string;
  category: 'WEB DEVELOPMENT' | 'JAVA' | 'EDUCATION' | 'HACKATHON' | 'EXPERIMENTS';
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  status: 'Completed' | 'In Development' | 'Concept Prototype';
  githubUrl?: string;
  liveUrl?: string;
  challenges?: string;
  learnings?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
    complexity?: { time: string; space: string };
  };
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'PROGRAMMING' | 'FRONTEND' | 'BACKEND' | 'DATABASES' | 'TOOLS' | 'CORE CS';
  iconName?: string;
  description: string;
  projects: string[];
  tag?: string;
}

export interface HackathonItem {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  focus: string;
  technologies: string[];
  verified: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation: string;
  semester: string;
  cgpa: string;
  period: string;
  details: string[];
}
