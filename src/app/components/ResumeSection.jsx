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
  const [activeProjectJourney, setActiveProjectJourney] = useState(null); // 'google-slides', 'image-processor', 'leetcode', 'designcraft', 'recipehub'
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
      className="inline-flex items-center justify-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
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
    <section className="text-gray-900 dark:text-white min-h-screen bg-gray-50 dark:bg-[#0a0a0a] relative overflow-x-hidden" id="resume">
      {/* Fixed Header with Tabs */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-white/10 shadow-sm">
        <div className="w-full pl-3 pr-3 sm:pl-4 sm:pr-4 md:pl-6 md:pr-6 lg:pl-[10%] lg:pr-[10%]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2.5 sm:py-3 gap-2 sm:gap-3">
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
                setActiveProjectJourney(null);
                // Reset password state when switching away from study tab
                    if (tab.id !== "study") {
                      setStudyPassword("");
                      setStudyPasswordError(false);
                    }
                  }}
                  className={`px-2 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm font-medium transition-all duration-200 relative rounded-md ${
                    activeTab === tab.id
                      ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10"
                      : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
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
      <div className="w-full pl-3 pr-3 sm:pl-4 sm:pr-4 md:pl-6 md:pr-6 lg:pl-[10%] lg:pr-0 pt-28 sm:pt-32 md:pt-[76px] pb-4 sm:pb-6">
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
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-6 md:p-7 lg:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">About ME 👋</h2>
                      
                      <div className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed font-light text-gray-700 dark:text-white/70">
                        <p className="text-sm sm:text-base">
                          Hello! I&#39;m <strong className="font-medium text-gray-900 dark:text-white">Chaman Kumar</strong>, a Master of Science in Computer Science candidate at Northeastern University (Boston). With a strong foundation in full-stack engineering, web performance & accessibility, and cloud-native DevOps, I&#39;m passionate about building fast, scalable, and deployment-ready web applications.
                        </p>

                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4">🔍 Experience & Background</h3>
                          <p className="text-sm sm:text-base">
                            My journey spans teaching, product engineering, and research—with roles at Northeastern&#39;s Khoury College (Graduate TA), AKQA, and BluePi. At Northeastern, I led a TA team and shipped a Stack Overflow–style MERN platform used by 100+ students while driving TDD and structured code reviews. At AKQA, I optimized IWC Schaffhausen&#39;s AEM/MERN e-commerce stack—raising code coverage, cutting load time 11s → 4s, and boosting engagement while hardening releases via CI/CD and WCAG 2.1. Earlier at BluePi, I built Spring Boot + AWS prototypes and strengthened pipelines with JUnit/CI to improve efficiency and reduce runtime errors. Along the way, I delivered industry-aligned academic builds (Java image pipeline, Chrome extension, RecipeHub) and an IEEE-published face-recognition attendance system.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4">💻 Technical Expertise</h3>
                          <p className="mb-3 text-sm sm:text-base">I specialize in:</p>
                          <div className="space-y-2 sm:space-y-3 pl-3 sm:pl-4 border-l-2 border-gray-200 dark:border-white/20">
                            <div className="text-xs sm:text-sm">
                              <strong className="font-medium text-gray-900 dark:text-white">Programming:</strong> <span className="break-words">Java, Python, C/C++, JavaScript, TypeScript, C#, SQL, Go(Golang), Ruby</span>
                            </div>
                            <div className="text-xs sm:text-sm">
                              <strong className="font-medium text-gray-900 dark:text-white">Web/Frameworks:</strong> <span className="break-words">React, Node.js, Next.js, Express, Spring Boot, .NET, Angular, HTML5/CSS3, Webpack, Socket.IO</span>
                            </div>
                            <div className="text-xs sm:text-sm">
                              <strong className="font-medium text-gray-900 dark:text-white">Databases/Testing:</strong> <span className="break-words">MySQL, PostgreSQL, DynamoDB, MongoDB, Redis, JUnit, Mockito, Jest, Postman, SonarQube</span>
                            </div>
                            <div className="text-xs sm:text-sm">
                              <strong className="font-medium text-gray-900 dark:text-white">Cloud & DevOps:</strong> <span className="break-words">Jenkins, Docker, Kubernetes, GCP, Azure, AWS (Lambda, EC2, S3, RDS/DynamoDB, IAM, SNS)</span>
                            </div>
                            <div className="text-xs sm:text-sm">
                              <strong className="font-medium text-gray-900 dark:text-white">Software Development:</strong> <span className="break-words">Object-Oriented Design, TDD, Agile, Scrum, Retrospective, Story Planning, Sprint, Service First</span>
                            </div>
                            <div className="text-xs sm:text-sm">
                              <strong className="font-medium text-gray-900 dark:text-white">Certifications:</strong> <span className="break-words">AWS Cloud Practitioner, AWS Certified Developer Associate</span>
                            </div>
                            <div className="text-xs sm:text-sm">
                              <strong className="font-medium text-gray-900 dark:text-white">Other Tools:</strong> <span className="break-words">Selenium, jQuery, CloudWatch, Cypress, Git, Linux/Bash, CI/CD, GitHub Actions, REST API, JWT</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4">🚀 Current Focus</h3>
                          <p className="mb-3 text-sm sm:text-base">Currently, I am advancing my software engineering by building end-to-end products that combine scalable systems, cloud, and AI/ML. My work includes:</p>
                          <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                            <li>Designing and deploying scalable web services and APIs (MERN/TypeScript, Java/Spring) on cloud platforms with CI/CD and observability.</li>
                            <li>Integrating AI/ML features into applications (e.g., vision/NLP) and serving models through reliable inference endpoints.</li>
                            <li>Optimizing performance, accessibility, and reliability to ensure production-ready experiences at scale.</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4">🔍 Career Goals</h3>
                          <p className="mb-3 text-sm sm:text-base">
                            As I move into a full-time role, I want to build scalable, distributed systems that power real products end-to-end—systems that are resilient, observable, and easy to evolve. I&#39;m especially excited about applying AI/ML in production, where strong platform engineering meets high-throughput, low-latency design.
                          </p>
                          <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                            <li><strong className="font-medium text-gray-900 dark:text-white">Backend & Platform Engineering:</strong> Design and implement distributed, fault-tolerant services (microservices, event-driven, async queues) with strict SLOs, horizontal scaling, and graceful degradation.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">AI/ML in Production:</strong> Ship scalable inference and retrieval services (feature stores, vector search, model serving, A/B rollouts) that make AI useful, reliable, and cost-efficient.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">Cloud-Native at Scale:</strong> Operate Kubernetes-based stacks with IaC, autoscaling, blue/green & canary deploys, and deep observability (metrics, logs, traces) for fast incident response.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">Data & Streaming Systems:</strong> Build streaming pipelines and storage layers that handle spikes, ensure consistency where needed, and optimize for throughput and latency.</li>
                            <li><strong className="font-medium text-gray-900 dark:text-white">Performance & Reliability:</strong> Lead capacity planning, load testing, caching strategies, and performance tuning to keep p99s low and availability high.</li>
                          </ul>
                          <p className="mt-4 text-sm sm:text-base">
                            In short: roles where I can own and scale distributed systems, bring AI/ML to production responsibly, and drive engineering practices (TDD, CI/CD, reviews) that keep teams shipping fast with confidence.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4">🔗 Let&#39;s Connect!</h3>
                          <p className="text-sm sm:text-base">
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
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
                              Graduate Teaching Assistant
                            </h3>
                            <p className="text-gray-500 dark:text-white/50 text-xs sm:text-sm font-normal break-words mb-2">Northeastern University, Massachusetts | Jan 2025 - Present</p>
                          </div>
                        </div>
                        <ul className="space-y-2 list-none">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light">Led TA team, shipped MERN Q&A platform (500+ students)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Mentored 5 teams (TDD, peer reviews, improved deployment 25%, reduced incidents 40%)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Ran labs/office hours (100+ students), taught MERN/Agile (95% project completion)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Built CI/CD (raised coverage 20%, reduced deployment errors 20%, bug cycles 10%)</span>
                          </li>
                        </ul>
                        <div className="pt-2">
                          <button
                            onClick={() => setShowTAJourney(true)}
                            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
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
                {activeTab === "projects" && !activeProjectJourney && (
                  <motion.div
                    key="projects-list"
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
                        <div className="flex flex-wrap gap-3">
                          <LinkButton href="https://github.com/byteKumar/google_slide_generator" icon={null}>GitHub</LinkButton>
                          <button
                            onClick={() => setActiveProjectJourney("google-slides")}
                            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
                          >
                            <span>Project Journey</span>
                          </button>
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
                        <div className="flex flex-wrap gap-3">
                          <LinkButton href="https://github.com/byteKumar/advanced_image_manipulation_and_enhancement_application" icon={null}>GitHub</LinkButton>
                          <button
                            onClick={() => setActiveProjectJourney("image-processor")}
                            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
                          >
                            <span>Project Journey</span>
                          </button>
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
                        <div className="flex flex-wrap gap-3">
                          <LinkButton href="https://github.com/byteKumar/LeetCode-Power-Up" icon={null}>GitHub</LinkButton>
                          <button
                            onClick={() => setActiveProjectJourney("leetcode")}
                            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
                          >
                            <span>Project Journey</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* DesignCraft */}
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">DesignCraft</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {["Java", "JUnit", "UML", "Markdown", "Git", "Lombok", "OOPs", "LLD"].map((tech) => (
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
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Built a system design course on OOP, SOLID, and design patterns with 50+ live code examples used by 500+ students</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Created UML diagrams, JUnit tests, and markdown notes for clear, practical learning</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Implemented 15+ real-world assignments, driving a 90%+ completion-rate among senior year undergrad students</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-3">
                          <LinkButton href="https://github.com/byteKumar/systemdesign" icon={null}>GitHub</LinkButton>
                          <button
                            onClick={() => setActiveProjectJourney("designcraft")}
                            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
                          >
                            <span>Project Journey</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* RecipeHub */}
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">RecipeHub</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {["Node.js", "TypeScript", "MongoDB", "React", "Express", "Redux", "Rest APIs"].map((tech) => (
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
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Built a full stack MERN web application that allows users to browse, search, and save their favorite recipes</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light break-words">Integrated authentication, content editing, and a personalized recipe feed to elevate user retention and engagement</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-3">
                          <LinkButton href="https://github.com/byteKumar/RecipeHub" icon={null}>GitHub</LinkButton>
                          <button
                            onClick={() => setActiveProjectJourney("recipehub")}
                            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
                          >
                            <span>Project Journey</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Project Journey Sections */}
                {activeTab === "projects" && activeProjectJourney && (
                  <motion.div
                    key={`project-journey-${activeProjectJourney}`}
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={() => setActiveProjectJourney(null)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Back to Projects"
                      >
                        <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {activeProjectJourney === "google-slides" && "Google Slides Generator"}
                        {activeProjectJourney === "image-processor" && "Advance Image Processor"}
                        {activeProjectJourney === "leetcode" && "LeetCode Power Up - Chrome Extension"}
                        {activeProjectJourney === "designcraft" && "DesignCraft"}
                        {activeProjectJourney === "recipehub" && "RecipeHub"}
                      </h3>
                    </div>

                    {/* Google Slides Generator Journey */}
                    {activeProjectJourney === "google-slides" && (
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                          <div className="space-y-6 text-sm sm:text-base leading-relaxed font-light text-gray-700 dark:text-white/70">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">🚀 Project Journey: Google Slides Generator</h2>
                              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-600 dark:text-white/60 mb-6">
                                A comprehensive overview of my project development journey, showcasing the process, impact, and technical excellence behind building a modern presentation generation platform.
                              </blockquote>
                            </div>

                            {/* STAR Format */}
                            <div className="pt-4">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">📖 The Journey: STAR Format</h3>
                              
                              {/* Situation */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Situation</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Context:</strong> The need for an automated, customizable presentation generation system that bridges the gap between content creation and professional design. Users needed a way to create Google Slides presentations programmatically with full control over layouts, themes, and styling—something that wasn&apos;t easily achievable with existing tools.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">The challenge was to build a system that:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Seamlessly integrates with Google Slides API</li>
                                  <li>Provides a flexible design system with theme management</li>
                                  <li>Offers real-time preview capabilities</li>
                                  <li>Manages complex slide layouts and content models</li>
                                  <li>Ensures data persistence and user isolation</li>
                                </ul>
                              </div>

                              {/* Task */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Task</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Objective:</strong> Develop a full-stack web application that allows users to create, customize, and generate professional Google Slides presentations with a comprehensive design system, theme management, and real-time preview capabilities.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">Key requirements:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Build a modern React frontend with Google Slides-like interface</li>
                                  <li>Create a robust TypeScript/Express backend with Google OAuth integration</li>
                                  <li>Implement a comprehensive design system with theme tokens and layout registry</li>
                                  <li>Design database schema for persistent theme storage and user management</li>
                                  <li>Integrate Google Slides API for seamless presentation generation</li>
                                  <li>Provide real-time preview and theme customization at both presentation and slide levels</li>
                                </ul>
                              </div>

                              {/* Action */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Action</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Approach:</strong> Implemented a modular, service-oriented architecture with clear separation of concerns, focusing on scalability, maintainability, and user experience.
                                </p>
                                
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Architecture & Design:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>Frontend:</strong> Built with React 19, TypeScript, and Vite for modern development experience</li>
                                    <li><strong>Backend:</strong> Express.js with TypeScript, implementing interface-based design patterns</li>
                                    <li><strong>Database:</strong> PostgreSQL (Neon DB) for user data and theme persistence, MongoDB for presentation storage</li>
                                    <li><strong>Authentication:</strong> Google OAuth 2.0 with session-based authentication</li>
                                    <li><strong>API Integration:</strong> Google Slides API for presentation generation and manipulation</li>
                                  </ul>
                                </div>

                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Key Implementation Steps:</strong>
                                  <div className="space-y-4 mt-4 pl-4 border-l-2 border-gray-200 dark:border-white/20">
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">1. Design System Foundation</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created comprehensive design tokens system with colors, typography, spacing, shadows, and transitions</li>
                                        <li>• Implemented 5 pre-built themes inspired by Google Slides</li>
                                        <li>• Built ThemeManager singleton service for centralized theme operations</li>
                                        <li>• Developed CSS custom properties injection for dynamic theme application</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">2. Layout System Architecture</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created modular layout registry pattern supporting 7 slide layouts</li>
                                        <li>• Implemented Zod schema validation for type-safe layout definitions</li>
                                        <li>• Built flexible placeholder system that maps user inputs to Google Slides placeholders</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">3. Theme Management System</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented multi-level theme application (presentation-level and slide-level)</li>
                                        <li>• Created theme inheritance system where slides inherit presentation theme by default</li>
                                        <li>• Built ThemeDashboard, ThemeCreator, and ThemeSelector components</li>
                                        <li>• Developed real-time theme preview with instant visual feedback</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">4. Database Integration</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Designed theme_schema table with proper indexing for efficient queries</li>
                                        <li>• Implemented user ownership validation for theme CRUD operations</li>
                                        <li>• Created NeonDBService with connection pooling for scalability</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">5. Google Slides API Integration</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created slide generator that maps internal layouts to Google Slides predefined layouts</li>
                                        <li>• Implemented batch update operations for efficient slide creation</li>
                                        <li>• Built theme application system that converts hex colors to RGB for Google Slides API</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Result */}
                              <div className="space-y-4">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Result</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Outcome:</strong> Successfully delivered a production-ready, full-stack application that enables users to create professional presentations with unprecedented customization and control.
                                </p>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Quantifiable Results:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>✅ <strong>7 Slide Layouts</strong> implemented with full Google Slides API integration</li>
                                    <li>✅ <strong>5 Pre-built Themes</strong> + unlimited custom themes with database persistence</li>
                                    <li>✅ <strong>Multi-level Theme System</strong> (presentation + slide-level overrides)</li>
                                    <li>✅ <strong>Real-time Preview</strong> with instant visual feedback</li>
                                    <li>✅ <strong>100% Type Safety</strong> with TypeScript on backend and Zod schema validation</li>
                                    <li>✅ <strong>Scalable Architecture</strong> with service-oriented design and database connection pooling</li>
                                    <li>✅ <strong>Production Deployment</strong> configured with Vercel</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Skills & Tools */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🛠️ Skills & Tools Applied</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h4>
                                  <p className="text-sm sm:text-base">React 19, TypeScript, Vite, CSS3, Material Design</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h4>
                                  <p className="text-sm sm:text-base">Node.js, Express.js, TypeScript, RESTful APIs</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Database</h4>
                                  <p className="text-sm sm:text-base">PostgreSQL (Neon DB), MongoDB, JSONB</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">APIs</h4>
                                  <p className="text-sm sm:text-base">Google Slides API, Google Drive API, OAuth 2.0</p>
                                </div>
                              </div>
                            </div>

                            {/* Impact */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">💡 Impact & Outcomes</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Modular Architecture:</strong> Service-oriented design enables easy addition of new features</li>
                                    <li><strong>Database Design:</strong> Normalized schema with proper indexing supports growing user base</li>
                                    <li><strong>Type Safety:</strong> TypeScript throughout backend ensures compile-time error detection</li>
                                    <li><strong>Code Quality:</strong> Interface-based design enables easy testing and mocking</li>
                                    <li><strong>Maintainability:</strong> Clear separation of concerns improves code readability</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">User Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Time Savings:</strong> Automated presentation generation reduces manual work from hours to minutes</li>
                                    <li><strong>Real-time Preview:</strong> Instant feedback eliminates guesswork and reduces iteration cycles</li>
                                    <li><strong>Theme Reusability:</strong> Save and reuse themes across presentations, maintaining brand consistency</li>
                                    <li><strong>Cross-Device Access:</strong> Database persistence enables access from any device</li>
                                    <li><strong>Intuitive UX:</strong> Google Slides-like interface feels familiar and requires minimal learning curve</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Learning & Growth</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Google Slides API:</strong> Deep understanding of API capabilities, batch operations, and placeholder mapping</li>
                                    <li><strong>Serverless Databases:</strong> Experience with Neon DB serverless PostgreSQL and connection pooling</li>
                                    <li><strong>TypeScript Patterns:</strong> Interface-based design, generic types, and type inference</li>
                                    <li><strong>Design Systems:</strong> Comprehensive design token implementation and theme management</li>
                                    <li><strong>OAuth 2.0:</strong> Complete OAuth flow implementation with token refresh and session management</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Target Audience */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">👥 Target Audience</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Primary Users</h4>
                                  <p className="text-sm sm:text-base mb-3">
                                    <strong>Recruiters & Hiring Managers:</strong> This project demonstrates full-stack development capabilities, API integration skills, and modern web development practices. It showcases architecture decisions, code quality, system design, and scalability considerations.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Who This Project Appeals To:</strong>
                                  </p>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>Companies seeking full-stack developers with React, TypeScript, and Node.js expertise</li>
                                    <li>Organizations valuing clean architecture, maintainable code, and scalable solutions</li>
                                    <li>Teams looking for developers who can integrate complex third-party APIs (Google Workspace)</li>
                                    <li>Companies interested in candidates with design system implementation experience</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Key Challenges */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🔍 Key Challenges & Solutions</h3>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Challenge 1: Google Slides API Placeholder Mapping</h4>
                                  <p className="text-sm sm:text-base mb-2">
                                    <strong>Problem:</strong> Mapping internal layout system to Google Slides API placeholders required understanding complex API structure and placeholder types.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Solution:</strong> Created placeholder mapping system that identifies placeholder types, built layout registry that maps internal layouts to Google Slides predefined layouts, and implemented batch update operations for efficient slide creation.
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Challenge 2: Theme Persistence and User Isolation</h4>
                                  <p className="text-sm sm:text-base mb-2">
                                    <strong>Problem:</strong> Moving from localStorage to database while maintaining user isolation and ensuring data integrity.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Solution:</strong> Designed PostgreSQL schema with user ownership validation, implemented user isolation at database level with foreign key constraints, and created migration system from localStorage to database.
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Challenge 3: Real-time Theme Application</h4>
                                  <p className="text-sm sm:text-base mb-2">
                                    <strong>Problem:</strong> Applying theme changes instantly across presentation and individual slides without performance issues.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Solution:</strong> Implemented CSS custom properties for dynamic theme injection, created event-driven theme change system, and optimized CSS application to prevent layout shifts.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Project Highlights */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🏆 Project Highlights</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What Makes This Project Stand Out</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Innovation:</strong> Multi-level theme system with presentation-level and slide-level overrides</li>
                                    <li><strong>Technical Excellence:</strong> Full-stack TypeScript with type safety from frontend to backend</li>
                                    <li><strong>User-Centric Design:</strong> Google Slides-inspired interface with real-time feedback</li>
                                    <li><strong>Production Readiness:</strong> Deployment configuration with Vercel and comprehensive error handling</li>
                                    <li><strong>Scalability:</strong> Architecture supports future features like theme sharing, collaboration, and marketplace</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Advance Image Processor Journey */}
                    {activeProjectJourney === "image-processor" && (
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                          <div className="space-y-6 text-sm sm:text-base leading-relaxed font-light text-gray-700 dark:text-white/70">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">🚀 Project Journey: Advance Image Processor</h2>
                              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-600 dark:text-white/60 mb-6">
                                A comprehensive overview of my project development journey, showcasing the process, impact, and technical excellence behind building a sophisticated image processing application with GUI support.
                              </blockquote>
                            </div>

                            {/* STAR Format */}
                            <div className="pt-4">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">📖 The Journey: STAR Format</h3>
                              
                              {/* Situation */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Situation</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Context:</strong> The need for a comprehensive, extensible image processing application that supports both command-line and graphical user interface modes. Users needed a flexible system to perform various image manipulation operations—from basic transformations to advanced features like compression, color correction, and histogram analysis.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">The challenge was to build a system that:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Supports 20+ image processing operations (load, save, flip, brightness, filters, compression, etc.)</li>
                                  <li>Implements both command-line and GUI interfaces for user interaction</li>
                                  <li>Provides extensible architecture for adding new image operations</li>
                                  <li>Handles complex image transformations with proper pixel manipulation</li>
                                  <li>Supports script file execution for batch operations</li>
                                  <li>Implements advanced features like Haar Wavelet Transform, histogram analysis, and split view operations</li>
                                </ul>
                              </div>

                              {/* Task */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Task</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Objective:</strong> Develop a robust, extensible image processing application using Java with MVC architecture, supporting comprehensive image manipulation operations, GUI interface, and advanced features like compression, color correction, and histogram generation.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">Key requirements:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Build a modular architecture with clear separation of concerns (Model-View-Controller)</li>
                                  <li>Implement 20+ image processing operations with proper pixel-level manipulation</li>
                                  <li>Create both command-line parser and GUI interface for user interaction</li>
                                  <li>Design extensible class structure for easy addition of new operations</li>
                                  <li>Implement advanced algorithms (Haar Wavelet Transform, histogram analysis, color correction)</li>
                                  <li>Support script file execution for batch processing</li>
                                  <li>Apply design patterns (Strategy, Factory, Command) for maintainability</li>
                                </ul>
                              </div>

                              {/* Action */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Action</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Approach:</strong> Implemented a modular, MVC-based architecture with clear separation of concerns, applying object-oriented design principles and design patterns to create an extensible, maintainable system.
                                </p>
                                
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Architecture & Design:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>Language & Framework:</strong> Java with Swing for GUI development</li>
                                    <li><strong>Architecture:</strong> MVC (Model-View-Controller) pattern for separation of concerns</li>
                                    <li><strong>Design Patterns:</strong> Strategy, Factory, Command patterns for extensibility</li>
                                    <li><strong>Testing:</strong> JUnit for unit testing and TDD practices</li>
                                    <li><strong>Code Quality:</strong> Object-Oriented Design principles and SOLID principles</li>
                                  </ul>
                                </div>

                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Key Implementation Steps:</strong>
                                  <div className="space-y-4 mt-4 pl-4 border-l-2 border-gray-200 dark:border-white/20">
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">1. Core Architecture</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Designed MVC architecture with MatrixImage (Model), ImageConsoleView/ImageProcessorGUI (View), ImageCommandParser (Controller)</li>
                                        <li>• Implemented ImagePixel class for pixel-level operations with RGB component management</li>
                                        <li>• Created MatrixImageCommand class as command executor following Command pattern</li>
                                        <li>• Built extensible command parser supporting 20+ image operations</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">2. Basic Image Operations</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented load/save operations with file path validation</li>
                                        <li>• Created RGB component extraction (red, green, blue, value, luma, intensity)</li>
                                        <li>• Built horizontal and vertical flip operations</li>
                                        <li>• Implemented brightness adjustment with increment support</li>
                                        <li>• Developed RGB split and combine operations</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">3. Advanced Filters</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented blur filter using kernel convolution</li>
                                        <li>• Created sharpen filter with edge detection kernel</li>
                                        <li>• Built sepia tone filter with color transformation</li>
                                        <li>• Applied kernel-based filtering for pixel manipulation</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">4. Advanced Features</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented Haar Wavelet Transform for image compression</li>
                                        <li>• Created histogram generation for RGB channel analysis</li>
                                        <li>• Built color correction algorithm using histogram peak alignment</li>
                                        <li>• Implemented levels adjustment with quadratic curve transformation</li>
                                        <li>• Developed split view functionality for visual comparison</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">5. GUI Implementation</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created ImageProcessorGUI class with Swing components</li>
                                        <li>• Implemented interactive buttons and input fields for all operations</li>
                                        <li>• Built real-time image preview and display functionality</li>
                                        <li>• Designed intuitive interface for image loading, processing, and saving</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">6. Script Execution</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented script file parser for batch command execution</li>
                                        <li>• Created command-line argument handling for script files</li>
                                        <li>• Built interactive mode for manual command entry</li>
                                        <li>• Added error handling and validation for script commands</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Result */}
                              <div className="space-y-4">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Result</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Outcome:</strong> Successfully delivered a production-ready, extensible image processing application with comprehensive operations, dual interface support (CLI and GUI), and advanced features demonstrating strong software engineering practices.
                                </p>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Quantifiable Results:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>✅ <strong>20+ Image Operations</strong> implemented with proper pixel manipulation</li>
                                    <li>✅ <strong>Dual Interface Support</strong> (command-line and GUI) for flexible user interaction</li>
                                    <li>✅ <strong>MVC Architecture</strong> with clear separation of concerns</li>
                                    <li>✅ <strong>Advanced Algorithms</strong> (Haar Wavelet Transform, histogram analysis, color correction)</li>
                                    <li>✅ <strong>Design Patterns</strong> (Strategy, Factory, Command) for extensibility</li>
                                    <li>✅ <strong>Script Execution</strong> for batch processing operations</li>
                                    <li>✅ <strong>Split View Feature</strong> for visual comparison of transformations</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Skills & Tools */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🛠️ Skills & Tools Applied</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Languages & Frameworks</h4>
                                  <p className="text-sm sm:text-base">Java, Swing, Object-Oriented Design, Design Patterns</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Architecture & Patterns</h4>
                                  <p className="text-sm sm:text-base">MVC, Strategy Pattern, Factory Pattern, Command Pattern</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Testing & Quality</h4>
                                  <p className="text-sm sm:text-base">JUnit, TDD, SOLID Principles, Code Review</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Algorithms & Techniques</h4>
                                  <p className="text-sm sm:text-base">Haar Wavelet Transform, Kernel Convolution, Histogram Analysis, Color Correction</p>
                                </div>
                              </div>
                            </div>

                            {/* Class Diagram */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🏗️ Architecture & Design</h3>
                              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Class Diagram</h4>
                                <div className="relative w-full aspect-auto rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
                                  <Image
                                    src="/classDiagram.png"
                                    alt="Advance Image Processor Class Diagram"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                  />
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 mt-3 italic">
                                  The class diagram illustrates the MVC architecture with clear separation between Model (MatrixImage, ImagePixel), View (ImageConsoleView, ImageProcessorGUI), and Controller (ImageCommandParser, MatrixImageCommand).
                                </p>
                              </div>
                            </div>

                            {/* Features Overview */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">✨ Key Features</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Basic Operations</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li>Load and save images with file path validation</li>
                                    <li>RGB component extraction (red, green, blue, value, luma, intensity)</li>
                                    <li>Horizontal and vertical flip operations</li>
                                    <li>Brightness adjustment with positive/negative increments</li>
                                    <li>RGB split and combine operations</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Advanced Filters</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li>Blur filter using kernel convolution</li>
                                    <li>Sharpen filter with edge detection</li>
                                    <li>Sepia tone transformation</li>
                                    <li>Kernel-based pixel manipulation</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Advanced Features</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li>Haar Wavelet Transform for image compression</li>
                                    <li>Histogram generation for RGB channel analysis</li>
                                    <li>Color correction using histogram peak alignment</li>
                                    <li>Levels adjustment with quadratic curve transformation</li>
                                    <li>Split view for visual comparison (blur, sharpen, sepia, greyscale, color correction, levels adjustment)</li>
                                    <li>Downscale operation for image resizing</li>
                                    <li>Mask image generation</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">User Interface</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li>Command-line interface with interactive mode</li>
                                    <li>Graphical User Interface (GUI) with Swing components</li>
                                    <li>Script file execution for batch operations</li>
                                    <li>Real-time image preview and display</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Impact */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">💡 Impact & Outcomes</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Modular Architecture:</strong> MVC design enables easy addition of new image operations without modifying existing code</li>
                                    <li><strong>Design Patterns:</strong> Strategy, Factory, and Command patterns improve code maintainability and extensibility</li>
                                    <li><strong>Code Quality:</strong> Object-oriented design and SOLID principles ensure clean, readable, and testable code</li>
                                    <li><strong>Extensibility:</strong> Clear separation of concerns allows new features to be added with minimal impact on existing functionality</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Learning & Growth</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Image Processing Algorithms:</strong> Deep understanding of pixel manipulation, kernel convolution, and wavelet transforms</li>
                                    <li><strong>GUI Development:</strong> Experience with Swing framework and event-driven programming</li>
                                    <li><strong>Design Patterns:</strong> Practical application of Strategy, Factory, and Command patterns</li>
                                    <li><strong>Software Architecture:</strong> Implementation of MVC architecture with proper separation of concerns</li>
                                    <li><strong>Testing:</strong> TDD practices and JUnit testing for code quality assurance</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Target Audience */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">👥 Target Audience</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Primary Users</h4>
                                  <p className="text-sm sm:text-base mb-3">
                                    <strong>Recruiters & Hiring Managers:</strong> This project demonstrates strong object-oriented programming skills, design pattern implementation, GUI development, and algorithm expertise. It showcases the ability to build complex, feature-rich applications with clean architecture and extensible design.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Who This Project Appeals To:</strong>
                                  </p>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>Companies seeking Java developers with strong OOP and design pattern knowledge</li>
                                    <li>Organizations valuing clean architecture, maintainable code, and extensible design</li>
                                    <li>Teams looking for developers who can implement complex algorithms and data structures</li>
                                    <li>Companies interested in candidates with GUI development and user experience skills</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Design Process */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🎨 Design Process</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Architecture Decisions</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>MVC Pattern:</strong> Separated concerns between data (MatrixImage), view (ImageConsoleView/GUI), and controller (ImageCommandParser) for maintainability</li>
                                    <li><strong>Command Pattern:</strong> MatrixImageCommand class encapsulates operations, enabling extensibility and script execution</li>
                                    <li><strong>Strategy Pattern:</strong> Different image operations can be swapped without modifying client code</li>
                                    <li><strong>Factory Pattern:</strong> Simplified object creation for different image operations</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Design Justifications</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>ImagePixel Class:</strong> Encapsulates pixel operations, enabling reusable RGB manipulation methods</li>
                                    <li><strong>MatrixImage Class:</strong> Central data model for all image operations, ensuring consistency</li>
                                    <li><strong>Dual Interface:</strong> Both CLI and GUI provide flexibility for different user preferences</li>
                                    <li><strong>Script Execution:</strong> Batch processing capability enhances productivity for multiple operations</li>
                                    <li><strong>Split View:</strong> Visual comparison feature demonstrates attention to user experience</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* LeetCode Power-Up Journey */}
                    {activeProjectJourney === "leetcode" && (
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                          <div className="space-y-6 text-sm sm:text-base leading-relaxed font-light text-gray-700 dark:text-white/70">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">🚀 Project Journey: LeetCode Power-Up</h2>
                              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-600 dark:text-white/60 mb-6">
                                A comprehensive overview of my project development journey, showcasing the process, impact, and technical excellence behind building a Chrome extension that enhances the LeetCode learning experience.
                              </blockquote>
                            </div>

                            {/* STAR Format */}
                            <div className="pt-4">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">📖 The Journey: STAR Format</h3>
                              
                              {/* Situation */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Situation</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Context:</strong> LeetCode problem-solving often requires switching between the problem page and external resources (YouTube tutorials, notes) to understand solutions. This context switching disrupts the learning flow and reduces efficiency. Developers need a streamlined way to access solution videos and maintain notes directly within the LeetCode interface.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">The challenge was to build a system that:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Seamlessly integrates with LeetCode&apos;s existing interface without disrupting the user experience</li>
                                  <li>Fetches relevant YouTube solution videos dynamically using the YouTube Data API</li>
                                  <li>Provides per-problem scratchpad functionality with persistent storage</li>
                                  <li>Handles API key management securely in a browser extension environment</li>
                                  <li>Works across different LeetCode problem pages with dynamic content injection</li>
                                  <li>Provides real-time updates without page refresh</li>
                                </ul>
                              </div>

                              {/* Task */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Task</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Objective:</strong> Develop a Chrome extension that enhances LeetCode problem-solving by injecting a sidebar with top solution videos from YouTube and a per-problem scratchpad for notes, creating a seamless learning experience within the LeetCode interface.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">Key requirements:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Build a Chrome extension using Manifest V3 architecture</li>
                                  <li>Integrate YouTube Data API to fetch solution videos dynamically</li>
                                  <li>Implement content script injection on LeetCode problem pages</li>
                                  <li>Create a sidebar component that doesn&apos;t interfere with LeetCode&apos;s UI</li>
                                  <li>Implement per-problem scratchpad with chrome.storage for persistence</li>
                                  <li>Handle API key management securely using environment variables and Vite</li>
                                  <li>Design async architecture for API calls and data handling</li>
                                </ul>
                              </div>

                              {/* Action */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Action</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Approach:</strong> Implemented a Chrome extension with Manifest V3, using Promise-based async architecture for API calls, content script injection for dynamic UI, and chrome.storage for persistent data management.
                                </p>
                                
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Architecture & Design:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>Extension Type:</strong> Chrome Extension with Manifest V3</li>
                                    <li><strong>Build Tool:</strong> Vite for bundling and environment variable injection</li>
                                    <li><strong>API Integration:</strong> YouTube Data API v3 for fetching solution videos</li>
                                    <li><strong>Storage:</strong> chrome.storage API for per-problem note persistence</li>
                                    <li><strong>Content Scripts:</strong> Dynamic injection on LeetCode problem pages</li>
                                    <li><strong>Async Architecture:</strong> Promise-based API calls and data handling</li>
                                  </ul>
                                </div>

                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Key Implementation Steps:</strong>
                                  <div className="space-y-4 mt-4 pl-4 border-l-2 border-gray-200 dark:border-white/20">
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">1. Extension Setup</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Configured Manifest V3 with proper permissions and content scripts</li>
                                        <li>• Set up Vite build configuration for extension bundling</li>
                                        <li>• Implemented environment variable handling for API key management</li>
                                        <li>• Created proper file structure for Chrome extension architecture</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">2. Content Script Injection</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Built content script that detects LeetCode problem pages</li>
                                        <li>• Implemented dynamic sidebar injection without disrupting existing UI</li>
                                        <li>• Created responsive sidebar component that adapts to LeetCode&apos;s layout</li>
                                        <li>• Handled DOM manipulation and event listeners for user interaction</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">3. YouTube Data API Integration</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented YouTube Data API client with proper error handling</li>
                                        <li>• Created search query generation based on LeetCode problem title</li>
                                        <li>• Built API request handler with Promise-based async architecture</li>
                                        <li>• Implemented top 3-5 video selection with relevance filtering</li>
                                        <li>• Added error handling for API rate limits and network failures</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">4. Scratchpad Functionality</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented per-problem note storage using chrome.storage API</li>
                                        <li>• Created unique key generation based on problem URL/slug</li>
                                        <li>• Built text editor component with auto-save functionality</li>
                                        <li>• Implemented data persistence across browser sessions</li>
                                        <li>• Added note retrieval and display on page load</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">5. Async Architecture</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Designed Promise-based architecture for API calls</li>
                                        <li>• Implemented async/await patterns for clean code flow</li>
                                        <li>• Built error handling and retry logic for API failures</li>
                                        <li>• Created loading states and user feedback during API calls</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">6. Security & Configuration</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented environment variable handling with Vite</li>
                                        <li>• Created secure API key management for development and production</li>
                                        <li>• Added .env file support with proper gitignore configuration</li>
                                        <li>• Documented security best practices for API key protection</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Result */}
                              <div className="space-y-4">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Result</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Outcome:</strong> Successfully delivered a Chrome extension that enhances LeetCode problem-solving by providing instant access to solution videos and persistent note-taking, improving the learning experience and productivity for developers.
                                </p>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Quantifiable Results:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>✅ <strong>Top 3-5 Solution Videos</strong> dynamically fetched and displayed per problem</li>
                                    <li>✅ <strong>Per-Problem Scratchpad</strong> with persistent storage using chrome.storage</li>
                                    <li>✅ <strong>Seamless Integration</strong> with LeetCode interface without UI disruption</li>
                                    <li>✅ <strong>Promise-Based Architecture</strong> for efficient async API calls</li>
                                    <li>✅ <strong>Manifest V3</strong> compliance with modern Chrome extension standards</li>
                                    <li>✅ <strong>Secure API Key Management</strong> with environment variables and Vite</li>
                                    <li>✅ <strong>Zero Page Refresh</strong> required for dynamic content updates</li>
                                  </ul>
                                </div>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Qualitative Achievements:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>User Experience:</strong> Seamless integration eliminates context switching between LeetCode and external resources</li>
                                    <li><strong>Productivity:</strong> Instant access to solution videos reduces time spent searching for tutorials</li>
                                    <li><strong>Learning Efficiency:</strong> Per-problem notes enable better knowledge retention and review</li>
                                    <li><strong>Developer Experience:</strong> Clean, Promise-based architecture makes code maintainable and extensible</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Skills & Tools */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🛠️ Skills & Tools Applied</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Languages & Frameworks</h4>
                                  <p className="text-sm sm:text-base">JavaScript (ES6+), Chrome Extensions API, HTML5, CSS3</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Build Tools & Development</h4>
                                  <p className="text-sm sm:text-base">Vite, npm, Git, Environment Variables</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">APIs & Integration</h4>
                                  <p className="text-sm sm:text-base">YouTube Data API v3, chrome.storage API, chrome.runtime API</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Architecture & Patterns</h4>
                                  <p className="text-sm sm:text-base">Promise-based Async Architecture, Content Script Injection, Manifest V3</p>
                                </div>
                              </div>
                            </div>

                            {/* Impact */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">💡 Impact & Outcomes</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Chrome Extension Development:</strong> Deep understanding of Manifest V3, content scripts, and extension architecture</li>
                                    <li><strong>API Integration:</strong> Experience with YouTube Data API, async request handling, and error management</li>
                                    <li><strong>Async Architecture:</strong> Promise-based design for efficient API calls and data handling</li>
                                    <li><strong>Security Practices:</strong> Proper API key management and environment variable handling</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">User Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Time Savings:</strong> Instant access to solution videos eliminates manual searching</li>
                                    <li><strong>Learning Efficiency:</strong> Per-problem notes enable better knowledge retention</li>
                                    <li><strong>Seamless Experience:</strong> No context switching between LeetCode and external resources</li>
                                    <li><strong>Productivity:</strong> All problem-solving resources available in one place</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Learning & Growth</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Chrome Extension Architecture:</strong> Understanding of Manifest V3, content scripts, and extension lifecycle</li>
                                    <li><strong>API Integration:</strong> Experience with YouTube Data API, request handling, and error management</li>
                                    <li><strong>Async Programming:</strong> Promise-based architecture and async/await patterns</li>
                                    <li><strong>Browser APIs:</strong> chrome.storage for persistent data and chrome.runtime for extension communication</li>
                                    <li><strong>Build Tools:</strong> Vite configuration for extension bundling and environment variable injection</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Target Audience */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">👥 Target Audience</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Primary Users</h4>
                                  <p className="text-sm sm:text-base mb-3">
                                    <strong>Recruiters & Hiring Managers:</strong> This project demonstrates expertise in browser extension development, API integration, async programming, and user experience design. It showcases the ability to build practical tools that solve real-world problems and enhance developer productivity.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Who This Project Appeals To:</strong>
                                  </p>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>Companies seeking JavaScript developers with browser extension experience</li>
                                    <li>Organizations valuing API integration skills and async programming expertise</li>
                                    <li>Teams looking for developers who can build practical productivity tools</li>
                                    <li>Companies interested in candidates with user experience design and problem-solving skills</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Design Process */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🎨 Design Process</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Architecture Decisions</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Manifest V3:</strong> Used modern Chrome extension architecture for better security and performance</li>
                                    <li><strong>Content Script Injection:</strong> Dynamic sidebar injection ensures non-intrusive integration with LeetCode UI</li>
                                    <li><strong>Promise-Based Architecture:</strong> Async/await patterns for clean, maintainable API call handling</li>
                                    <li><strong>chrome.storage API:</strong> Persistent storage for per-problem notes without external dependencies</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Design Justifications</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Sidebar Approach:</strong> Non-intrusive design that doesn&apos;t disrupt LeetCode&apos;s existing UI</li>
                                    <li><strong>Top 3-5 Videos:</strong> Curated selection balances information without overwhelming users</li>
                                    <li><strong>Per-Problem Notes:</strong> Unique key generation based on problem URL ensures notes are problem-specific</li>
                                    <li><strong>Environment Variables:</strong> Secure API key management using Vite for build-time injection</li>
                                    <li><strong>Async Architecture:</strong> Promise-based design handles API calls efficiently without blocking UI</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Challenges & Solutions</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>API Key Security:</strong> Implemented environment variable handling with Vite to prevent key exposure in code</li>
                                    <li><strong>Content Script Timing:</strong> Ensured proper DOM ready state before injecting sidebar to avoid conflicts</li>
                                    <li><strong>Async API Calls:</strong> Promise-based architecture handles API responses and errors gracefully</li>
                                    <li><strong>Storage Management:</strong> Unique key generation ensures per-problem note isolation and persistence</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Project Highlights */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🏆 Project Highlights</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What Makes This Project Stand Out</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Practical Problem-Solving:</strong> Addresses real pain point for developers learning algorithms</li>
                                    <li><strong>Clean Architecture:</strong> Promise-based async design with proper error handling</li>
                                    <li><strong>User-Centric Design:</strong> Seamless integration that enhances rather than disrupts the learning experience</li>
                                    <li><strong>Technical Excellence:</strong> Manifest V3 compliance, secure API key management, and efficient storage</li>
                                    <li><strong>Extensibility:</strong> Modular design allows easy addition of new features (e.g., more video sources, note templates)</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* DesignCraft Journey */}
                    {activeProjectJourney === "designcraft" && (
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                          <div className="space-y-6 text-sm sm:text-base leading-relaxed font-light text-gray-700 dark:text-white/70">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">🚀 Project Journey: DesignCraft</h2>
                              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-600 dark:text-white/60 mb-6">
                                A comprehensive overview of my project development journey, showcasing the process, impact, and technical excellence behind building a structured learning curriculum for mastering Low-Level Design and Object-Oriented Programming.
                              </blockquote>
                            </div>

                            {/* STAR Format */}
                            <div className="pt-4">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">📖 The Journey: STAR Format</h3>
                              
                              {/* Situation */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Situation</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Context:</strong> Students and developers often struggle to master Low-Level Design (LLD) and Object-Oriented Programming concepts due to fragmented learning resources and lack of structured, progressive curriculum. There was a need for a comprehensive, hands-on learning project that systematically teaches OOP principles, SOLID design principles, and design patterns with real-world examples and practical exercises.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">The challenge was to build a system that:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Provides a structured, progressive curriculum from fundamentals to advanced concepts</li>
                                  <li>Includes 50+ live code examples demonstrating OOP, SOLID principles, and design patterns</li>
                                  <li>Offers comprehensive documentation with notes, PDFs, and assignments</li>
                                  <li>Delivers practical, real-world examples that students can run and modify</li>
                                  <li>Scales to support 500+ students with consistent learning outcomes</li>
                                  <li>Maintains high completion rates through engaging, hands-on exercises</li>
                                </ul>
                              </div>

                              {/* Task */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Task</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Objective:</strong> Develop a comprehensive, day-by-day learning curriculum for mastering Low-Level Design and Object-Oriented Programming, including 50+ live code examples, detailed documentation, UML diagrams, JUnit tests, and practical assignments that drive 90%+ completion rates among senior year undergraduate students.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">Key requirements:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Create a 10-day progressive curriculum covering OOP fundamentals to design patterns</li>
                                  <li>Implement 50+ live code examples with clear, practical demonstrations</li>
                                  <li>Develop comprehensive documentation (Markdown notes, PDF lecture notes, assignments)</li>
                                  <li>Design UML diagrams for visual understanding of class relationships</li>
                                  <li>Write JUnit tests for all examples to ensure code quality and correctness</li>
                                  <li>Create 15+ real-world assignments that reinforce learning</li>
                                  <li>Structure the project for easy navigation and progressive learning</li>
                                </ul>
                              </div>

                              {/* Action */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Action</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Approach:</strong> Designed and developed a structured, progressive learning curriculum with hands-on examples, comprehensive documentation, and practical assignments, organized in a day-by-day format that systematically builds understanding from fundamentals to advanced design patterns.
                                </p>
                                
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Architecture & Design:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>Language & Framework:</strong> Java 23 with Maven for project management</li>
                                    <li><strong>Testing Framework:</strong> JUnit 5 (Jupiter) for unit testing</li>
                                    <li><strong>Code Quality:</strong> Lombok for reducing boilerplate, clean code principles</li>
                                    <li><strong>Documentation:</strong> Markdown notes, PDF lecture notes, UML diagrams</li>
                                    <li><strong>Project Structure:</strong> Day-by-day organization with code, notes, and assignments</li>
                                    <li><strong>Learning Path:</strong> Progressive curriculum from OOP basics to design patterns</li>
                                  </ul>
                                </div>

                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Key Implementation Steps:</strong>
                                  <div className="space-y-4 mt-4 pl-4 border-l-2 border-gray-200 dark:border-white/20">
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">1. Curriculum Design</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Designed 10-day progressive curriculum starting with OOP fundamentals</li>
                                        <li>• Created learning path from basics (classes, objects) to advanced (design patterns)</li>
                                        <li>• Structured each day with clear learning objectives and outcomes</li>
                                        <li>• Ensured each day builds upon previous concepts for cumulative learning</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">2. Code Examples & Implementation</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented 50+ live code examples across 10 days of curriculum</li>
                                        <li>• Created practical examples (BankAccount, Student, Bird, PasswordEncoder, etc.)</li>
                                        <li>• Designed examples demonstrating OOP principles, SOLID principles, and design patterns</li>
                                        <li>• Ensured all code is runnable with Main.java files for each day</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">3. Documentation & Learning Materials</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created comprehensive Markdown notes for each day (DayXXFullFledgeNotes.md)</li>
                                        <li>• Developed PDF lecture notes (DayXXClassNotes.pdf) for visual learning</li>
                                        <li>• Added optional reading materials (optionalToRead.md) for deeper understanding</li>
                                        <li>• Documented key concepts, examples, and learning outcomes</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">4. UML Diagrams & Visual Learning</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created UML diagrams for class relationships and design patterns</li>
                                        <li>• Designed visual representations of OOP concepts and SOLID principles</li>
                                        <li>• Included diagrams in PDF notes for better understanding</li>
                                        <li>• Visualized design patterns (Singleton, Builder, Factory, Prototype/Registry)</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">5. Testing & Quality Assurance</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Wrote JUnit tests for all code examples to ensure correctness</li>
                                        <li>• Implemented unit tests for each day&apos;s concepts (BankAccountTest, etc.)</li>
                                        <li>• Created test reports using Maven Surefire for quality assurance</li>
                                        <li>• Ensured all examples are testable and maintainable</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">6. Assignments & Practice Problems</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created 15+ real-world assignments across the curriculum</li>
                                        <li>• Designed practice problems that reinforce daily learning</li>
                                        <li>• Ensured assignments are practical and applicable to real-world scenarios</li>
                                        <li>• Structured assignments to build confidence and mastery</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">7. Project Organization & Structure</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Organized project with day-by-day structure (day01 through day10)</li>
                                        <li>• Created consistent folder structure (code/, notes/, assignments/) for each day</li>
                                        <li>• Built common utilities package for shared code</li>
                                        <li>• Configured Maven for easy compilation and testing</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Result */}
                              <div className="space-y-4">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Result</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Outcome:</strong> Successfully delivered a comprehensive, production-ready learning curriculum that has been used by 500+ students, achieving 90%+ completion rates through engaging, hands-on examples and structured learning materials.
                                </p>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Quantifiable Results:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>✅ <strong>500+ Students</strong> have used the curriculum for learning LLD and OOP</li>
                                    <li>✅ <strong>90%+ Completion Rate</strong> among senior year undergraduate students</li>
                                    <li>✅ <strong>50+ Live Code Examples</strong> demonstrating OOP, SOLID, and design patterns</li>
                                    <li>✅ <strong>10-Day Progressive Curriculum</strong> from fundamentals to advanced concepts</li>
                                    <li>✅ <strong>15+ Real-World Assignments</strong> driving practical application</li>
                                    <li>✅ <strong>Comprehensive Documentation</strong> (Markdown notes, PDFs, UML diagrams)</li>
                                    <li>✅ <strong>JUnit Tests</strong> ensuring code quality and correctness</li>
                                  </ul>
                                </div>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Qualitative Achievements:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>Educational Impact:</strong> Structured learning path helps students master LLD systematically</li>
                                    <li><strong>Learning Efficiency:</strong> Progressive curriculum reduces learning curve and improves retention</li>
                                    <li><strong>Practical Application:</strong> Real-world examples enable students to apply concepts immediately</li>
                                    <li><strong>Code Quality:</strong> JUnit tests and clean code principles ensure maintainable examples</li>
                                    <li><strong>Scalability:</strong> Well-organized structure supports large-scale learning deployment</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Skills & Tools */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🛠️ Skills & Tools Applied</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Languages & Frameworks</h4>
                                  <p className="text-sm sm:text-base">Java 23, Object-Oriented Programming, Design Patterns, SOLID Principles</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Build Tools & Development</h4>
                                  <p className="text-sm sm:text-base">Apache Maven, JUnit 5, Lombok, Git, IDE (IntelliJ IDEA)</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Design Patterns</h4>
                                  <p className="text-sm sm:text-base">Singleton, Builder, Factory, Prototype/Registry, Strategy</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Documentation & Learning</h4>
                                  <p className="text-sm sm:text-base">Markdown, PDF, UML Diagrams, JUnit Tests, Maven</p>
                                </div>
                              </div>
                            </div>

                            {/* Curriculum Overview */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">📚 Learning Curriculum</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Day 1-4: OOP Fundamentals</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Day 1:</strong> Introduction to OOP (Classes, Objects, Encapsulation) - BankAccount example</li>
                                    <li><strong>Day 2:</strong> Access Modifiers (public, private, protected, package-private) - Student example</li>
                                    <li><strong>Day 3:</strong> Polymorphism (Method overriding, overloading, runtime polymorphism) - User/Student/Mentor hierarchy</li>
                                    <li><strong>Day 4:</strong> Abstraction (Abstract classes, Interfaces) - PasswordEncoder interface with implementations</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Day 5-6: SOLID Principles</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Day 5:</strong> Single Responsibility Principle (SRP) & Open/Closed Principle (OCP) - Bird class evolution</li>
                                    <li><strong>Day 6:</strong> Liskov Substitution Principle (LSP) - Bird hierarchy with FlyableBird/NonFlyableBird and Strategy pattern</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Day 7-10: Design Patterns</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Day 7:</strong> Singleton Pattern - CollectionPool with thread-safe implementation</li>
                                    <li><strong>Day 8:</strong> Builder Pattern - Student and Database builders with fluent interfaces</li>
                                    <li><strong>Day 9:</strong> Prototype & Registry Pattern - BackgroundRegistry with cloning capabilities</li>
                                    <li><strong>Day 10:</strong> Factory Pattern - Simple, Method, and Abstract Factory implementations</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Impact */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">💡 Impact & Outcomes</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Educational Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Structured Learning:</strong> Progressive curriculum reduces learning curve and improves comprehension</li>
                                    <li><strong>Hands-On Experience:</strong> 50+ live code examples enable practical learning and experimentation</li>
                                    <li><strong>High Completion Rates:</strong> 90%+ completion rate demonstrates engagement and effectiveness</li>
                                    <li><strong>Scalable Education:</strong> Well-organized structure supports large-scale deployment (500+ students)</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Code Quality:</strong> JUnit tests and clean code principles ensure maintainable, correct examples</li>
                                    <li><strong>Documentation:</strong> Comprehensive notes, PDFs, and UML diagrams enhance understanding</li>
                                    <li><strong>Best Practices:</strong> SOLID principles and design patterns demonstrated through practical examples</li>
                                    <li><strong>Project Structure:</strong> Well-organized day-by-day structure enables easy navigation and learning</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Learning & Growth</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Teaching Experience:</strong> Designed and delivered curriculum for 500+ students</li>
                                    <li><strong>Curriculum Design:</strong> Created structured learning path from fundamentals to advanced concepts</li>
                                    <li><strong>Technical Communication:</strong> Developed comprehensive documentation and learning materials</li>
                                    <li><strong>Software Engineering:</strong> Applied best practices (SOLID, design patterns, testing) in educational context</li>
                                    <li><strong>Project Management:</strong> Organized complex learning curriculum with clear structure and deliverables</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Target Audience */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">👥 Target Audience</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Primary Users</h4>
                                  <p className="text-sm sm:text-base mb-3">
                                    <strong>Recruiters & Hiring Managers:</strong> This project demonstrates expertise in software engineering education, curriculum design, and technical communication. It showcases the ability to create structured learning resources, teach complex concepts effectively, and scale educational content to support large numbers of students with high completion rates.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Who This Project Appeals To:</strong>
                                  </p>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>Companies seeking Java developers with strong OOP and design pattern knowledge</li>
                                    <li>Organizations valuing software engineering education and curriculum development</li>
                                    <li>Teams looking for developers who can teach, document, and communicate technical concepts</li>
                                    <li>Companies interested in candidates with experience in educational technology and learning design</li>
                                    <li>Organizations seeking developers who understand best practices (SOLID, design patterns) and can teach them</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Design Process */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🎨 Design Process</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Curriculum Design Decisions</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Progressive Learning:</strong> Day-by-day structure ensures concepts build upon each other systematically</li>
                                    <li><strong>Hands-On Approach:</strong> 50+ live code examples enable practical learning and experimentation</li>
                                    <li><strong>Comprehensive Documentation:</strong> Multiple formats (Markdown, PDF, UML) cater to different learning styles</li>
                                    <li><strong>Real-World Examples:</strong> Practical examples (BankAccount, Student, Bird) make concepts relatable</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Design Justifications</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Day-by-Day Structure:</strong> Breaks complex topics into manageable, daily learning chunks</li>
                                    <li><strong>Code, Notes, Assignments:</strong> Three-tier structure provides examples, documentation, and practice</li>
                                    <li><strong>JUnit Testing:</strong> Ensures code quality and correctness while teaching testing practices</li>
                                    <li><strong>Progressive Complexity:</strong> Starts with OOP basics, progresses through SOLID, ends with design patterns</li>
                                    <li><strong>Maven Configuration:</strong> Professional build tool setup teaches industry-standard practices</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Challenges & Solutions</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Curriculum Balance:</strong> Balanced theory with practice through examples and assignments</li>
                                    <li><strong>Scalability:</strong> Well-organized structure supports large-scale deployment (500+ students)</li>
                                    <li><strong>Code Quality:</strong> JUnit tests and clean code principles ensure maintainable examples</li>
                                    <li><strong>Learning Engagement:</strong> Practical assignments and real-world examples drive 90%+ completion rates</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Project Highlights */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🏆 Project Highlights</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What Makes This Project Stand Out</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Educational Excellence:</strong> Comprehensive curriculum with 90%+ completion rates demonstrates effective teaching</li>
                                    <li><strong>Technical Depth:</strong> 50+ live code examples covering OOP, SOLID, and design patterns</li>
                                    <li><strong>Production Quality:</strong> JUnit tests, clean code, and professional documentation</li>
                                    <li><strong>Scalability:</strong> Well-organized structure supports 500+ students with consistent outcomes</li>
                                    <li><strong>Practical Application:</strong> Real-world examples and assignments enable immediate application</li>
                                    <li><strong>Progressive Learning:</strong> Day-by-day structure systematically builds understanding</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* RecipeHub Journey */}
                    {activeProjectJourney === "recipehub" && (
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-white/10">
                          <div className="space-y-6 text-sm sm:text-base leading-relaxed font-light text-gray-700 dark:text-white/70">
                            <div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">🚀 Project Journey: RecipeHub</h2>
                              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 italic text-gray-600 dark:text-white/60 mb-6">
                                A comprehensive overview of my project development journey, showcasing the process, impact, and technical excellence behind building a full-stack MERN web application for browsing, searching, and saving favorite recipes.
                              </blockquote>
                            </div>

                            {/* STAR Format */}
                            <div className="pt-4">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">📖 The Journey: STAR Format</h3>
                              
                              {/* Situation */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Situation</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Context:</strong> Users need a centralized platform to browse, search, and save their favorite recipes. Existing solutions often lack personalization, authentication, and a seamless user experience. There was a need for a full-stack web application that combines recipe discovery, user authentication, content management, and personalized recipe feeds in a single, intuitive platform.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">The challenge was to build a system that:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Provides an intuitive interface for browsing and searching recipes</li>
                                  <li>Implements secure user authentication and authorization</li>
                                  <li>Enables users to save and manage their favorite recipes</li>
                                  <li>Offers personalized recipe feeds based on user preferences</li>
                                  <li>Supports content editing and recipe management</li>
                                  <li>Delivers a responsive, modern user experience across devices</li>
                                  <li>Handles large-scale data efficiently with MongoDB</li>
                                </ul>
                              </div>

                              {/* Task */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Task</h4>
                                <p className="text-sm sm:text-base">
                                  <strong className="font-medium text-gray-900 dark:text-white">Objective:</strong> Develop a full-stack MERN web application that allows users to browse, search, and save their favorite recipes, with integrated authentication, content editing, and personalized recipe feeds to elevate user retention and engagement.
                                </p>
                                <p className="text-sm sm:text-base">
                                  <em className="text-gray-600 dark:text-white/60">Key requirements:</em>
                                </p>
                                <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                  <li>Build a modern React frontend with TypeScript for type safety</li>
                                  <li>Create a robust Node.js/Express backend with RESTful API architecture</li>
                                  <li>Implement MongoDB database for recipe storage and user management</li>
                                  <li>Develop secure authentication system with JWT tokens</li>
                                  <li>Integrate Redux for state management and data flow</li>
                                  <li>Design responsive UI with modern design principles</li>
                                  <li>Implement search functionality and recipe filtering</li>
                                  <li>Create personalized recipe feeds based on user preferences</li>
                                </ul>
                              </div>

                              {/* Action */}
                              <div className="space-y-4 mb-6">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Action</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Approach:</strong> Implemented a full-stack MERN application with TypeScript for type safety, Redux for state management, RESTful API architecture, and MongoDB for data persistence, creating a scalable, maintainable solution with modern development practices.
                                </p>
                                
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Architecture & Design:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>Frontend:</strong> React with TypeScript, Redux for state management, Create React App</li>
                                    <li><strong>Backend:</strong> Node.js with Express.js, TypeScript for type safety</li>
                                    <li><strong>Database:</strong> MongoDB for document storage with Mongoose ODM</li>
                                    <li><strong>API:</strong> RESTful API architecture with proper error handling</li>
                                    <li><strong>Authentication:</strong> JWT-based authentication with secure token management</li>
                                    <li><strong>State Management:</strong> Redux for centralized state and data flow</li>
                                  </ul>
                                </div>

                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Key Implementation Steps:</strong>
                                  <div className="space-y-4 mt-4 pl-4 border-l-2 border-gray-200 dark:border-white/20">
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">1. Frontend Development</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Built React application with TypeScript for type safety and better developer experience</li>
                                        <li>• Implemented Redux for centralized state management and data flow</li>
                                        <li>• Created responsive UI components with modern design principles</li>
                                        <li>• Developed recipe browsing, search, and filtering interfaces</li>
                                        <li>• Built user authentication UI with login and registration forms</li>
                                        <li>• Designed personalized recipe feed component with user preferences</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">2. Backend API Development</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Created Express.js server with TypeScript for type-safe backend development</li>
                                        <li>• Implemented RESTful API endpoints for recipes, users, and authentication</li>
                                        <li>• Built secure authentication middleware with JWT token validation</li>
                                        <li>• Developed recipe CRUD operations with proper error handling</li>
                                        <li>• Created search and filtering endpoints with MongoDB query optimization</li>
                                        <li>• Implemented user profile management and recipe saving functionality</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">3. Database Design & Integration</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Designed MongoDB schema for recipes, users, and saved recipes</li>
                                        <li>• Implemented Mongoose ODM for database operations and validation</li>
                                        <li>• Created indexes for efficient recipe search and filtering</li>
                                        <li>• Built user-recipe relationships for saved recipes and favorites</li>
                                        <li>• Implemented data validation and error handling at database level</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">4. Authentication & Authorization</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented JWT-based authentication with secure token generation</li>
                                        <li>• Created user registration and login endpoints with password hashing</li>
                                        <li>• Built authentication middleware for protected routes</li>
                                        <li>• Implemented token refresh mechanism for session management</li>
                                        <li>• Added user authorization for recipe editing and management</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">5. State Management & Data Flow</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Integrated Redux for centralized state management</li>
                                        <li>• Created Redux actions and reducers for recipes, users, and authentication</li>
                                        <li>• Implemented async actions with Redux Thunk for API calls</li>
                                        <li>• Built state persistence for user sessions and preferences</li>
                                        <li>• Designed efficient data flow from API to UI components</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">6. Search & Personalization</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Implemented recipe search functionality with MongoDB text search</li>
                                        <li>• Created filtering options (category, cuisine, difficulty, time)</li>
                                        <li>• Built personalized recipe feed based on user preferences and saved recipes</li>
                                        <li>• Developed recommendation system using user interaction data</li>
                                        <li>• Optimized search queries for performance and scalability</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900 dark:text-white">7. Content Management</strong>
                                      <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                        <li>• Built recipe creation and editing interface with rich text support</li>
                                        <li>• Implemented image upload and management for recipe photos</li>
                                        <li>• Created recipe saving and favorite functionality</li>
                                        <li>• Developed user recipe collections and organization features</li>
                                        <li>• Added content validation and moderation capabilities</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Result */}
                              <div className="space-y-4">
                                <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white mb-3">Result</h4>
                                <p className="text-sm sm:text-base mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Outcome:</strong> Successfully delivered a production-ready, full-stack MERN web application that enables users to browse, search, and save their favorite recipes with integrated authentication, personalized feeds, and content management, driving user retention and engagement.
                                </p>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Quantifiable Results:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>✅ <strong>Full-Stack MERN Application</strong> with React, Node.js, Express, and MongoDB</li>
                                    <li>✅ <strong>TypeScript Integration</strong> for type safety across frontend and backend</li>
                                    <li>✅ <strong>Redux State Management</strong> for efficient data flow and state handling</li>
                                    <li>✅ <strong>Secure Authentication</strong> with JWT tokens and password hashing</li>
                                    <li>✅ <strong>RESTful API Architecture</strong> with proper error handling and validation</li>
                                    <li>✅ <strong>Personalized Recipe Feeds</strong> based on user preferences and saved recipes</li>
                                    <li>✅ <strong>Search & Filtering</strong> functionality with MongoDB text search</li>
                                    <li>✅ <strong>Recipe Management</strong> with CRUD operations and content editing</li>
                                  </ul>
                                </div>
                                <div className="mb-4">
                                  <strong className="font-medium text-gray-900 dark:text-white">Qualitative Achievements:</strong>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li><strong>User Experience:</strong> Intuitive interface with responsive design across devices</li>
                                    <li><strong>Code Quality:</strong> TypeScript ensures type safety and reduces runtime errors</li>
                                    <li><strong>Scalability:</strong> MongoDB and RESTful API architecture support growing user base</li>
                                    <li><strong>Maintainability:</strong> Redux and modular architecture enable easy feature additions</li>
                                    <li><strong>Security:</strong> JWT authentication and password hashing ensure user data protection</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Skills & Tools */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🛠️ Skills & Tools Applied</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h4>
                                  <p className="text-sm sm:text-base">React, TypeScript, Redux, Create React App, HTML5, CSS3</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h4>
                                  <p className="text-sm sm:text-base">Node.js, Express.js, TypeScript, RESTful APIs</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Database</h4>
                                  <p className="text-sm sm:text-base">MongoDB, Mongoose ODM, Indexing, Query Optimization</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Authentication & Security</h4>
                                  <p className="text-sm sm:text-base">JWT Tokens, Password Hashing, Secure Authentication</p>
                                </div>
                              </div>
                            </div>

                            {/* Impact */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">💡 Impact & Outcomes</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Full-Stack Development:</strong> Demonstrated expertise in MERN stack with TypeScript integration</li>
                                    <li><strong>State Management:</strong> Redux implementation for efficient data flow and centralized state</li>
                                    <li><strong>API Design:</strong> RESTful API architecture with proper error handling and validation</li>
                                    <li><strong>Database Design:</strong> MongoDB schema design with indexes for optimized queries</li>
                                    <li><strong>Type Safety:</strong> TypeScript across frontend and backend reduces bugs and improves maintainability</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">User Impact</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Recipe Discovery:</strong> Easy browsing and searching of recipes with advanced filtering</li>
                                    <li><strong>Personalization:</strong> Personalized recipe feeds based on user preferences and saved recipes</li>
                                    <li><strong>User Engagement:</strong> Recipe saving and favorite functionality drives user retention</li>
                                    <li><strong>Content Management:</strong> Recipe creation and editing capabilities enable user-generated content</li>
                                    <li><strong>Seamless Experience:</strong> Integrated authentication and responsive design across devices</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Learning & Growth</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>MERN Stack Mastery:</strong> Comprehensive understanding of React, Node.js, Express, and MongoDB</li>
                                    <li><strong>TypeScript Expertise:</strong> Type safety implementation across full-stack development</li>
                                    <li><strong>State Management:</strong> Redux for complex state handling and data flow</li>
                                    <li><strong>API Development:</strong> RESTful API design with authentication and error handling</li>
                                    <li><strong>Database Design:</strong> MongoDB schema design, indexing, and query optimization</li>
                                    <li><strong>Authentication:</strong> JWT-based authentication with secure token management</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Target Audience */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">👥 Target Audience</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Primary Users</h4>
                                  <p className="text-sm sm:text-base mb-3">
                                    <strong>Recruiters & Hiring Managers:</strong> This project demonstrates expertise in full-stack MERN development, TypeScript integration, Redux state management, and RESTful API design. It showcases the ability to build production-ready applications with authentication, data persistence, and personalized user experiences.
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Who This Project Appeals To:</strong>
                                  </p>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                    <li>Companies seeking full-stack developers with MERN stack expertise</li>
                                    <li>Organizations valuing TypeScript integration for type safety and maintainability</li>
                                    <li>Teams looking for developers who can build scalable, production-ready applications</li>
                                    <li>Companies interested in candidates with experience in state management and API design</li>
                                    <li>Organizations seeking developers who understand authentication, security, and user experience</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Design Process */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🎨 Design Process</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Architecture Decisions</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>MERN Stack:</strong> Chose React, Node.js, Express, and MongoDB for full-stack development</li>
                                    <li><strong>TypeScript:</strong> Integrated TypeScript for type safety across frontend and backend</li>
                                    <li><strong>Redux:</strong> Used Redux for centralized state management and predictable data flow</li>
                                    <li><strong>RESTful API:</strong> Designed RESTful API architecture for clear separation of concerns</li>
                                    <li><strong>MongoDB:</strong> Selected MongoDB for flexible document storage and scalability</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Design Justifications</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>TypeScript Integration:</strong> Type safety reduces bugs and improves code maintainability</li>
                                    <li><strong>Redux State Management:</strong> Centralized state enables efficient data flow and debugging</li>
                                    <li><strong>RESTful API:</strong> Standard API design facilitates frontend-backend communication</li>
                                    <li><strong>MongoDB Schema:</strong> Flexible document structure supports recipe variations and user preferences</li>
                                    <li><strong>JWT Authentication:</strong> Stateless authentication enables scalable user sessions</li>
                                    <li><strong>Personalized Feeds:</strong> User preference-based recommendations drive engagement</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Challenges & Solutions</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>State Management:</strong> Implemented Redux for complex state handling and data flow</li>
                                    <li><strong>Search Performance:</strong> Created MongoDB indexes and optimized queries for fast search</li>
                                    <li><strong>Authentication:</strong> JWT token management with secure storage and refresh mechanisms</li>
                                    <li><strong>Data Persistence:</strong> MongoDB schema design with proper relationships and indexing</li>
                                    <li><strong>Type Safety:</strong> TypeScript integration across full-stack for compile-time error detection</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Project Highlights */}
                            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🏆 Project Highlights</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What Makes This Project Stand Out</h4>
                                  <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                                    <li><strong>Full-Stack Excellence:</strong> Complete MERN stack implementation with TypeScript integration</li>
                                    <li><strong>Production-Ready:</strong> Secure authentication, error handling, and scalable architecture</li>
                                    <li><strong>User-Centric Design:</strong> Personalized recipe feeds and intuitive browsing experience</li>
                                    <li><strong>Technical Depth:</strong> Redux state management, RESTful API design, and MongoDB optimization</li>
                                    <li><strong>Type Safety:</strong> TypeScript across frontend and backend ensures code quality</li>
                                    <li><strong>Scalability:</strong> MongoDB and RESTful API architecture support growing user base</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Placeholder for other project journeys */}
                    {activeProjectJourney !== "google-slides" && activeProjectJourney !== "image-processor" && activeProjectJourney !== "leetcode" && activeProjectJourney !== "designcraft" && activeProjectJourney !== "recipehub" && (
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-white/10">
                        <h4 className="text-lg sm:text-xl font-light text-gray-900 dark:text-white/90 mb-4">Project Journey</h4>
                        <p className="text-gray-700 dark:text-white/80 text-sm sm:text-base leading-relaxed font-normal mb-4">
                          This section will showcase your motivation, thought process, challenges faced, and key decisions made during the development of this project. You can add your detailed journey here, including:
                        </p>
                        <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base text-gray-700 dark:text-white/80">
                          <li>What inspired you to build this project?</li>
                          <li>What problems were you trying to solve?</li>
                          <li>Key technical decisions and why you made them</li>
                          <li>Challenges faced and how you overcame them</li>
                          <li>What you learned from this project</li>
                          <li>Impact and results achieved</li>
                        </ul>
                      </div>
                    )}
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
                              href="https://pepperuni.onrender.com/"
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
                              <strong className="font-medium text-gray-900 dark:text-white">Context:</strong> Students and job seekers needed a way to create personalized, job-specific resumes that stand out to employers. Existing solutions lacked AI-powered tailoring capabilities, making it time-consuming to manually customize resumes for each job application. The challenge was to build a platform that leverages AI technology (OpenAI GPT-4) to automatically analyze job descriptions and tailor resumes to match specific role requirements, significantly improving interview chances.
                            </p>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <em className="text-gray-600 dark:text-white/60">The challenge was to build a system that:</em>
                            </p>
                            <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                              <li>Seamlessly integrates with OpenAI GPT-4 Turbo for AI-powered resume tailoring</li>
                              <li>Provides PDF file upload with automatic text extraction</li>
                              <li>Offers real-time resume scoring and analysis</li>
                              <li>Manages user authentication and resume history (up to 5 resumes per user)</li>
                              <li>Ensures secure data management with JWT-based authentication</li>
                              <li>Delivers a responsive, modern UI/UX with dark/light theme support</li>
                            </ul>
                          </div>

                          {/* Task */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Task</h4>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <strong className="font-medium text-gray-900 dark:text-white">Objective:</strong> Develop a comprehensive full-stack MERN web application that helps students and job seekers create personalized, job-specific resumes using AI technology. The platform should analyze job descriptions, automatically tailor resumes, provide scoring feedback, and manage resume history—all while ensuring a secure, user-friendly experience.
                            </p>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                              <em className="text-gray-600 dark:text-white/60">Key requirements:</em>
                            </p>
                            <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                              <li>Build a modern React frontend with responsive design and theme support</li>
                              <li>Create a robust Node.js/Express backend with MongoDB for data persistence</li>
                              <li>Implement OpenAI GPT-4 Turbo integration for AI-powered resume tailoring</li>
                              <li>Develop secure authentication system with JWT tokens and password hashing</li>
                              <li>Design resume upload and processing with PDF text extraction</li>
                              <li>Implement resume scoring system (0-100) with visual feedback</li>
                              <li>Create resume management system (save up to 5 resumes per user)</li>
                              <li>Build user profile management with contact details</li>
                            </ul>
                          </div>

                          {/* Action */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Action</h4>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                              <strong className="font-medium text-gray-900 dark:text-white">Approach:</strong> Implemented a full-stack MERN application with OpenAI GPT-4 Turbo integration, MongoDB for data persistence, JWT authentication, and a modern React frontend with responsive design and theme management.
                            </p>
                            
                            <div className="mb-4">
                              <strong className="font-medium text-gray-900 dark:text-white">Architecture & Design:</strong>
                              <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                <li><strong>Frontend:</strong> React 18.3.1 with React Router, Axios, Tailwind CSS, Lucide React icons</li>
                                <li><strong>Backend:</strong> Node.js with Express.js, MongoDB with Mongoose ODM</li>
                                <li><strong>Database:</strong> MongoDB Atlas for user data and resume storage</li>
                                <li><strong>AI Integration:</strong> OpenAI GPT-4 Turbo API for resume tailoring and analysis</li>
                                <li><strong>Authentication:</strong> JWT-based authentication with bcrypt password hashing</li>
                                <li><strong>File Processing:</strong> Multer for file uploads, pdf-parse for text extraction</li>
                                <li><strong>Deployment:</strong> Render for backend and frontend hosting</li>
                              </ul>
                            </div>

                            <div className="mb-4">
                              <strong className="font-medium text-gray-900 dark:text-white">Key Implementation Steps:</strong>
                              <div className="space-y-4 mt-4 pl-4 border-l-2 border-gray-200 dark:border-white/20">
                                <div>
                                  <strong className="text-gray-900 dark:text-white">1. Frontend Development</strong>
                                  <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                    <li>• Built React application with React Router for client-side routing</li>
                                    <li>• Implemented Axios for HTTP client with JWT token management</li>
                                    <li>• Created responsive UI components with Tailwind CSS</li>
                                    <li>• Developed dark/light theme toggle with floating draggable button</li>
                                    <li>• Built user authentication UI (Login, SignUp) with form validation</li>
                                    <li>• Designed resume upload interface with file validation</li>
                                    <li>• Created resume history and profile management components</li>
                                  </ul>
                                </div>
                                <div>
                                  <strong className="text-gray-900 dark:text-white">2. Backend API Development</strong>
                                  <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                    <li>• Created Express.js server with modular router architecture</li>
                                    <li>• Implemented RESTful API endpoints for auth, resumes, and profiles</li>
                                    <li>• Built secure authentication middleware with JWT token validation</li>
                                    <li>• Developed resume upload endpoint with Multer file handling</li>
                                    <li>• Created PDF text extraction service using pdf-parse</li>
                                    <li>• Implemented OpenAI GPT-4 Turbo integration for resume tailoring</li>
                                    <li>• Built resume scoring algorithm based on job description alignment</li>
                                  </ul>
                                </div>
                                <div>
                                  <strong className="text-gray-900 dark:text-white">3. Database Design & Integration</strong>
                                  <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                    <li>• Designed MongoDB schema for users and resumes</li>
                                    <li>• Implemented Mongoose ODM for database operations and validation</li>
                                    <li>• Created indexes for efficient user and resume queries</li>
                                    <li>• Built user-resume relationships with resume history management</li>
                                    <li>• Implemented data validation and error handling at database level</li>
                                    <li>• Created resume limit enforcement (max 5 resumes per user)</li>
                                  </ul>
                                </div>
                                <div>
                                  <strong className="text-gray-900 dark:text-white">4. AI Integration & Resume Processing</strong>
                                  <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                    <li>• Integrated OpenAI GPT-4 Turbo API for intelligent resume tailoring</li>
                                    <li>• Implemented job description analysis and keyword extraction</li>
                                    <li>• Built resume customization prompts for GPT-4 Turbo</li>
                                    <li>• Created resume scoring algorithm (0-100) based on alignment</li>
                                    <li>• Developed text extraction from PDF files using pdf-parse</li>
                                    <li>• Implemented file validation (PDF, DOC, DOCX, max 50MB)</li>
                                  </ul>
                                </div>
                                <div>
                                  <strong className="text-gray-900 dark:text-white">5. Authentication & Security</strong>
                                  <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                    <li>• Implemented JWT-based authentication with secure token generation</li>
                                    <li>• Created user registration and login endpoints with password hashing (bcrypt)</li>
                                    <li>• Built authentication middleware for protected routes</li>
                                    <li>• Implemented session management with token expiration</li>
                                    <li>• Added user authorization for resume and profile management</li>
                                  </ul>
                                </div>
                                <div>
                                  <strong className="text-gray-900 dark:text-white">6. User Experience & UI/UX</strong>
                                  <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                    <li>• Built responsive design for mobile, tablet, and desktop</li>
                                    <li>• Implemented dark/light theme toggle with persistent preferences</li>
                                    <li>• Created intuitive navigation with sidebar menu</li>
                                    <li>• Developed loading states and error handling throughout</li>
                                    <li>• Built visual resume scoring with color-coded feedback</li>
                                    <li>• Designed smooth animations and transitions</li>
                                  </ul>
                                </div>
                                <div>
                                  <strong className="text-gray-900 dark:text-white">7. Deployment & Infrastructure</strong>
                                  <ul className="space-y-1 pl-4 mt-2 text-sm sm:text-base">
                                    <li>• Configured Render deployment for backend and frontend</li>
                                    <li>• Set up MongoDB Atlas cloud database</li>
                                    <li>• Implemented environment variable management</li>
                                    <li>• Created production build configuration</li>
                                    <li>• Set up CORS configuration for production</li>
                                    <li>• Implemented error handling and logging</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Result */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Result</h4>
                            <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                              <strong className="font-medium text-gray-900 dark:text-white">Outcome:</strong> Successfully delivered a production-ready, full-stack MERN web application that enables students and job seekers to create personalized, job-specific resumes using AI technology, significantly improving their chances of landing interviews.
                            </p>
                            <div className="mb-4">
                              <strong className="font-medium text-gray-900 dark:text-white">Quantifiable Results:</strong>
                              <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                <li>✅ <strong>Full-Stack MERN Application</strong> with React, Node.js, Express, and MongoDB</li>
                                <li>✅ <strong>AI-Powered Resume Tailoring</strong> using OpenAI GPT-4 Turbo</li>
                                <li>✅ <strong>Resume Scoring System</strong> (0-100) with real-time analysis</li>
                                <li>✅ <strong>Secure Authentication</strong> with JWT tokens and password hashing</li>
                                <li>✅ <strong>Resume Management</strong> (save up to 5 resumes per user)</li>
                                <li>✅ <strong>PDF Text Extraction</strong> with support for multiple file formats</li>
                                <li>✅ <strong>Responsive Design</strong> with dark/light theme support</li>
                                <li>✅ <strong>Production Deployment</strong> on Render with MongoDB Atlas</li>
                              </ul>
                            </div>
                            <div className="mb-4">
                              <strong className="font-medium text-gray-900 dark:text-white">Qualitative Achievements:</strong>
                              <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base mt-2">
                                <li><strong>User Experience:</strong> Intuitive interface with responsive design across all devices</li>
                                <li><strong>AI Integration:</strong> Seamless OpenAI GPT-4 Turbo integration for intelligent resume tailoring</li>
                                <li><strong>Scalability:</strong> MongoDB and RESTful API architecture support growing user base</li>
                                <li><strong>Security:</strong> JWT authentication and password hashing ensure user data protection</li>
                                <li><strong>Performance:</strong> Optimized file processing and AI API calls for fast response times</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* System Architecture */}
                    <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🏗️ System Architecture</h3>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-white/10 mb-4">
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                          PepperUni follows a modular client-server architecture with clear separation between frontend, backend, and external services:
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Client Layer (React)</h4>
                            <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                              <li>React 18.3.1 with React Router for client-side routing</li>
                              <li>Axios for HTTP client with JWT token management</li>
                              <li>Tailwind CSS for responsive styling</li>
                              <li>Theme management with React Context API</li>
                              <li>Components: Login, SignUp, ResumeUpload, ResumeList, Profile, Response</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Server Layer (Node.js/Express)</h4>
                            <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                              <li>Express.js with modular router architecture</li>
                              <li>Express middleware: CORS, body parser, JWT auth, file upload (Multer)</li>
                              <li>Controllers: authController, resumeController, profileController</li>
                              <li>Services: PDF extraction service (pdf-parse)</li>
                              <li>RESTful API endpoints for authentication, resumes, and profiles</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Data Layer (MongoDB)</h4>
                            <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                              <li>MongoDB Atlas for cloud database storage</li>
                              <li>Mongoose ODM for schema definition and validation</li>
                              <li>Collections: Users (authentication, profiles), Resumes (resume data, scores, metadata)</li>
                              <li>Indexes for efficient queries on email and user_id</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">External Services</h4>
                            <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                              <li>OpenAI GPT-4 Turbo API for AI-powered resume tailoring</li>
                              <li>File Storage: Temporary file storage for uploaded resumes</li>
                              <li>Render: Backend and frontend hosting platform</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Flow */}
                    <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🔄 Data Flow</h3>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-white/10">
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                          The resume processing workflow follows a clear data flow from user upload to AI-tailored output:
                        </p>
                        <div className="space-y-4">
                          <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">1. User Uploads Resume</h4>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">User uploads PDF file with job description, job title, and company name through the React frontend.</p>
                          </div>
                          <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">2. File Validation</h4>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">Backend validates file format (PDF/DOC/DOCX) and size (max 50MB) using Multer middleware.</p>
                          </div>
                          <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">3. Text Extraction</h4>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">PDF text extraction service (pdf-parse) extracts text content from the uploaded resume file.</p>
                          </div>
                          <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">4. OpenAI API Call</h4>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">Backend sends extracted resume text and job description to OpenAI GPT-4 Turbo API for analysis, tailoring, and scoring.</p>
                          </div>
                          <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">5. Save to MongoDB</h4>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">AI-tailored resume, original text, score, and metadata are saved to MongoDB with user_id association.</p>
                          </div>
                          <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">6. Return to Client</h4>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">Backend returns tailored resume, score, and metadata to React frontend for display and download.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">👥 Target Audience</h3>
                      <p className="text-gray-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                        The primary audience consists of university students and recent graduates actively seeking internships and full-time positions. Specifically targeting:
                      </p>
                      <ul className="space-y-2 pl-5 sm:pl-6 list-disc text-sm sm:text-base">
                        <li>Students applying to multiple positions requiring tailored resumes</li>
                        <li>Career changers needing to reframe experiences for different industries</li>
                        <li>International students adapting resumes to US job market standards</li>
                        <li>Job seekers looking to improve their resume scores and interview chances</li>
                        <li>Users who want AI-powered assistance in resume customization</li>
                      </ul>
                    </div>

                    {/* Skills & Tools */}
                    <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">🛠️ Skills & Tools Applied</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Frontend</h4>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">React 18.3.1, React Router 6.28.0, Axios 1.7.7, Tailwind CSS 3.4.15, Lucide React 0.460.0</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Backend</h4>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">Node.js, Express.js 4.21.2, MongoDB 8.9.1, Mongoose 8.9.1, JWT 9.0.2, bcrypt 5.1.1</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">AI & File Processing</h4>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">OpenAI API 4.77.0 (GPT-4 Turbo), Multer 1.4.5, pdf-parse 1.1.1</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Deployment</h4>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">Render (Backend & Frontend), MongoDB Atlas, Git</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Product & Design</h4>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">Figma (UI/UX design), User research, Product strategy, Agile development</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-light text-gray-900 dark:text-white/90 mb-2">Development Tools</h4>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">ESLint, Nodemon, dotenv, Git</p>
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
                          href="https://pepperuni.onrender.com/"
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
