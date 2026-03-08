import { DiRedis } from "react-icons/di";
import {
  FaBrain,
  FaFileAlt,
  FaGlobe,
  FaLayerGroup,
  FaLinkedin,
  FaServer,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiMiniCpuChip } from "react-icons/hi2";
import {
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFlask,
  SiFramer,
  SiGithub,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKeycloak,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRender,
  SiShadcnui,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

export const SITE_CONFIG = {
  title: "Yash Dubbalwar — Full-Stack Developer | MERN & Django Expert",
  author: "Yash Dubbalwar",
  description:
    "Full-Stack Developer with 2+ years shipping production systems — from LLM-driven financial analyzers to 10+ microservice compliance platforms. Skilled in Django, Golang, React, Docker, Kubernetes, and GCP. Published researcher.",
  siteLogo: "/logo.png",
  socialLinks: [
    {
      text: "Email",
      href: "mailto:dubbalwaryash@gmail.com",
      icon: FiMail,
    },
    {
      text: "Github",
      href: "https://github.com/yash717",
      icon: SiGithub,
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/yash7171/",
      icon: FaLinkedin,
    },
  ],
  menuItems: [
    { label: "Resume", href: "https://www.linkedin.com/in/yash7171/" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  socialImage: "/assets/og.png",
  contact: {
    email: "dubbalwaryash@gmail.com",
    phone: "+91 997-5533-172",
    cal_link: "https://cal.com",
  },
};

export const SITE_CONTENT = {
  hero: {
    name: "Yash Dubbalwar",
    summary: `Full-Stack Engineer crafting impactful web solutions that boost user engagement and streamline operations`,
    currentWork: "Junior Software Engineer at Humancloud",
    image: "/hero-profile.png",
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "15+" },
    ],
  },
  skills: {
    languages: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Golang", icon: SiGo },
      { name: "SQL", icon: SiPostgresql },
    ],
    libraries: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn/UI", icon: SiShadcnui },
      { name: "Framer Motion", icon: SiFramer },
    ],
    frameworks: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
    databases: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: DiRedis },
    ],
    tools: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vite", icon: SiVite },
    ],
    platforms: [
      { name: "GCP", icon: SiGooglecloud },
      { name: "AWS", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Keycloak", icon: SiKeycloak },
    ],
  },
  experience: [
    {
      id: "humancloud",
      companyName: "Humancloud Technologies Pvt. Ltd",
      companyLink: "https://humancloud.in",
      companyLogo: "/assets/humancloud_logo.avif",
      positions: [
        {
          id: "humancloud-junior",
          title: "Junior Software Engineer",
          employmentPeriod: "Sep 2024 — Present",
          employmentType: "Full-time",
          icon: "code",
          description: `- **Architected** a **6-tool compliance ecosystem** spanning **10+ microservices** on **GCP** with **Docker** orchestration; introduced **Redis** token caching and **pub/sub messaging**, cutting deployment time by **40%**.
- **Designed MettaAnalyzer**, an **LLM-powered** financial engine parsing bank statements and GST filings via **Amazon SQS** queueing — processing **200+ documents/month** at **95% accuracy**, replacing a fully manual review workflow.
- **Scaled** CI/CD pipelines and testing infrastructure to support **50+ enterprise clients**, reducing release friction and improving system uptime.
- **Built** a **Golang** notification microservice for SmartScaler scraping **Prometheus** metrics into **MongoDB**, feeding real-time monitoring dashboards for DevOps teams.
- **Extended** Teamcast AI (**Django** + **React** + **PostgreSQL**) with **Keycloak** SSO, enabling federated authentication across **15+ organizations**.`,
          skills: [
            "Microservices",
            "Golang",
            "Django",
            "React",
            "GCP",
            "Docker",
            "Redis",
            "Keycloak",
            "PostgreSQL",
          ],
          isExpanded: true,
        },
      ],
      isCurrentEmployer: true,
    },
    {
      id: "humancloud-intern",
      companyName: "Humancloud Technologies Pvt. Ltd",
      companyLink: "https://humancloud.in",
      companyLogo: "/assets/humancloud_logo.avif",
      positions: [
        {
          id: "humancloud-intern-001",
          title: "Software Development Intern",
          employmentPeriod: "Jan 2024 — Aug 2024",
          employmentType: "Internship",
          icon: "code",
          description: `- **Delivered** SmartScaler Kubernetes UI in **React/Next.js** with **Golang** backend, enabling developers to configure and push orchestrated cloud deployments via a self-serve interface.
- **Integrated** **Zoho CRM** with Vettly AI (**Django** + **Keycloak**), wiring **LLM-driven** resume screening and job-match recommendations into the recruitment workflow.
- **Built** an OMS using **MERN** + **Prisma** + **PostgreSQL** for asset management and attendance tracking, eliminating **60% of manual HR overhead**.`,
          skills: [
            "React",
            "Next.js",
            "Golang",
            "Django",
            "MERN",
            "PostgreSQL",
          ],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "iodump",
      companyName: "IODump",
      companyLink: "https://iodump2.vercel.app",
      companyLogo: "/assets/iodump_clear_dark.png",
      positions: [
        {
          id: "iodump-tech-lead",
          title: "Co-Tech Lead",
          employmentPeriod: "Jan 2023 — May 2024",
          employmentType: "Part-time",
          icon: "community",
          description: `- A committed technical leader with proven track record of mentoring and guiding development teams.
- Skills include Node.js, MongoDB, Django, and modern web technologies, with passion for community development and knowledge sharing.`,
          skills: ["Node.js", "MongoDB", "Django", "React.js", "Leadership"],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "citizen-tubes",
      companyName: "Citizen Tube Industries",
      companyLink: "https://www.citizentubeind.com",
      companyLogo: "/assets/citizen-logo.png",
      positions: [
        {
          id: "citizen-intern",
          title: "Full-Stack Developer Intern",
          employmentPeriod: "Mar 2023 — Jun 2023",
          employmentType: "Internship",
          icon: "code",
          description: `- **Launched** 8bitSolutions (**MERN** + **Flask**) with **NLP-powered** chatbots, reducing average customer response time by **35%**.
- **Rebuilt** admin dashboard for company website (**React** + **Django Admin**), contributing to a **15% reduction** in bounce rate.
- **Implemented** dynamic price calculator for WriteBing (**React** + **Flask**), boosting conversions by **20%**.`,
          skills: ["React", "Django", "Flask", "MERN", "NLP"],
          isExpanded: false,
        },
      ],
      isCurrentEmployer: false,
    },
  ],
  education: [
    {
      name: "Zeal College of Engineering and Research",
      location: "Pune, Maharashtra, India",
      position: "BE in Computer Engineering (Honours in Data Science) — CGPA: 8.6/10",
      start: "2021",
      end: "2024",
      link: "https://zealeducation.com",
      logo: "/assets/ZCOER-Logo-1-scaled.jpg",
    },
  ],
  categories: [
    { value: "all", label: "All", icon: FaLayerGroup },
    { value: "frontend", label: "Frontend", icon: FaGlobe },
    { value: "backend", label: "Backend", icon: FaServer },
    { value: "genai", label: "GenAI", icon: FaBrain },
    { value: "blockchain", label: "Blockchain", icon: HiMiniCpuChip },
  ],
  projects: [
    {
      name: "Spotter AI — ELD Trip Planner",
      description:
        "HOS-compliant route planning and ELD log generation for modern fleets. Full-stack platform with Django REST API (spotter-api on Render) and Next.js 16 frontend (Vercel). Features end-to-end trip planning, FMCSA compliance engine (70hr/8day cycle, 11hr drive limit), FMCSA daily logs, real-time collaboration for Drivers/Dispatchers/Admins, and cross-origin auth. Integrates OpenRouteService for smart routing with Leaflet maps. API Docs: spotter-api-ld45.onrender.com/api/docs/",
      category: ["Frontend", "Backend"],
      image: "/assets/projects/spotter-ai.png",
      url: "https://github.com/yash717/Spotter-ui",
      hosted_url: "https://spotter-green.vercel.app",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Leaflet", icon: SiReact },
      ],
    },
    {
      name: "DeBountify — Decentralized Bug Bounty Platform",
      description:
        "Blockchain-powered bug bounty platform using Next.js and Solidity smart contracts with escrow services, community voting, and programmatic reward distribution. Accepted and presented at IJRASET 2023. Integrates IPFS for bug submissions and ML for fraud detection.",
      category: ["Blockchain", "Frontend"],
      image: "/assets/projects/debountify.png",
      url: "https://github.com/yash717/DeBountify",
      hosted_url: "https://debountify.vercel.app",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Solidity", icon: SiSolidity },
        { name: "Blockchain", icon: SiGo },
      ],
    },
    {
      name: "Social Media Booster (TODO App)",
      description:
        "Full-stack task management application with Flask (Python) backend and React (TypeScript) frontend. Features complete CRUD operations, data visualization dashboard (Pie, Doughnut, Bar charts), OpenWeatherMap API integration, JWT authentication, and tag/category system. Built with ShadcnUI and TailwindCSS.",
      category: ["Frontend", "Backend"],
      image: "/assets/projects/social-media-booster.png",
      url: "https://github.com/yash717/social-media-booster",
      hosted_url: "https://github.com/yash717/social-media-booster",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Flask", icon: SiFlask },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      name: "GDSC GenAI Study Jam '24",
      description:
        "Community platform for GDSC GenAI Study Jam with leaderboard tracking 300+ participants. Built with MERN stack and D3.js for data visualization.",
      category: ["Frontend", "Backend"],
      image: "/assets/projects/gdsc-genai-study-jam.png",
      url: "https://github.com/yash717/cloud_jam_zcoer",
      hosted_url: "https://cloud-jam-zcoer-two.vercel.app",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "D3.js", icon: SiReact },
      ],
    },
    {
      name: "IODump",
      description:
        "Community tech platform serving 800+ active members. Built with Next.js for community engagement and knowledge sharing.",
      category: "Frontend",
      image: "/assets/projects/iodump.png",
      url: "https://github.com/yash717/iodump",
      hosted_url: "https://iodump2.vercel.app",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
      ],
    },
    {
      name: "MovieVerse",
      description:
        "Content-based movie recommender using TMDB API. Built with React and Flask for personalized movie suggestions.",
      category: ["Frontend", "Backend"],
      image: "/assets/projects/movieverse.png",
      url: "https://github.com/yash717/React-Flask-Movie-Recommendation-App",
      hosted_url: "https://github.com/yash717/React-Flask-Movie-Recommendation-App",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Flask", icon: SiFlask },
      ],
    },
    {
      name: "Iconic News",
      description:
        "Real-time news aggregator with category filtering. Built with React for staying updated with latest news.",
      category: "Frontend",
      image: "/assets/projects/iconic-news.png",
      url: "https://github.com/yash717/iconic-news",
      hosted_url: "https://iconic-news-react-app.vercel.app",
      technologies: [
        { name: "React", icon: SiReact },
      ],
    },
    {
      name: "Bookverse",
      description:
        "Book recommendation engine using collaborative filtering. Built with Django and ML for personalized book suggestions.",
      category: ["Backend", "GenAI"],
      image: "/assets/projects/bookverse.png",
      url: "https://github.com/yash717/Bookverse-Book-Recommendation-System",
      hosted_url: "https://github.com/yash717/Bookverse-Book-Recommendation-System",
      technologies: [
        { name: "Django", icon: SiDjango },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      name: "Price-Extractor",
      description:
        "ML-powered price extractor that extracts prices from given strings in any format or regex. Built two models using Recurrent Neural Networks and Multinomial Bayes, varying in accuracy for different use cases.",
      category: ["GenAI", "Backend"],
      image: null,
      url: "https://github.com/yash717/Price-Extractor",
      hosted_url: "https://github.com/yash717/Price-Extractor",
      technologies: [
        { name: "Python", icon: SiPython },
        { name: "RNN", icon: SiPython },
        { name: "ML", icon: SiPython },
      ],
    },
  ],
  testimonials: [
    {
      id: 0,
      testimonial:
        "Yash brought a clean, user-friendly design to our projects. He completely built our systems with great attention to detail and usability. His dedication and passion for the work really stood out!",
      by: "Team Lead, Humancloud",
    },
    {
      id: 1,
      testimonial:
        "Yash's technical leadership and ability to mentor the team has been invaluable. He consistently delivers high-quality solutions.",
      by: "Colleague, IODump",
    },
    {
      id: 2,
      testimonial:
        "Working with Yash on the DeBountify project was a great experience. His blockchain expertise and problem-solving skills are exceptional.",
      by: "Project Partner, DeBountify",
    },
  ],
};
