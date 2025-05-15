import { Experience, NavLink, Project, Service, Skill, SocialLink } from "./types";
import { 
  Code2Icon, DatabaseIcon, ServerIcon, 
  GlobeIcon, LayoutIcon, SmartphoneIcon, 
  AppleIcon, PenToolIcon, SettingsIcon
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/samimhossainsujon", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/samimhossainsujon", icon: "Linkedin" },
  { platform: "Twitter", url: "https://x.com/samimhossain_s", icon: "Twitter" },
  { platform: "Instagram", url: "https://instagram.com/samimhossainsujon", icon: "Instagram" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", level: 90, icon: "html", category: "frontend" },
  { name: "CSS3", level: 85, icon: "css", category: "frontend" },
  { name: "JavaScript", level: 90, icon: "javascript", category: "frontend" },
  { name: "TypeScript", level: 85, icon: "typescript", category: "frontend" },
  { name: "React.js", level: 90, icon: "react", category: "frontend" },
  { name: "Redux", level: 80, icon: "redux", category: "frontend" },
  { name: "Next.js", level: 85, icon: "nextjs", category: "frontend" },
  { name: "Node.js", level: 85, icon: "nodejs", category: "backend" },
  { name: "Express.js", level: 85, icon: "express", category: "backend" },
  { name: "MongoDB", level: 80, icon: "mongodb", category: "database" },
  { name: "Mongoose", level: 80, icon: "mongoose", category: "database" },
  { name: "Git", level: 85, icon: "git", category: "other" },
  { name: "TailwindCSS", level: 90, icon: "tailwind", category: "frontend" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior MERN Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led the development of a customer management platform using React, Redux, and Node.js",
      "Implemented RESTful APIs and optimized database queries",
      "Mentored junior developers and conducted code reviews",
      "Deployed applications using CI/CD pipelines"
    ],
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Docker"],
  },
  {
    company: "Digital Solutions Ltd",
    role: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Developed responsive web applications using React, Node.js, and Express",
      "Created and maintained MongoDB databases with advanced querying",
      "Integrated third-party APIs and payment gateways",
      "Improved application performance by 40%"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "AWS"],
  },
  {
    company: "WebCraft Studios",
    role: "Frontend Developer",
    duration: "2018 - 2020",
    description: [
      "Built interactive UI components using React and Redux",
      "Implemented responsive designs and animations",
      "Collaborated with designers to ensure pixel-perfect implementation",
      "Reduced load times by implementing code splitting and lazy loading"
    ],
    technologies: ["React", "Redux", "JavaScript", "HTML", "CSS", "SASS"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with the MERN stack. Includes user authentication, product management, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    demoUrl: "https://demo-taskmanager.com",
    githubUrl: "https://github.com/username/taskmanager",
    featured: true,
  },
  {
    title: "Real Estate Listings",
    description: "A real estate platform with property listings, search functionality, filtering, and user profiles for saving favorite properties.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Node.js", "MongoDB", "Google Maps API"],
    demoUrl: "https://demo-realestate.com",
    githubUrl: "https://github.com/username/realestate",
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard for tracking performance across multiple platforms.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Chart.js", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://demo-dashboard.com",
    githubUrl: "https://github.com/username/dashboard",
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application allowing users to log workouts, track progress, and set fitness goals.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Chart.js"],
    demoUrl: "https://demo-fitness.com",
    githubUrl: "https://github.com/username/fitness",
  },
  {
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing platform with search, filtering, and user profiles.",
    image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
    demoUrl: "https://demo-recipes.com",
    githubUrl: "https://github.com/username/recipes",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies and best practices.",
    icon: "Globe",
  },
  {
    title: "MERN Stack Development",
    description: "Full-stack development using MongoDB, Express.js, React, and Node.js to create scalable applications.",
    icon: "Code2",
  },
  {
    title: "API Development",
    description: "Designing and implementing RESTful APIs and GraphQL endpoints for seamless integration.",
    icon: "Server",
  },
  {
    title: "Database Design",
    description: "Creating efficient database schemas and relationships to ensure data integrity and performance.",
    icon: "Database",
  },
];

export const SERVICE_ICONS: Record<string, React.ElementType> = {
  Globe: GlobeIcon,
  Code2: Code2Icon,
  Server: ServerIcon,
  Database: DatabaseIcon,
  Layout: LayoutIcon,
  Smartphone: SmartphoneIcon,
  Apple: AppleIcon,
  PenTool: PenToolIcon,
  Settings: SettingsIcon,
};