"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, MapPinIcon, BuildingOfficeIcon, EnvelopeIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../../../public/hero-image.jpeg";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import apmcImage from "../../../public/apmc.png";
import northeasternLogo from "../../../public/northeastern.png";
import galgotiasLogo from "../../../public/galgotias.jpeg";
import ieeeLogo from "../../../public/ieee.png";
import akqaLogo from "../../../public/akqa.png";
import iwcLogo from "../../../public/iwc.png";
import montblancLogo from "../../../public/montblanc.svg";
import bluepiLogo from "../../../public/bluepi.jpeg";
import folderImage from "./folder.png";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [showWireframe, setShowWireframe] = useState(false);
  const [showResearchJourney, setShowResearchJourney] = useState(false);
  const [activeResearchPaper, setActiveResearchPaper] = useState(null); // 'paper1' or 'paper2'
  const [showTAJourney, setShowTAJourney] = useState(false);
  const [showAKQAProjects, setShowAKQAProjects] = useState(false);
  const [theme, setTheme] = useState("light");
  const [studyAuthenticated, setStudyAuthenticated] = useState(false);
  const [studyPassword, setStudyPassword] = useState("");
  const [studyPasswordError, setStudyPasswordError] = useState(false);

  const tabs = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "publications", label: "Publications" },
    { id: "leadership", label: "Leadership" },
    { id: "cv", label: "CV" },
    { id: "study", label: "Study" },
  ];

  const LinkButton = ({ href, children, icon, external = true }) => (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center space-x-2 text-gray-900 dark:text-white/70 hover:text-gray-600 dark:hover:text-white transition-colors duration-200 text-sm font-light group"
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{children}</span>
      {external && <ArrowTopRightOnSquareIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
    </a>
  );

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Theme toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleStudyPasswordSubmit = (e) => {
    e.preventDefault();
    if (studyPassword === "Varun@9315852072") {
      setStudyAuthenticated(true);
      setStudyPasswordError(false);
      setStudyPassword("");
    } else {
      setStudyPasswordError(true);
      setStudyPassword("");
    }
  };


  return (
    <section className="text-gray-900 dark:text-white min-h-screen bg-gray-50 dark:bg-[#0a0a0a] relative" id="resume">
      {/* Fixed Header with Tabs */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-white/10 shadow-sm">
        <div className="w-full pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-[10%] md:pr-[10%]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-3">
            <h1 
              className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => {
                setActiveTab("about");
                setShowWireframe(false);
                setShowResearchJourney(false);
                setActiveResearchPaper(null);
                setShowTAJourney(false);
                setShowAKQAProjects(false);
              }}
            >
              Chaman&#39;s Profile
            </h1>
            <div className="flex flex-wrap items-center gap-1 sm:gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowWireframe(false);
                    setShowResearchJourney(false);
                    setActiveResearchPaper(null);
                    setShowTAJourney(false);
                    setShowAKQAProjects(false);
                    // Reset password state when switching away from study tab
                    if (tab.id !== "study") {
                      setStudyPassword("");
                      setStudyPasswordError(false);
                    }
                  }}
                  className={`px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 relative ${
                    activeTab === tab.id
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 backdrop-blur-sm border border-gray-300 dark:border-white/20 transition-all duration-300 ml-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <SunIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                ) : (
                  <MoonIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="w-full pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-[10%] md:pr-0 pt-24 sm:pt-28 md:pt-[76px] pb-6">
        <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-4 gap-4">
          {/* Left Column - Profile Section (20%) - Mobile/Tablet */}
          <div className="w-full lg:hidden">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-5 shadow-sm border border-gray-200 dark:border-white/10">
              <div className="space-y-4">
                {/* Profile Photo */}
                <div className="w-full flex justify-center lg:justify-start">
                  <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex-shrink-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-300 dark:border-white/30 shadow-md">
                      <Image
                        src={heroImage}
                        alt="Chaman Kumar"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 120px, 150px"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Pronouns */}
                <div className="text-center lg:text-left">
                  <h2 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 dark:text-white mb-0.5">Chaman Kumar</h2>
                  <p className="text-gray-500 dark:text-white/50 text-xs font-normal">He/Him</p>
                </div>

                {/* Professional Summary */}
                <div>
                  <p className="text-gray-700 dark:text-white/70 text-xs sm:text-sm lg:text-xs leading-relaxed font-normal">
                    Software Engineer with expertise in full-stack development, cloud technologies, and DevOps. Specializing in MERN stack, Java frameworks, and scalable system design.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-white/10"></div>

                {/* Contact Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <MapPinIcon className="w-4 h-4 text-gray-500 dark:text-white/50 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-white/70 text-xs sm:text-sm lg:text-xs font-normal">Boston, MA, USA</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-gray-500 dark:text-white/50 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-white/70 text-xs sm:text-sm lg:text-xs font-normal">Northeastern University</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <EnvelopeIcon className="w-4 h-4 text-gray-500 dark:text-white/50 flex-shrink-0" />
                    <a
                      href="mailto:kumar.cham@northeastern.edu"
                      className="text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm lg:text-xs font-normal transition-colors"
                    >
                      Email
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Image 
                        src={LinkedinIcon} 
                        alt="LinkedIn" 
                        width={16} 
                        height={16} 
                        className="brightness-0 dark:brightness-100 dark:opacity-70" 
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/chamankumar5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm lg:text-xs font-normal transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Image 
                        src={GithubIcon} 
                        alt="GitHub" 
                        width={16} 
                        height={16} 
                        className="brightness-0 dark:brightness-100 dark:opacity-70" 
                      />
                    </div>
                    <a
                      href="https://github.com/byteKumar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm lg:text-xs font-normal transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for Desktop Grid */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Fixed Profile Card for Desktop */}
          <div className="hidden lg:block fixed lg:top-[76px] lg:left-[calc(10%+1rem)] lg:w-[calc((80%-4rem)/5)] lg:h-[75vh] lg:overflow-hidden lg:z-10">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-5 shadow-sm border border-gray-200 dark:border-white/10 h-full overflow-hidden">
              <div className="space-y-4">
                {/* Profile Photo */}
                <div className="w-full flex justify-center lg:justify-start">
                  <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] flex-shrink-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-300 dark:border-white/30 shadow-md">
                      <Image
                        src={heroImage}
                        alt="Chaman Kumar"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Pronouns */}
                <div className="text-center lg:text-left">
                  <h2 className="text-base sm:text-lg lg:text-base font-semibold text-gray-900 dark:text-white mb-0.5">Chaman Kumar</h2>
                  <p className="text-gray-500 dark:text-white/50 text-xs font-normal">He/Him</p>
                </div>

                {/* Professional Summary */}
                <div>
                  <p className="text-gray-700 dark:text-white/70 text-xs sm:text-sm lg:text-xs leading-relaxed font-normal">
                    Software Engineer with expertise in full-stack development, cloud technologies, and DevOps. Specializing in MERN stack, Java frameworks, and scalable system design.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-white/10"></div>

                {/* Contact Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <MapPinIcon className="w-4 h-4 text-gray-500 dark:text-white/50 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-white/70 text-xs sm:text-sm lg:text-xs font-normal">Boston, MA, USA</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-gray-500 dark:text-white/50 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-white/70 text-xs sm:text-sm lg:text-xs font-normal">Northeastern University</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <EnvelopeIcon className="w-4 h-4 text-gray-500 dark:text-white/50 flex-shrink-0" />
                    <a
                      href="mailto:kumar.cham@northeastern.edu"
                      className="text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm lg:text-xs font-normal transition-colors"
                    >
                      Email
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Image 
                        src={LinkedinIcon} 
                        alt="LinkedIn" 
                        width={16} 
                        height={16} 
                        className="brightness-0 dark:brightness-100 dark:opacity-70" 
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/chamankumar5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm lg:text-xs font-normal transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Image 
                        src={GithubIcon} 
                        alt="GitHub" 
                        width={16} 
                        height={16} 
                        className="brightness-0 dark:brightness-100 dark:opacity-70" 
                      />
                    </div>
                    <a
                      href="https://github.com/byteKumar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm lg:text-xs font-normal transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Section (60%) */}
          <div className="w-full lg:col-span-4">
            <div className="space-y-4 sm:space-y-6">
              <AnimatePresence mode="wait">
                {/* About Section */}
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-6 sm:p-7 md:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                      <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">About ME 👋</h2>
                      
                      <div className="space-y-6 text-base leading-relaxed font-light text-gray-700 dark:text-white/70">
                        <p>
                          Hello! I&#39;m <strong className="font-medium text-gray-900 dark:text-white">Chaman Kumar</strong>, a Master of Science in Computer Science candidate at Northeastern University (Boston). With a strong foundation in full-stack engineering, web performance & accessibility, and cloud-native DevOps, I&#39;m passionate about building fast, scalable, and deployment-ready web applications.
                        </p>

                        <div>
                          <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4">🔍 Experience & Background</h3>
                          <p>
                            My journey spans teaching, product engineering, and research—with roles at Northeastern&#39;s Khoury College (Graduate TA), AKQA, and BluePi. At Northeastern, I led a TA team and shipped a Stack Overflow–style MERN platform used by 100+ students while driving TDD and structured code reviews. At AKQA, I optimized IWC Schaffhausen&#39;s AEM/MERN e-commerce stack—raising code coverage, cutting load time 11s → 4s, and boosting engagement while hardening releases via CI/CD and WCAG 2.1. Earlier at BluePi, I built Spring Boot + AWS prototypes and strengthened pipelines with JUnit/CI to improve efficiency and reduce runtime errors. Along the way, I delivered industry-aligned academic builds (Java image pipeline, Chrome extension, RecipeHub) and an IEEE-published face-recognition attendance system.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4">💻 Technical Expertise</h3>
                          <p className="mb-3">I specialize in:</p>
                          <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-white/20">
                            <div>
                              <strong className="font-medium text-gray-900 dark:text-white">Programming:</strong> Java, Python, C/C++, JavaScript, TypeScript, C#, SQL, Go(Golang), Ruby
                            </div>
                            <div>
                              <strong className="font-medium text-gray-900 dark:text-white">Web/Frameworks:</strong> React, Node.js, Next.js, Express, Spring Boot, .NET, Angular, HTML5/CSS3, Webpack, Socket.IO
                            </div>
                            <div>
                              <strong className="font-medium text-gray-900 dark:text-white">Databases/Testing:</strong> MySQL, PostgreSQL, DynamoDB, MongoDB, Redis, JUnit, Mockito, Jest, Postman, SonarQube
                            </div>
                            <div>
                              <strong className="font-medium text-gray-900 dark:text-white">Cloud & DevOps:</strong> Jenkins, Docker, Kubernetes, GCP, Azure, AWS (Lambda, EC2, S3, RDS/DynamoDB, IAM, SNS)
                            </div>
                            <div>
                              <strong className="font-medium text-gray-900 dark:text-white">Software Development:</strong> Object-Oriented Design, TDD, Agile, Scrum, Retrospective, Story Planning, Sprint, Service First
                            </div>
                            <div>
                              <strong className="font-medium text-gray-900 dark:text-white">Certifications:</strong> AWS Cloud Practitioner, AWS Certified Developer Associate
                            </div>
                            <div>
                              <strong className="font-medium text-gray-900 dark:text-white">Other Tools:</strong> Selenium, jQuery, CloudWatch, Cypress, Git, Linux/Bash, CI/CD, GitHub Actions, REST API, JWT
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4">🚀 Current Focus</h3>
                          <p className="mb-3">Currently, I am advancing my software engineering by building end-to-end products that combine scalable systems, cloud, and AI/ML. My work includes:</p>
                          <ul className="space-y-2 pl-6 list-disc">
                            <li>Designing and deploying scalable web services and APIs (MERN/TypeScript, Java/Spring) on cloud platforms with CI/CD and observability.</li>
                            <li>Integrating AI/ML features into applications (e.g., vision/NLP) and serving models through reliable inference endpoints.</li>
                            <li>Optimizing performance, accessibility, and reliability to ensure production-ready experiences at scale.</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4">🔍 Career Goals</h3>
                          <p className="mb-3">
                            As I move into a full-time role, I want to build scalable, distributed systems that power real products end-to-end—systems that are resilient, observable, and easy to evolve. I&#39;m especially excited about applying AI/ML in production, where strong platform engineering meets high-throughput, low-latency design.
                          </p>
                          <ul className="space-y-2 pl-6 list-disc">
                            <li><strong className="font-medium text-gray-900 dark:text-white">Backend & Platform Engineering:</strong> Design and implement distributed, fault-tolerant services (microservices, event-driven, async queues) with strict SLOs, horizontal scaling, and graceful degradation.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">AI/ML in Production:</strong> Ship scalable inference and retrieval services (feature stores, vector search, model serving, A/B rollouts) that make AI useful, reliable, and cost-efficient.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">Cloud-Native at Scale:</strong> Operate Kubernetes-based stacks with IaC, autoscaling, blue/green & canary deploys, and deep observability (metrics, logs, traces) for fast incident response.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">Data & Streaming Systems:</strong> Build streaming pipelines and storage layers that handle spikes, ensure consistency where needed, and optimize for throughput and latency.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">Performance & Reliability:</strong> Lead capacity planning, load testing, caching strategies, and performance tuning to keep p99s low and availability high.</li>
                          </ul>
                          <p className="mt-4">
                            In short: roles where I can own and scale distributed systems, bring AI/ML to production responsibly, and drive engineering practices (TDD, CI/CD, reviews) that keep teams shipping fast with confidence.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4">🔗 Let&#39;s Connect!</h3>
                          <p>
                            I am always open to discussions on collaborating to drive innovation in AI and technology. Let&#39;s connect and explore how we can create impactful solutions together!
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Experience Section */}
                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Work Experience</h2>
                    
                    {/* Graduate Teaching Assistant */}
                    {!showTAJourney ? (
                      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                            <Image
                              src={northeasternLogo}
                              alt="Northeastern University"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
                              Graduate Teaching Assistant
                            </h3>
                            <p className="text-gray-500 dark:text-white/50 text-sm font-normal break-words mb-2">Northeastern University, Massachusetts | Jan 2025 - Present</p>
                          </div>
                        </div>
                        <ul className="space-y-2 list-none">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Led TA team, shipped MERN Q&A platform (500+ students)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Mentored 5 teams (TDD, peer reviews, improved deployment 25%, reduced incidents 40%)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Ran labs/office hours (100+ students), taught MERN/Agile (95% project completion)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Built CI/CD (raised coverage 20%, reduced deployment errors 20%, bug cycles 10%)</span>
                          </li>
                        </ul>
                        <div className="pt-2">
                          <button
                            onClick={() => setShowTAJourney(true)}
                            className="inline-flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs font-medium"
                          >
                            <span>View Journey</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        key="ta-journey"
                        variants={sectionVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <button
                            onClick={() => setShowTAJourney(false)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Back to Experience"
                          >
                            <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 flex-shrink-0">
                              <Image
                                src={northeasternLogo}
                                alt="Northeastern University"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">
                                Graduate Teaching Assistant
                              </h3>
                              <p className="text-gray-500 dark:text-white/50 text-sm font-normal">Northeastern University, Massachusetts | Jan 2025 - Present</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-4">Teaching Assignments</h4>
                          <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                            I have served as a Graduate Teaching Assistant across multiple semesters, contributing to CS4530 (Fundamentals of Software Engineering) course. Here are my semester assignments:
                          </p>
                          <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2">
                              <h5 className="text-base font-light text-gray-900 dark:text-white mb-2">Spring 2025</h5>
                              <a
                                href="https://neu-se.github.io/CS4530-Spring-2025/staff/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                              >
                                <span>View Staff Page</span>
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              </a>
                            </div>
                            <div className="border-l-4 border-green-500 dark:border-green-400 pl-4 py-2">
                              <h5 className="text-base font-light text-gray-900 dark:text-white mb-2">Summer 2025</h5>
                              <a
                                href="https://neu-se.github.io/CS4530-Summer-2025/staff/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                              >
                                <span>View Staff Page</span>
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              </a>
                            </div>
                            <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 py-2">
                              <h5 className="text-base font-light text-gray-900 dark:text-white mb-2">Fall 2025</h5>
                              <a
                                href="https://neu-se.github.io/CS4530-Fall-2025/staff/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                              >
                                <span>View Staff Page</span>
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>

                    {/* Software Engineer - AKQA */}
                    {!showAKQAProjects ? (
                      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 flex-shrink-0 border border-transparent dark:border-white rounded overflow-hidden">
                            <Image
                              src={akqaLogo}
                              alt="AKQA"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">Software Engineer</h3>
                            <p className="text-gray-500 dark:text-white/50 text-sm font-normal mb-2">AKQA, Gurgaon, India | Jul 2022 - Aug 2024</p>
                          </div>
                        </div>
                        <ul className="space-y-2 list-none">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Optimized IWC website (Core Web Vitals, UX, AEM+MERN)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Stabilized releases via Jenkins CI/CD (11s to 4s page loads, lifted engagement 18%, interactions 23%)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Led accessibility/analytics (85%+ WCAG 2.1 A/AA, SKU attribution)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Led digital activations for WaW (55% reach/engagement, 500M+ online reach)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Built JUnit/Jest/Cypress tests (lifted coverage 20%, cut errors 20%, bug cycles 10%)</span>
                          </li>
                        </ul>
                        <div className="pt-2">
                          <button
                            onClick={() => setShowAKQAProjects(true)}
                            className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-sm font-medium"
                          >
                            <span>View Projects Worked On</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        key="akqa-projects"
                        variants={sectionVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <button
                            onClick={() => setShowAKQAProjects(false)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Back to Experience"
                          >
                            <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 flex-shrink-0 border border-transparent dark:border-white rounded overflow-hidden">
                              <Image
                                src={akqaLogo}
                                alt="AKQA"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">Software Engineer</h3>
                              <p className="text-gray-500 dark:text-white/50 text-sm font-normal">AKQA, Gurgaon, India | Jul 2022 - Aug 2024</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-4">Projects Worked On</h4>
                          <div className="space-y-6">
                            <div className="flex items-start gap-4">
                              <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                  src={akqaLogo}
                                  alt="AKQA"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-light text-gray-900 dark:text-white mb-2">AKQA</h5>
                                <a
                                  href="https://www.akqa.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                >
                                  <span>Visit Website</span>
                                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                  src={iwcLogo}
                                  alt="IWC"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-light text-gray-900 dark:text-white mb-2">IWC</h5>
                                <a
                                  href="https://www.iwc.com/us-en"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                >
                                  <span>Visit Website</span>
                                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                  src={montblancLogo}
                                  alt="Montblanc"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-light text-gray-900 dark:text-white mb-2">Montblanc</h5>
                                <a
                                  href="https://www.montblanc.com/en-us"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                >
                                  <span>Visit Website</span>
                                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>

                    {/* Software Engineer Intern */}
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 border-2 border-gray-300 dark:border-white/30 rounded-lg overflow-hidden">
                          <Image
                            src={bluepiLogo}
                            alt="BluePi"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">Software Engineer Intern</h3>
                          <p className="text-gray-500 dark:text-white/50 text-sm font-normal break-words mb-2">Bluepi, Gurgaon, India | Nov 2021 - Feb 2022</p>
                        </div>
                      </div>
                      <ul className="space-y-2 list-none">
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Implemented Reddit-style Java/Spring CRUD app</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Prototyped Spring Boot/Java CRUD flows</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Added JUnit with CI/CD (lifting reliability 15%, cutting defects 20%, cycle time 10%)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Co-lead AWS redesign (right-sized EC2, tuned RDS, autoscaling, monitored CloudWatch – raised resilience, cut costs 10%)</span>
                        </li>
                      </ul>
                      <div className="pt-3">
                        <a
                          href="https://www.bluepiit.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-5 py-2.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 rounded-lg text-sm font-medium"
                        >
                          <span>View Site</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Projects Section */}
                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Projects</h2>
                    
                    {/* Google Slides Generator */}
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">Google Slides Generator</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {["React.js", "Express", "Vite", "NodeJS", "PostgreSQL", "MongoDB"].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2 list-none mb-3">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Created full-stack slide generator, integrated Google Slides API (OAuth, DB-backed templates)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Designed theme-first system/automated layout registry</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                          <LinkButton href="https://github.com/byteKumar/google_slide_generator" icon={null}>GitHub</LinkButton>
                        </div>
                      </div>
                    </div>

                    {/* Advance Image Processor */}
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">Advance Image Processor</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {["Java", "GUI", "Software Design Pattern", "OOD", "TDD"].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2 list-none mb-3">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Architected extensible image processing app (MVC), implemented 7+ core transformations</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Applied Strategy/Factory/Command patterns (cutting feature integration time by 30%)</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                          <LinkButton href="https://github.com/byteKumar/advanced_image_manipulation_and_enhancement_application" icon={null}>GitHub</LinkButton>
                        </div>
                      </div>
                    </div>

                    {/* LeetCode Power Up */}
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">LeetCode Power Up - Chrome Extension</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {["JavaScript", "Chrome Extensions API", "YouTube Data API"].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2 list-none mb-3">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Shipped Chrome extension (injects 3-5 LeetCode solution videos)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Integrated per-problem scratchpad (chrome.storage)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Engineered Promise-based async architecture</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                          <LinkButton href="https://github.com/byteKumar/LeetCode-Power-Up" icon={null}>GitHub</LinkButton>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Publications Section */}
                {activeTab === "publications" && !showResearchJourney && (
                  <motion.div
                    key="publications"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Publications</h2>
                    
                    <div className="space-y-4">
                      {/* Paper 1 */}
                      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                              <Image
                                src={ieeeLogo}
                                alt="IEEE"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-white/50 font-normal">IEEE Xplore | Dec 2023</p>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
                            Evaluation of Tracking System using Facial Recognition and Location
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="https://ieeexplore.ieee.org/document/10541414"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs font-medium"
                            >
                              <span>Research Paper</span>
                              <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                            </a>
                            <button
                              onClick={() => {
                                setActiveResearchPaper('paper1');
                                setShowResearchJourney(true);
                              }}
                              className="inline-flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs font-medium"
                            >
                              <span>View Research Journey</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>

                      {/* Paper 2 */}
                      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                              <Image
                                src={ieeeLogo}
                                alt="IEEE"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-white/50 font-normal">IEEE Xplore | Dec 2023</p>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
                            Understanding Factors Affecting Trust and Satisfaction with Banking in India
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="https://ieeexplore.ieee.org/document/10541439"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs font-medium"
                            >
                              <span>Research Paper</span>
                              <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                            </a>
                            <button
                              onClick={() => {
                                setActiveResearchPaper('paper2');
                                setShowResearchJourney(true);
                              }}
                              className="inline-flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs font-medium"
                            >
                              <span>View Research Journey</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Skills Section */}
                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-gray-900 dark:text-white/90 mb-4">Programming</h4>
                        <p className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">
                          Java, Python, C/C++, JavaScript, TypeScript, C#, SQL, Go(Golang), Ruby
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-gray-900 dark:text-white/90 mb-4">Web/Frameworks</h4>
                        <p className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">
                          React, Node.js, Next.js, Express, Spring Boot, .NET, Angular, HTML5/CSS3, Webpack, Socket.IO
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-gray-900 dark:text-white/90 mb-4">Databases/Testing</h4>
                        <p className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">
                          MySQL, PostgreSQL, DynamoDB, MongoDB, Redis, JUnit, Mockito, Jest, Postman, SonarQube
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-gray-900 dark:text-white/90 mb-4">Cloud & DevOps</h4>
                        <p className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">
                          Jenkins, Docker, Kubernetes, GCP, Azure, AWS (Lambda, EC2, S3, RDS/DynamoDB, IAM, SNS)
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-gray-900 dark:text-white/90 mb-4">Software Development</h4>
                        <p className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">
                          Object-Oriented Design, TDD, Agile, Scrum, Retrospective, Story Planning, Sprint, Service First
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-gray-900 dark:text-white/90 mb-4">Certifications</h4>
                        <p className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">
                          AWS Cloud Practitioner, AWS Certified Developer Associate
                        </p>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xl font-light text-gray-900 dark:text-white/90 mb-4">Other Tools</h4>
                        <p className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">
                          Selenium, jQuery, CloudWatch, Cypress, Git, Linux/Bash, CI/CD, GitHub Actions, REST API, JWT
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Education Section */}
                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Education</h2>
                    <div className="space-y-4">
                      {/* Master's Degree */}
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                              src={northeasternLogo}
                              alt="Northeastern University"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white">
                            Northeastern University
                          </h3>
                        </div>
                        <p className="text-gray-500 dark:text-white/50 text-sm font-normal mb-2">United States | Sep 2024 - Dec 2026</p>
                        <p className="text-gray-800 dark:text-white/80 text-lg font-light mb-1">Master of Science in Computer Science</p>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light mb-4">GPA: 3.67/4</p>
                        <div>
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-4">Relevant Courses</h4>
                          <div className="flex flex-wrap gap-3">
                            {["Design Patterns", "Web Development", "Algorithms", "DBMS", "Computer Systems", "HCI", "Cloud Computing", "ML"].map((course) => (
                              <span
                                key={course}
                                className="px-4 py-2 text-sm text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>

                      {/* Bachelor's Degree */}
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                              src={galgotiasLogo}
                              alt="Galgotias University"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white">
                            Galgotias University
                          </h3>
                        </div>
                        <p className="text-gray-500 dark:text-white/50 text-sm font-normal mb-2">India | Sep 2018 - Apr 2022</p>
                        <p className="text-gray-800 dark:text-white/80 text-lg font-light mb-1">Bachelor of Science in Computer Science</p>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light mb-4">CGPA: 8.4/10</p>
                        <div>
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-4">Relevant Courses</h4>
                          <div className="flex flex-wrap gap-3">
                            {["Operating Systems", "Data Structures", "Machine Learning", "Cloud Computing", "Distributed Systems"].map((course) => (
                              <span
                                key={course}
                                className="px-4 py-2 text-sm text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Leadership Section */}
                {activeTab === "leadership" && !showWireframe && (
                  <motion.div
                    key="leadership"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Leadership</h2>
                    <div className="space-y-4">
                      {/* PepperUni Product */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
                            PepperUni
                          </h3>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-8 h-8 flex-shrink-0">
                              <Image
                                src={apmcImage}
                                alt="APMC"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-gray-500 dark:text-white/50 text-sm font-normal">Aspiring Product Managers Club @ Northeastern University</p>
                          </div>
                          <p className="text-gray-800 dark:text-white/80 text-lg font-light mb-4">Leader of Technical Development and Product Management</p>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                            Comprehensive platform designed to assist students in crafting personalized and job-specific resumes. By tailoring resumes based on specific job requirements, students can significantly improve their chances of impressing potential employers.
                          </p>
                        </div>

                        <div className="space-y-3 pt-2">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Key Features</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Resume parsing and analysis with automatic improvement suggestions</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Job description analysis to identify essential skills and keywords</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Tailored resume customization aligned with specific job requirements</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Version control for managing multiple resume versions</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Secure and private data management</span>
                            </li>
                          </ul>
                        </div>

                        <div className="pt-4 space-y-4">
                          <div>
                            <p className="text-gray-600 dark:text-white/60 text-sm font-light mb-3">Technologies: React, Node.js, Express, PostgreSQL, AWS, Terraform</p>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                              href="https://pepperuni.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-200 text-sm font-medium rounded-lg shadow-md hover:shadow-lg"
                            >
                              <span>View Production Site</span>
                              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </a>
                            <button
                              onClick={() => setShowWireframe(true)}
                              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 text-sm font-medium rounded-lg"
                            >
                              <span>View Wireframe Journey</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Research Paper Journey Section (within Publications) */}
                {activeTab === "publications" && showResearchJourney && (
                  <motion.div
                    key={`research-journey-${activeResearchPaper}`}
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <button
                            onClick={() => {
                              setShowResearchJourney(false);
                              setActiveResearchPaper(null);
                            }}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Back to Publications"
                          >
                            <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white">Research Journey</h2>
                        </div>
                        <p className="text-gray-500 dark:text-white/50 text-sm font-normal">
                          {activeResearchPaper === 'paper1' 
                            ? 'Facial Recognition & Location-Based Attendance Tracking System'
                            : 'Understanding Factors Affecting Trust and Satisfaction with Banking in India'}
                        </p>
                      </div>
                    </div>

                    {/* Paper 1: Facial Recognition Journey */}
                    {activeResearchPaper === 'paper1' && (
                      <>

                    {/* Project Snapshot */}
                    <div className="pt-4">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">Project Snapshot</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light">EdTech</span>
                          <span className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light">Biometrics</span>
                          <span className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light">Privacy</span>
                        </div>
                        <p className="text-gray-600 dark:text-white/60 text-sm font-light italic mb-3">Goal: Accurate, low-friction, and privacy-preserving classroom attendance that verifies who (identity) and where (in-class location)</p>
                      </div>
                      <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                        A modular client–server attendance system that authenticates students with <strong>facial recognition</strong> and verifies <strong>in-class presence</strong> using device location. Built with separate services for <strong>biometrics, attendance logic, data storage,</strong> and <strong>analytics</strong>; secured via <strong>token-based auth</strong>, <strong>service isolation</strong>, and <strong>encryption</strong>.
                      </p>
                    </div>

                    {/* STAR Format */}
                    <div className="space-y-8 pt-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">The Journey: STAR Format</h3>
                        
                        <div className="space-y-6">
                          {/* Situation */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Situation</h4>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              Manual roll-calls and paper sign-ins were error-prone (proxy/bogus attendance) and consumed lecture time; existing automated options still had gaps in identity and location verification. This created challenges for academic institutions in accurately tracking student attendance while maintaining lecture efficiency.
                            </p>
                          </div>

                          {/* Task */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Task</h4>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              Design an automated system that (1) verifies who is submitting attendance and (2) confirms where they are (in class), while protecting privacy and scaling for large cohorts. The solution needed to be reliable, secure, and user-friendly for both students and instructors.
                            </p>
                          </div>

                          {/* Action */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Action</h4>
                            <ul className="space-y-3 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Architecture Design:</strong> Architected a modular client–server system: student & lecturer apps; facial-recognition, attendance, database, and data-presentation servers.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Biometric Integration:</strong> Implemented biometric verification (facial recognition) and real-time location checks; enforced token-based auth and service isolation.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>User Flows:</strong> Built instructor flows: authenticate → select course/time → call web service → fetch roster → mark/save attendance, with records persisted and visualized in a web portal (interactive plots + exports).
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Testing & Validation:</strong> Ran real-world testing to validate effectiveness and precision of the system in live classroom environments.
                                </span>
                              </li>
                            </ul>
                          </div>

                          {/* Result */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Result</h4>
                            <ul className="space-y-3 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Integrity:</strong> Proxy/bogus attendance significantly reduced by combining identity + location verification, cutting proxy incidents to near zero in pilot tests.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Efficiency:</strong> Instructors avoided time-consuming roll-calls; submissions became parallel and faster, saving approximately 8–10 minutes per 60-student lecture.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Visibility:</strong> Automated stats and exports enabled quick administrative decisions and compliance reporting.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Accuracy:</strong> The system accurately tracked attendance in live settings, proving reliable in real-world classroom environments with high precision.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Technologies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Clients</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Android/iOS student app</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Lecturer app</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Web portal for analytics/exports</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Backend Services</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Attendance Service (REST API)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Facial Recognition Service</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Data Presentation Service</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Data & Storage</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Relational database (students, courses, sessions, attendance events)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Security & Networking</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Token-based authentication, per-user data isolation</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Encryption in transit & at rest</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">WLAN/Cellular connectivity between clients and services</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Architecture */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Architecture</h3>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-white/10 mb-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Client Layer</h4>
                            <ul className="space-y-2 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base font-light"><strong>Student App:</strong> Check-in with face + location → Attendance Service</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base font-light"><strong>Lecturer App:</strong> Start/manage sessions → Attendance Service</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base font-light"><strong>Web Portal:</strong> Reports/exports → Data Presentation Service</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Service Layer</h4>
                            <ul className="space-y-2 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base font-light"><strong>Facial Recognition Service:</strong> Verifies student identity via biometric matching</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base font-light"><strong>Attendance Service:</strong> Core business logic, orchestrates check-ins, manages sessions</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base font-light"><strong>Data Presentation Service:</strong> Generates analytics, interactive plots, CSV/Excel exports</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base font-light"><strong>Database:</strong> Stores student/course/session/attendance data with encryption</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key User Flows */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Key User Flows</h3>
                      <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Student Check-In Flow</h4>
                          <ol className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">1.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Open Student App → Authenticate (token-based)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">2.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Join active session → Capture face image</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">3.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Read device location → Send to Facial Recognition Service</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">4.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">If match OK → Submit attendance to Attendance Service</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">5.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">If match fails → Fallback: retry/alternative verification</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">6.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Receive confirmation + receipt</span>
                            </li>
                          </ol>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Lecturer Session Flow</h4>
                          <ol className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">1.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Lecturer signs in → Select course & time</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">2.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Fetch roster via web service → Start session</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">3.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Monitor submissions in real time</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">4.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Persist attendance to database</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs font-medium">5.</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">View analytics/export CSV for administrative decisions</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Target Audience</h3>
                      <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                        The primary audience consists of academic institutions seeking automated attendance solutions. Specifically targeting:
                      </p>
                      <ul className="space-y-2 list-none">
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Educational institutions needing accurate attendance tracking for large cohorts</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Instructors and lecturers seeking to reduce manual attendance overhead</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Administrators requiring attendance data for academic decision-making and compliance</span>
                        </li>
                      </ul>
                    </div>

                    {/* Skills & Tools Applied */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Skills & Tools Applied</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Technical Skills</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Systems design: Client–server decomposition; module boundaries; stateless API/web-service calls</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Applied ML/biometrics integration: Productionizing face-verification and handling edge cases</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Security & privacy: Token-based auth, data isolation models, encryption at rest/in transit</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Design & Product Skills</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Data modeling & analytics UX: Schemas for student/course/attendance; instructor dashboards</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Scalability considerations: Distributed servers; cloud-friendly architecture</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Product thinking: Solving classroom pain points; designing flows for non-technical users</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Impact & Outcomes */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Impact & Outcomes</h3>
                      <div className="space-y-4">
                        <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                          The research project demonstrated significant impact in addressing real-world attendance tracking challenges:
                        </p>
                        <ul className="space-y-3 list-none">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Accuracy & Integrity:</strong> Dual-factor verification (face + location) curtailed proxy attendance, ensuring authentic student presence tracking.
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Time Saved:</strong> Streamlined roll-call into a few taps; simultaneous submissions from students reduced lecture disruption by 8–10 minutes per session.
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Actionable Insights:</strong> One-click exports and trend views for administrators enabled data-driven academic decisions.
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Privacy by Design:</strong> Per-user data isolation, tokenized access, and encrypted distributed storage protected student privacy and complied with data protection regulations.
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Maintainability:</strong> Modular services enable independent updates and scaling, simplifying maintenance for multi-campus deployments.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Risks, Trade-offs & Decisions */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Risks, Trade-offs & Decisions</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Key Design Decisions</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                <strong>Why facial + location vs QR/RFID/NFC?</strong> No extra hardware/tags required; stronger anti-proxy guarantees; works with standard smartphones.
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                <strong>Trade-off:</strong> Biometrics latency vs UX → mitigated via efficient capture, caching tokens, and retry flows.
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                <strong>Scale & Reliability:</strong> Implemented idempotent submissions, rate limiting, retries, and circuit breakers between services.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Edge Cases & Mitigations</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                <strong>Low light/occlusion:</strong> Retry with guidance; temporary manual verification fallback
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                <strong>Weak GPS/indoors:</strong> Multimodal checks (Wi-Fi/BLE) and manual override policy
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                <strong>Lost connectivity:</strong> Queued submissions with signed tokens for secure deferred sync
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-3">Privacy & Ethics</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                Consent flows and clear data usage policies
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                Storage minimization and retention policies
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                Opt-out path and bias testing for facial recognition
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* V2 Roadmap */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Future Enhancements (V2 Roadmap)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                          <h4 className="text-base font-light text-gray-900 dark:text-white/90 mb-2">Security & Performance</h4>
                          <ul className="space-y-1.5 list-none text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">Liveness/spoofing detection (blink/motion/3D)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">On-device inference to reduce latency & protect biometrics</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                          <h4 className="text-base font-light text-gray-900 dark:text-white/90 mb-2">Reliability & Access</h4>
                          <ul className="space-y-1.5 list-none text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">Offline mode with deferred secure sync</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">Anomaly detection for mass/duplicate submissions</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                          <h4 className="text-base font-light text-gray-900 dark:text-white/90 mb-2">Governance & Compliance</h4>
                          <ul className="space-y-1.5 list-none text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">Role-based access controls (RBAC) & audit logs</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">Enhanced privacy safeguards (short retention, minimization)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                          <h4 className="text-base font-light text-gray-900 dark:text-white/90 mb-2">Accessibility & UX</h4>
                          <ul className="space-y-1.5 list-none text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">Alternative verification flows for accessibility</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 font-light">Low-bandwidth UI & localization support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Elevator Pitch */}
                    <div className="pt-4">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                        <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">Elevator Pitch</h3>
                        <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic">
                          &quot;Replaced time-consuming roll-calls with a privacy-preserving system that verifies <strong>who</strong> you are (facial recognition) and <strong>where</strong> you are (device location). Built a <strong>modular client–server</strong> architecture with secure storage and a reporting portal; proved accurate in real settings and reduced instructor workload by 8–10 minutes per lecture.&quot;
                        </p>
                      </div>
                    </div>

                        {/* Research Paper Link */}
                        <div className="pt-6 border-t border-gray-300 dark:border-white/10">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a
                              href="https://ieeexplore.ieee.org/document/10541414"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-300 rounded-lg text-sm font-medium shadow-md hover:shadow-lg"
                            >
                              <span>View Research Paper</span>
                              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href="/research1.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-5 py-2.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 rounded-lg text-sm font-light"
                            >
                              <span>Download PDF</span>
                              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Paper 2: Banking Trust & Satisfaction Journey */}
                    {activeResearchPaper === 'paper2' && (
                      <>
                        {/* Project Snapshot */}
                        <div className="pt-4">
                          <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">Project Snapshot</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light">Mobile Banking</span>
                              <span className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light">UX Design</span>
                              <span className="px-3 py-1 text-xs text-gray-600 dark:text-white/60 border border-gray-300 dark:border-white/20 rounded-full font-light">Trust & Privacy</span>
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                            Redesigned mobile-banking UX to improve trust and satisfaction by applying customer-centric design principles, cross-platform insights (iOS/Android), and a structured UX process (research → wireframes → evaluation) tailored to Indian banking users.
                          </p>
                        </div>

                        {/* STAR Format */}
                        <div className="space-y-8 pt-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">The Journey: STAR Format</h3>
                            
                            <div className="space-y-6">
                              {/* Situation */}
                              <div className="space-y-3">
                                <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Situation</h4>
                                <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  Indian banking users increasingly prefer mobile, but common apps are hard to navigate, visually dated, and trust-eroding (privacy/clarity gaps). Banks move slowly and often lack customer-centric design, creating friction that reduces user satisfaction and adoption.
                                </p>
                              </div>

                              {/* Task */}
                              <div className="space-y-3">
                                <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Task</h4>
                                <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  Identify factors that drive trust and satisfaction, and design a simpler, clearer mobile experience that reduces friction while addressing privacy and usability issues. The solution needed to be tailored specifically to Indian banking users&apos; needs and mental models.
                                </p>
                              </div>

                              {/* Action */}
                              <div className="space-y-3">
                                <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Action</h4>
                                <ul className="space-y-3 list-none">
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Research & Analysis:</strong> Analyzed multiple banking apps&apos; usability patterns, platform constraints, and UI real-estate usage. Conducted comparative review of existing Indian banking apps.
                                    </span>
                                  </li>
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Design Principles:</strong> Grounded design in seven principles: Personalization, Transparency, Self-service, Mobile-first, Simplicity, Aesthetic, Holistic.
                                    </span>
                                  </li>
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>UX Process:</strong> Ran a structured UX process (research → define → wireframe → iterate) and produced low-fi wireframes to validate flows early before high-fidelity design.
                                    </span>
                                  </li>
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Product Heuristics:</strong> Codified five product heuristics for teams: listen to customers, challenge status quo, be customer-centric, modernize digital strategy, delight with up-to-date UI.
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              {/* Result */}
                              <div className="space-y-3">
                                <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Result</h4>
                                <ul className="space-y-3 list-none">
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Learning Curve:</strong> Reduced from ~1h45m to ~15m (≈7× faster), dramatically improving time-to-proficiency.
                                    </span>
                                  </li>
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Customer Satisfaction:</strong> Increased by +320%, demonstrating significant improvement in user experience.
                                    </span>
                                  </li>
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Feature Adoption:</strong> Use of additional services increased by +85%, showing improved engagement and cross-selling success.
                                    </span>
                                  </li>
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Advocacy:</strong> Ready-to-Recommend score increased by +460%, indicating strong user satisfaction and loyalty.
                                    </span>
                                  </li>
                                  <li className="flex items-start space-x-2">
                                    <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                    <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                      <strong>Churn Reduction:</strong> Willingness to switch banks decreased by ~1/6, demonstrating improved retention through better UX.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Technologies Used */}
                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Technologies</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Platforms</h4>
                              <ul className="space-y-2 list-none">
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">Mobile platforms: iOS and Android (considered platform capabilities, background tasks, geolocation controls)</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">Cross-vendor UI inconsistencies and platform-specific design patterns</span>
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Design & Research</h4>
                              <ul className="space-y-2 list-none">
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">Low-fidelity wireframes to validate task flows before high-fidelity design</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">UX research & evaluation: Polling/feedback from users; comparative review of existing Indian banking apps</span>
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3 md:col-span-2">
                              <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Trust & Privacy</h4>
                              <ul className="space-y-2 list-none">
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">UI-level privacy controls and clear, transparent interactions to reduce perceived risk</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Target Audience */}
                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Target Audience</h3>
                          <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                            The primary audience consists of Indian banking users seeking mobile banking solutions. Specifically targeting:
                          </p>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Mobile-first banking users who prefer smartphone apps over traditional banking methods</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Users frustrated with existing banking apps due to poor navigation, trust issues, and outdated interfaces</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Indian banking customers with diverse device capabilities, variable connectivity, and varying digital literacy levels</span>
                            </li>
                          </ul>
                        </div>

                        {/* Skills & Tools Applied */}
                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Skills & Tools Applied</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Research & Design</h4>
                              <ul className="space-y-2 list-none">
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">UX Research & Synthesis: Polls, pain-point mapping, competitive analysis</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">Interaction & IA design: Task flows that surface payment history, simplify navigation, reduce cognitive load</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">Wireframing & Prototyping: Low-fi frames to test structure before visuals; iteration guided by principles</span>
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Platform & Trust Design</h4>
                              <ul className="space-y-2 list-none">
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">Trust & Privacy by Design: UI patterns for clarity, consent, and control; platform-appropriate privacy controls</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                  <span className="text-gray-700 dark:text-white/80 text-base font-light">Cross-platform design: Accounting for iOS/Android behavior differences and fragmentation</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Impact & Outcomes */}
                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Impact & Outcomes</h3>
                          <div className="space-y-4">
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              The research project demonstrated significant impact in improving mobile banking experience for Indian users:
                            </p>
                            <ul className="space-y-3 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Faster Onboarding:</strong> Simplified flows and clearer hierarchy cut learning time by ~7× (from ~1h45m to ~15m), dramatically improving time-to-proficiency.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Significant Satisfaction Lifts:</strong> Customer satisfaction increased by +320%, cross-sell/feature adoption by +85%, and advocacy (Ready-to-Recommend) by +460%.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Reduced Churn Intent:</strong> Willingness to switch banks decreased by ~1/6 by addressing trust and usability gaps, demonstrating improved retention.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Trust-Building:</strong> &quot;Trust is a UX outcome&quot;—treated trust as the product of clarity (transparency), control (privacy UI), and reliability (predictable flows), not just security tech.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Design Principles */}
                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Design Principles</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { name: "Personalization", desc: "Tailored experience for individual user needs" },
                              { name: "Transparency", desc: "Clear, upfront information and explicit permissions" },
                              { name: "Self-service", desc: "Empower users to complete tasks independently" },
                              { name: "Mobile-first", desc: "Optimized for smartphone interactions and constraints" },
                              { name: "Simplicity", desc: "Reduced navigation depth and cognitive load" },
                              { name: "Aesthetic", desc: "Modern, up-to-date UI that delights users" },
                              { name: "Holistic", desc: "Considered end-to-end user journey and ecosystem" }
                            ].map((principle) => (
                              <div key={principle.name} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                                <h4 className="text-base font-light text-gray-900 dark:text-white/90 mb-1">{principle.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-white/70 font-light">{principle.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interview Angles */}
                        <div className="pt-4">
                          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Key Insights & Interview Angles</h3>
                          <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic mb-2">
                                &quot;Trust is a UX outcome.&quot;
                              </p>
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                We treated trust as the product of clarity (transparency), control (privacy UI), and reliability (predictable flows)—not just security tech.
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic mb-2">
                                &quot;Simplicity wins adoption.&quot;
                              </p>
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                Cutting navigation depth and surfacing common tasks materially reduced time-to-proficiency by ~7×.
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic mb-2">
                                &quot;Design for India&apos;s realities.&quot;
                              </p>
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                Fragmented devices, variable connectivity, and diverse mental models guided our emphasis on self-service and mobile-first approaches.
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-white/10">
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic mb-2">
                                &quot;Principles → Patterns → Proof.&quot;
                              </p>
                              <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                Principles informed patterns; patterns validated via wireframes and outcome metrics, creating a systematic approach to design.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Elevator Pitch */}
                        <div className="pt-4">
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">Elevator Pitch</h3>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal italic">
                              &quot;Redesigned mobile-banking UX for Indian users, applying seven trust-driving design principles and a research-to-wireframe process that cut learning time ~7× and lifted satisfaction by ~320%. The design addressed trust and usability gaps, reducing churn intent by ~1/6 and increasing feature adoption by +85%.&quot;
                            </p>
                          </div>
                        </div>

                        {/* Research Paper Link */}
                        <div className="pt-6 border-t border-gray-300 dark:border-white/10">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a
                              href="https://ieeexplore.ieee.org/document/10541439"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-300 rounded-lg text-sm font-medium shadow-md hover:shadow-lg"
                            >
                              <span>View Research Paper</span>
                              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href="/research2.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-5 py-2.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 rounded-lg text-sm font-light"
                            >
                              <span>Download PDF</span>
                              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                {/* Wireframe Journey Section (within Leadership) */}
                {activeTab === "leadership" && showWireframe && (
                  <motion.div
                    key="wireframe"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <button
                            onClick={() => setShowWireframe(false)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Back to Leadership"
                          >
                            <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white">PepperUni Wireframe Journey</h2>
                        </div>
                        <p className="text-gray-500 dark:text-white/50 text-sm font-normal">From Concept to Production</p>
                      </div>
                    </div>

                    {/* STAR Format */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">The Journey: STAR Format</h3>
                        
                        <div className="space-y-6">
                          {/* Situation */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Situation</h4>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              As Leader of Technical Development at the Aspiring Product Managers Club, I observed a critical challenge: students were struggling with resume optimization for job applications. Many were submitting generic resumes that didn&apos;t align with specific job requirements, resulting in low interview conversion rates. The competitive job market demanded tailored, impactful resumes that highlighted relevant skills and experiences.
                            </p>
                          </div>

                          {/* Task */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Task</h4>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              My responsibility was to identify a solution that could help students create job-specific, optimized resumes efficiently. I needed to build a platform that could analyze job descriptions, extract key requirements, and guide students in tailoring their resumes to match specific roles. The solution had to be scalable, user-friendly, and provide measurable improvements in application success rates.
                            </p>
                          </div>

                          {/* Action */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Action</h4>
                            <ul className="space-y-3 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Research & Ideation:</strong> Conducted user interviews with 30+ students to understand pain points in resume creation. Identified that manual resume tailoring was time-consuming and often missed key keywords.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Design Process:</strong> Created comprehensive wireframes in Figma, iterating through two design drafts. First draft focused on core functionality, second draft refined UX/UI based on user feedback and accessibility principles.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Development:</strong> Architected full-stack solution using React for frontend, Node.js/Express for backend, and PostgreSQL for data management. Implemented resume parsing algorithms and job description analysis using NLP techniques.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Infrastructure:</strong> Deployed on AWS using Terraform for Infrastructure as Code, ensuring scalability and reliability. Integrated Cloudflare for global CDN and performance optimization.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  <strong>Testing & Iteration:</strong> Conducted beta testing with club members, gathering feedback to improve accuracy of resume analysis and user experience.
                                </span>
                              </li>
                            </ul>
                          </div>

                          {/* Result */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Result</h4>
                            <ul className="space-y-3 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  Successfully launched PepperUni as a production-ready platform at <strong>pepperuni.com</strong>, serving 500+ students at Northeastern University
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  Users reported an average <strong>20% improvement in resume scores</strong> and increased interview callbacks by tailoring resumes to job descriptions
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  Reduced resume customization time from <strong>2-3 hours to 15-20 minutes</strong> per application
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                                  Platform demonstrates strong user retention with <strong>85% of users returning</strong> for multiple resume versions
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Target Audience</h3>
                      <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                        The primary audience consists of university students and recent graduates actively seeking internships and full-time positions. Specifically targeting:
                      </p>
                      <ul className="space-y-2 list-none mt-4">
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Students applying to multiple positions requiring tailored resumes</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">Career changers needing to reframe experiences for different industries</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">International students adapting resumes to US job market standards</span>
                        </li>
                      </ul>
                    </div>

                    {/* Skills & Tools */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Skills & Tools Applied</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Technical Skills</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Full-stack development (React, Node.js, Express)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Database design and optimization (PostgreSQL)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Cloud infrastructure (AWS, Terraform)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">NLP for text analysis and keyword extraction</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Product & Design Skills</h4>
                          <ul className="space-y-2 list-none">
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">UI/UX design and prototyping (Figma)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">User research and validation</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Product strategy and roadmap planning</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                              <span className="text-gray-700 dark:text-white/80 text-base font-light">Agile development and sprint planning</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Impact & Outcomes</h3>
                      <div className="space-y-4">
                        <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                          PepperUni has become a valuable resource within our university community, helping students navigate the competitive job market more effectively. The platform has demonstrated tangible impact through:
                        </p>
                        <ul className="space-y-3 list-none">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Improved Application Success:</strong> Students using PepperUni reported a 35% increase in interview callbacks compared to those using generic resumes
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Time Efficiency:</strong> Streamlined the resume customization process, enabling students to apply to 3x more positions with quality applications
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Educational Value:</strong> The platform serves as a learning tool, helping students understand how to identify and highlight relevant skills for different roles
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong>Community Impact:</strong> Built a tool that has become an integral part of the career development resources at Northeastern University
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Design Process */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Design Process</h3>
                      <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                        The design journey began with understanding user needs through research, followed by iterative wireframing and prototyping in Figma. The process evolved from initial concepts to a polished, user-friendly interface.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <a
                          href="https://www.figma.com/design/cT7851TvPJjM73YUdjP5Ll/Pepperuni"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-200 text-sm font-medium rounded-lg shadow-md hover:shadow-lg"
                        >
                          <span>Final Wireframe (Figma)</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </a>
                        <a
                          href="https://www.figma.com/design/pTCshqhf8MLEG1tdd9Pluq/APMC-DESIGN-1?node-id=0-1&p=f"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 text-sm font-medium rounded-lg"
                        >
                          <span>First Draft (Figma)</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Additional Links */}
                    <div className="pt-6 border-t border-gray-300 dark:border-white/10">
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://pepperuni.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-5 py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 text-sm font-light rounded-lg"
                        >
                          <span>Production Site</span>
                          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                        </a>
                        <LinkButton href="https://github.com/apmcneuboston/PepperUni" icon={null}>GitHub Repository</LinkButton>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* CV Section */}
                {activeTab === "cv" && (
                  <motion.div
                    key="cv"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">CV</h2>
                    
                    {/* Contact Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-white/10 mb-8"
                    >
                      <p className="text-gray-900 dark:text-white text-base leading-relaxed font-light text-center">
                        Interested in connecting? Feel free to reach out at{" "}
                        <a 
                          href="mailto:kumar.cham@northeastern.edu" 
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          kumar.cham@northeastern.edu
                        </a>
                        {" "}or{" "}
                        <a 
                          href="tel:+18573398868" 
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium whitespace-nowrap"
                        >
                          +1 (857) 339-8868
                        </a>
                        . I&apos;m open to discussing opportunities.
                      </p>
                    </motion.div>

                    {/* Resume Preview Frame */}
                    <div className="relative w-full max-w-md mx-auto mb-8">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-xl border-2 border-gray-300 dark:border-white/20">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-inner p-3 aspect-[8.5/11] overflow-hidden relative">
                          <iframe
                            src="/Chaman_Kumar_Resume_2025.pdf#view=FitH"
                            className="w-full h-full border-0 rounded"
                            title="Resume Preview"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-gray-900/10 pointer-events-none rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Download Section */}
                    <div className="flex flex-col items-center gap-4 pt-4">
                      <a
                        href="/Chaman_Kumar_Resume_2025.pdf"
                        download="Chaman_Kumar_Resume_2025.pdf"
                        className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-300 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download Resume</span>
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Study Section */}
                {activeTab === "study" && (
                  <motion.div
                    key="study"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Study</h2>
                    
                    {!studyAuthenticated ? (
                      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                        <form onSubmit={handleStudyPasswordSubmit} className="space-y-4">
                          <div>
                            <label htmlFor="study-password" className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                              Enter Password
                            </label>
                            <input
                              type="password"
                              id="study-password"
                              value={studyPassword}
                              onChange={(e) => {
                                setStudyPassword(e.target.value);
                                setStudyPasswordError(false);
                              }}
                              className="w-full px-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                              placeholder="Enter password"
                              autoFocus
                            />
                          </div>
                          {studyPasswordError && (
                            <div className="text-red-600 dark:text-red-400 text-sm font-medium">
                              Restricted Zone.
                            </div>
                          )}
                          <button
                            type="submit"
                            className="w-full px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-200 rounded-lg font-medium"
                          >
                            Access Study Section
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {/* Blind 75 Folder */}
                        <a
                          href="https://github.com/byteKumar/Blind-75"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-start space-y-1 hover:opacity-80 transition-opacity duration-200"
                        >
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <Image
                              src={folderImage}
                              alt="Blind 75"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-gray-900 dark:text-white text-xs sm:text-sm font-medium text-center max-w-[80px] break-words">
                            Blind 75
                          </p>
                        </a>

                        {/* Design Pattern Folder */}
                        <a
                          href="https://github.com/byteKumar/systemdesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-start space-y-1 hover:opacity-80 transition-opacity duration-200"
                        >
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <Image
                              src={folderImage}
                              alt="Design Pattern"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-gray-900 dark:text-white text-xs sm:text-sm font-medium text-center max-w-[80px] break-words">
                            Design Pattern
                          </p>
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
