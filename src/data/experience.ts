import { EducationItem, HackathonItem } from '../types';

export const HACKATHONS: HackathonItem[] = [
  {
    id: 'sih',
    name: 'Smart India Hackathon (SIH)',
    role: 'Participant & Core Developer',
    period: 'Verified Hackathon Experience',
    description:
      'Participated in the premier nationwide innovation competition, collaborating with a cross-functional team to conceptualize, design, and architect digital solutions addressing real-world problem statements.',
    focus: 'Rapid Problem Solving & Collaborative Development',
    technologies: ['Full-Stack Development', 'Problem Solving', 'Data Architecture', 'Team Collaboration'],
    verified: true,
  },
  {
    id: 'frosthacks',
    name: 'FrostHacks',
    role: 'Participant & Developer',
    period: 'Verified Hackathon Experience',
    description:
      'Engaged in intense hackathon sprint, participating in team brainstorming, rapid prototyping, and delivering functional software solutions under strict time constraints.',
    focus: 'Agile Prototyping & Interface Design',
    technologies: ['Web Technologies', 'Application Logic', 'Git Workflow', 'Feature Delivery'],
    verified: true,
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Academy of Technology',
  affiliation: 'Affiliated with MAKAUT (Maulana Abul Kalam Azad University of Technology)',
  semester: '5th Semester (Graduation Expected 2028)',
  cgpa: '8.425 / 10.0',
  period: '2022 – 2026 / 2028',
  details: [
    'Cumulative Grade Point Average (CGPA): 8.425 / 10.0 through 4th semester',
    'Focus coursework: Data Structures, Algorithms, OOP, Database Management Systems, OS, Computer Networks',
    'Higher Secondary Examination: 72%',
    'Secondary School Examination: 80%',
    'Active participant in technical activities, coding challenges, and hackathon teams',
  ],
};

export const INTERNSHIP_AREAS = [
  {
    title: 'Application Development & Interface Design',
    description:
      'Hands-on building of responsive, user-friendly frontend interfaces and integrating clean functional components with accessible web design principles.',
  },
  {
    title: 'Backend & Database Systems',
    description:
      'Designing relational SQL schemas, writing optimized queries, and implementing backend application logic using Java and Python.',
  },
  {
    title: 'Debugging, Testing & Code Quality',
    description:
      'Identifying functional edge cases, conducting component testing, optimizing algorithmic bottlenecks, and writing clean, maintainable documentation.',
  },
  {
    title: 'Collaborative Engineering & Git Workflows',
    description:
      'Working with version control, participating in feature reviews, and learning new technology stacks including Node.js, React.js, and cloud ecosystems.',
  },
];
