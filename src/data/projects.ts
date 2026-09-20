import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'campus-assistant',
    title: 'AI-Powered Campus Assistant',
    category: 'WEB DEVELOPMENT',
    tagline: 'Centralized academic assistant for campus life & academic workflows.',
    description:
      'Built a centralized campus assistant concept to help students quickly access verified academic information, announcements, schedule queries, and organize everyday college tasks.',
    problem:
      'Students often face fragmented communication across department notice boards, conflicting schedules, and manual lookup for exam timelines and course syllabi.',
    solution:
      'Developed a responsive web interface backed by structured Python and SQL database services that unifies student timetables, departmental notifications, and campus knowledge into a clean, searchable interface.',
    features: [
      'Centralized academic information and event feeds',
      'Python-driven data processing and request routing',
      'SQL database schema for courses, notices, and student records',
      'Real-time query handling and responsive mobile-first UI',
      'Role-ready architecture for student and faculty views',
    ],
    technologies: ['Python', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    status: 'Completed',
    githubUrl: 'https://github.com/amrit740',
    challenges:
      'Designing an intuitive schema in SQL that handles dynamically scheduled lecture alterations without redundant entries.',
    learnings:
      'Gained deep understanding of relational data modeling, backend request handlers in Python, and user-centric dashboard design.',
    metrics: [
      { label: 'Architecture', value: 'Full-Stack' },
      { label: 'Backend Logic', value: 'Python + SQL' },
      { label: 'Data Model', value: 'Relational Schema' },
    ],
  },
  {
    id: 'study-planner',
    title: 'Smart Study Planner & Performance Tracker',
    category: 'WEB DEVELOPMENT',
    tagline: 'Organizing subjects, deadlines, and academic consistency metrics.',
    description:
      'A comprehensive study-planning web application engineered for organizing curriculum subjects, task prioritization, milestone deadlines, and quantitative performance tracking.',
    problem:
      'Managing academic workloads across multiple concurrent engineering semesters requires disciplined tracking of syllabus coverage, revision intervals, and assignment deadlines.',
    solution:
      'Built a full-stack tracker featuring subject-wise task logging, SQL-based performance metrics persistence, and a visual progress dashboard highlighting pending milestones.',
    features: [
      'Task breakdown by subject, topic priority, and deadline urgency',
      'SQL-based data storage for study logs, completion times, and revisions',
      'Interactive metrics dashboard highlighting low-coverage subject areas',
      'Milestone alerts and daily goal progress tracking',
      'Lightweight, responsive interface for rapid task updates',
    ],
    technologies: ['Python', 'SQL', 'JavaScript', 'CSS3', 'Data Visualization'],
    status: 'Completed',
    githubUrl: 'https://github.com/amrit740',
    challenges:
      'Translating student study logs into actionable consistency metrics without introducing complex manual logging barriers.',
    learnings:
      'Implemented robust SQL queries for aggregating weekly completion rates and learned how user interface simplicity impacts daily task logging habits.',
    metrics: [
      { label: 'Focus Areas', value: 'Task & Progress' },
      { label: 'Storage', value: 'SQL Database' },
      { label: 'Goal Tracking', value: 'Interactive Metrics' },
    ],
  },
  {
    id: 'placement-matching',
    title: 'Smart Placement & Skill Matching Platform',
    category: 'JAVA',
    tagline: 'Matching student profiles with campus placement opportunities.',
    description:
      'An enterprise-grade concept application developed in Java and SQL for analyzing student skill inventories, academic criteria, and matching them against campus placement eligibility requirements.',
    problem:
      'Placement cells and students spend significant manual effort filtering corporate criteria (CGPA cutoffs, backlogs, specific tech competencies) across hundreds of student applicants.',
    solution:
      'Engineered an object-oriented Java application engine that parses student profiles, evaluates multi-variable eligibility rules (e.g. CGPA thresholds, required skill tags), and queries SQL databases for matched vacancies.',
    features: [
      'Java application logic for rule validation and student profile indexing',
      'Complex SQL query routines to match skills and academic eligibility',
      'Opportunity registry with criteria-based filtering (CGPA, department, skills)',
      'Clean data abstraction separating business logic from database operations',
      'Audit logging of match results for administrative transparency',
    ],
    technologies: ['Java', 'SQL', 'OOP Principles', 'Database Design', 'JDBC'],
    status: 'Completed',
    githubUrl: 'https://github.com/amrit740',
    challenges:
      'Building flexible criteria-matching algorithms in Java that can accommodate both hard requirements (e.g., minimum CGPA) and soft skill preferences.',
    learnings:
      'Mastered core Java Object-Oriented Programming (OOP) paradigms, JDBC transactions, and normalized relational database design.',
    metrics: [
      { label: 'Core Engine', value: 'Java OOP' },
      { label: 'Rule Engine', value: 'Eligibility Logic' },
      { label: 'Database', value: 'Structured SQL' },
    ],
  },
  {
    id: 'travel-wise',
    title: 'Travel Wise',
    category: 'WEB DEVELOPMENT',
    tagline: 'Plan better. Explore more. India-focused travel platform.',
    description:
      'Travel Wise is an India-focused travel planning platform concept designed to help travelers discover iconic destinations, organize day-by-day itineraries, explore cultural sights, and curate custom journeys.',
    problem:
      'Planning multi-city journeys across India requires switching between fragmented blogs, ticket portals, and maps with little support for organized daily schedules.',
    solution:
      'Designed an integrated web prototype offering destination discovery, interactive map visualization, day-by-day travel planners, and exportable itineraries.',
    features: [
      'Curated destination discovery highlighting Indian heritage and nature',
      'Interactive map exploration with coordinate-pinned attractions',
      'Day-by-day itinerary creator with activity scheduling',
      'Category badges (Sightseeing, Stays, Dining, Culture)',
      'Responsive interface crafted with modern React and clean styling',
    ],
    technologies: ['React.js', 'JavaScript', 'Firebase', 'Maps API', 'Tailwind CSS'],
    status: 'Concept Prototype',
    githubUrl: 'https://github.com/amrit740',
    challenges:
      'Harmonizing multi-category destinations with clear geographic coordinate representations and smooth UI responsiveness.',
    learnings:
      'Developed deeper proficiency in state management in React, modular UI components, and geographic UI patterns.',
    metrics: [
      { label: 'Platform', value: 'React Web App' },
      { label: 'Scope', value: 'India Destinations' },
      { label: 'Status', value: 'Design Prototype' },
    ],
  },
  {
    id: 'gamified-learning',
    title: 'Gamified Learning Platform',
    category: 'EDUCATION',
    tagline: 'Making STEM education engaging and accessible for rural students.',
    description:
      'A gamified learning platform concept developed to make foundational STEM education interactive, motivating, and accessible for students in rural communities.',
    problem:
      'Traditional rote learning in underserved regions often lacks engagement, immediate feedback, and practical conceptual problem-solving incentives.',
    solution:
      'Created an interactive learning concept featuring modular bite-sized lessons, achievement badges, visual quizzes, and an offline-first architecture.',
    features: [
      'Interactive quiz modules with immediate feedback loops',
      'Gamified progression: experience points, badges, and learning streaks',
      'Lightweight, asset-optimized frontend engineered for low-bandwidth environments',
      'Accessible, clean visual hierarchy catering to young learners',
      'Clear modular structure allowing new STEM topics to be added seamlessly',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Web Accessibility'],
    status: 'Concept Prototype',
    githubUrl: 'https://github.com/amrit740',
    challenges:
      'Balancing playful gamification elements with educational depth while keeping network payloads minimal for slower internet connections.',
    learnings:
      'Strengthened skills in user engagement UX, state progression logic, and optimizing bundle sizes for accessibility.',
    metrics: [
      { label: 'Domain', value: 'EdTech' },
      { label: 'Target Audience', value: 'STEM Students' },
      { label: 'UX Focus', value: 'Gamified Learning' },
    ],
  },
  {
    id: 'dsa-in-java',
    title: 'DSA in Java',
    category: 'JAVA',
    tagline: 'Understanding logic. Building efficient algorithmic solutions.',
    description:
      'A structured collection of Data Structures and Algorithms implementations in Java, covering fundamental programming concepts, searching, sorting, recursion, trees, graphs, and problem-solving techniques.',
    problem:
      'Mastering software engineering fundamentals requires clean, well-documented implementations with precise asymptotic time and space complexity evaluations.',
    solution:
      'Engineered clean Java implementations of classic data structures (Arrays, Linked Lists, Stacks, Queues, Binary Trees) and core algorithmic strategies (Binary Search, Merge Sort, Quick Sort, DFS/BFS) with unit tests and complexity analysis.',
    features: [
      'Efficient Searching & Sorting (Binary Search, Merge Sort, Quick Sort)',
      'Linear & Hierarchical Data Structures (Custom Linked Lists, Trees, Heaps)',
      'Recursion & Dynamic Programming fundamentals',
      'Rigorous Big-O time and space complexity documentation',
      'Object-Oriented design adhering to clean code conventions',
    ],
    technologies: ['Java', 'Data Structures', 'Algorithms', 'OOP', 'GitHub'],
    status: 'Completed',
    githubUrl: 'https://github.com/amrit740',
    codeSnippet: {
      language: 'java',
      filename: 'BinarySearch.java',
      code: `public class BinarySearch {
    // Binary Search in a sorted array
    // Time Complexity: O(log N) | Space Complexity: O(1)
    public static int search(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid] == target) {
                return mid; // Element found at index mid
            } else if (arr[mid] < target) {
                low = mid + 1; // Search right half
            } else {
                high = mid - 1; // Search left half
            }
        }
        return -1; // Element not present
    }

    public static void main(String[] args) {
        int[] sortedData = { 2, 5, 8, 12, 16, 23, 38, 56, 72, 91 };
        int target = 23;
        int index = search(sortedData, target);
        System.out.println("Element " + target + " found at index: " + index);
    }
}`,
      complexity: {
        time: 'O(log N)',
        space: 'O(1)',
      },
    },
    challenges:
      'Avoiding integer overflow in midpoint calculations (`low + (high - low) / 2`) and managing base cases cleanly in recursive variants.',
    learnings:
      'Solidified mastery over asymptotic analysis, memory pointer manipulation in Java, and algorithmic optimization patterns.',
    metrics: [
      { label: 'Language', value: 'Core Java' },
      { label: 'Concepts', value: 'DSA & OOP' },
      { label: 'Repository', value: 'github.com/amrit740' },
    ],
  },
];
