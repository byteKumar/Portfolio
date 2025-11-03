"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, MapPinIcon, BuildingOfficeIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../../../public/hero-image.jpeg";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import apmcImage from "../../../public/apmc.png";
import northeasternLogo from "../../../public/northeastern.png";
import galgotiasLogo from "../../../public/galgotias.jpeg";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [showWireframe, setShowWireframe] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [showRecruiterPrompt, setShowRecruiterPrompt] = useState(true);

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "leadership", label: "Leadership" },
    { id: "cv", label: "CV" },
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

  return (
    <section className="text-gray-900 dark:text-white min-h-screen bg-white dark:bg-[#121212]" id="resume">
      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Sidebar - Profile Section */}
          <div className="lg:col-span-1 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
            <div className="space-y-6">

              {/* Profile Photo */}
              <div className="w-full max-w-[200px] mx-auto lg:mx-0">
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-gray-400 dark:border-white/40 shadow-lg">
                  <Image
                    src={heroImage}
                    alt="Chaman Kumar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Name and Pronouns */}
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-1">Chaman Kumar</h2>
                <p className="text-gray-600 dark:text-white/60 text-sm font-light">He/Him</p>
              </div>

              {/* Professional Summary */}
              <div>
                <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed font-light">
                  Software Engineer with expertise in full-stack development, cloud technologies, and DevOps. Specializing in MERN stack, Java frameworks, and scalable system design.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-2.5 pt-3">
                <div className="flex items-center space-x-2.5">
                  <MapPinIcon className="w-4 h-4 text-gray-600 dark:text-white/60 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-white/70 text-sm font-light">Boston, MA, USA</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <BuildingOfficeIcon className="w-4 h-4 text-gray-600 dark:text-white/60 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-white/70 text-sm font-light">Northeastern University</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <EnvelopeIcon className="w-4 h-4 text-gray-600 dark:text-white/60 flex-shrink-0" />
                  <a
                    href="mailto:kumar.cham@northeastern.edu"
                    className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-sm font-light transition-colors"
                  >
                    Email
                  </a>
                </div>
                <div className="flex items-center space-x-2.5">
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
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white/70 hover:text-gray-600 dark:hover:text-white text-sm font-light transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-2.5">
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
                    className="text-gray-900 dark:text-white/70 hover:text-gray-600 dark:hover:text-white text-sm font-light transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Fixed Header - Title and Tabs */}
            <div className="sticky top-8 z-10 bg-white dark:bg-[#121212] pb-4 mb-8 pt-2 -mt-2">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">Chaman&#39;s Profile</h1>
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-4 md:gap-6 border-b border-gray-300 dark:border-white/10 pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 py-2 text-sm md:text-base font-light transition-all duration-300 relative ${
                      activeTab === tab.id
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white/80"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 min-h-[600px]">
              <AnimatePresence mode="wait">
                {/* Experience Section */}
                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">Work Experience</h2>
                    
                    {/* Graduate Teaching Assistant */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-1">
                          Graduate Teaching Assistant
                        </h3>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic">Northeastern University, Massachusetts | Jan 2025 - Present</p>
                      </div>
                      <ul className="space-y-2 list-none">
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Led TA team, shipped MERN Q&A platform (500+ students)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Mentored 5 teams (TDD, peer reviews, improved deployment 25%, reduced incidents 40%)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Ran labs/office hours (100+ students), taught MERN/Agile (95% project completion)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Built CI/CD (raised coverage 20%, reduced deployment errors 20%, bug cycles 10%)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="h-px bg-gray-300 dark:bg-white/10 my-8"></div>

                    {/* Software Engineer - AKQA */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-1">Software Engineer</h3>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic">AKQA, Gurgaon, India | Jul 2022 - Aug 2024</p>
                      </div>
                      <ul className="space-y-2 list-none">
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Optimized IWC website (Core Web Vitals, UX, AEM+MERN)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Stabilized releases via Jenkins CI/CD (11s to 4s page loads, lifted engagement 18%, interactions 23%)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Led accessibility/analytics (85%+ WCAG 2.1 A/AA, SKU attribution)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Led digital activations for WaW (55% reach/engagement, 500M+ online reach)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Built JUnit/Jest/Cypress tests (lifted coverage 20%, cut errors 20%, bug cycles 10%)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="h-px bg-gray-300 dark:bg-white/10 my-8"></div>

                    {/* Software Engineer Intern */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-1">Software Engineer Intern</h3>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic">Bluepi, Gurgaon, India | Nov 2021 - Feb 2022</p>
                      </div>
                      <ul className="space-y-2 list-none">
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Implemented Reddit-style Java/Spring CRUD app</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Prototyped Spring Boot/Java CRUD flows</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Added JUnit with CI/CD (lifting reliability 15%, cutting defects 20%, cycle time 10%)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Co-lead AWS redesign (right-sized EC2, tuned RDS, autoscaling, monitored CloudWatch – raised resilience, cut costs 10%)</span>
                        </li>
                      </ul>
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
                    className="space-y-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">Projects</h2>
                    
                    {/* Google Slides Generator */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2">Google Slides Generator</h3>
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
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Created full-stack slide generator, integrated Google Slides API (OAuth, DB-backed templates)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Designed theme-first system/automated layout registry</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                          <LinkButton href="https://github.com/byteKumar/google_slide_generator" icon={null}>GitHub</LinkButton>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gray-300 dark:bg-white/10 my-8"></div>

                    {/* Advance Image Processor */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2">Advance Image Processor</h3>
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
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Architected extensible image processing app (MVC), implemented 7+ core transformations</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Applied Strategy/Factory/Command patterns (cutting feature integration time by 30%)</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                          <LinkButton href="https://github.com/byteKumar/advanced_image_manipulation_and_enhancement_application" icon={null}>GitHub</LinkButton>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gray-300 dark:bg-white/10 my-8"></div>

                    {/* LeetCode Power Up */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2">LeetCode Power Up - Chrome Extension</h3>
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
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Shipped Chrome extension (injects 3-5 LeetCode solution videos)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Integrated per-problem scratchpad (chrome.storage)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Engineered Promise-based async architecture</span>
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
                {activeTab === "publications" && (
                  <motion.div
                    key="publications"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">Publications</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2">
                          Evaluation of Tracking System using Facial Recognition and Location
                        </h3>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic mb-3">IEEE Xplore | Dec 2023</p>
                        <div className="flex flex-wrap gap-4">
                          <LinkButton href="https://ieeexplore.ieee.org/document/10541414" icon={null}>Paper</LinkButton>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gray-300 dark:bg-white/10 my-6"></div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2">
                          Understanding Factors Affecting Trust and Satisfaction with Banking in India
                        </h3>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic mb-3">IEEE Xplore | Dec 2023</p>
                        <div className="flex flex-wrap gap-4">
                          <LinkButton href="https://ieeexplore.ieee.org/document/10541439" icon={null}>Paper</LinkButton>
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
                    className="space-y-10"
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">Skills</h2>
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
                        <h4 className="text-xl font-light text-white/90 mb-4">Databases/Testing</h4>
                        <p className="text-white/70 text-base leading-relaxed font-light">
                          MySQL, PostgreSQL, DynamoDB, MongoDB, Redis, JUnit, Mockito, Jest, Postman, SonarQube
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-white/90 mb-4">Cloud & DevOps</h4>
                        <p className="text-white/70 text-base leading-relaxed font-light">
                          Jenkins, Docker, Kubernetes, GCP, Azure, AWS (Lambda, EC2, S3, RDS/DynamoDB, IAM, SNS)
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-white/90 mb-4">Software Development</h4>
                        <p className="text-white/70 text-base leading-relaxed font-light">
                          Object-Oriented Design, TDD, Agile, Scrum, Retrospective, Story Planning, Sprint, Service First
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-light text-white/90 mb-4">Certifications</h4>
                        <p className="text-white/70 text-base leading-relaxed font-light">
                          AWS Cloud Practitioner, AWS Certified Developer Associate
                        </p>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xl font-light text-white/90 mb-4">Other Tools</h4>
                        <p className="text-white/70 text-base leading-relaxed font-light">
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
                    className="space-y-8"
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">Education</h2>
                    <div className="space-y-12">
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
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic mb-2">United States | Sep 2024 - Dec 2026</p>
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

                      <div className="h-px bg-gray-300 dark:bg-white/10 my-8"></div>

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
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic mb-2">India | Sep 2018 - Apr 2022</p>
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
                    className="space-y-8"
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">Leadership</h2>
                    <div className="space-y-12">
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
                            <p className="text-gray-600 dark:text-white/60 text-base font-light italic">Aspiring Product Managers Club @ Northeastern University</p>
                          </div>
                          <p className="text-gray-800 dark:text-white/80 text-lg font-light mb-4">Leader of Technical Development and Product Management</p>
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
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

                {/* Wireframe Journey Section (within Leadership) */}
                {activeTab === "leadership" && showWireframe && (
                  <motion.div
                    key="wireframe"
                    variants={sectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="space-y-12"
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
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic">From Concept to Production</p>
                      </div>
                    </div>

                    {/* STAR Format */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">The Journey: STAR Format</h3>
                        
                        <div className="space-y-6">
                          {/* Situation */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Situation</h4>
                            <p className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                              As Leader of Technical Development at the Aspiring Product Managers Club, I observed a critical challenge: students were struggling with resume optimization for job applications. Many were submitting generic resumes that didn&apos;t align with specific job requirements, resulting in low interview conversion rates. The competitive job market demanded tailored, impactful resumes that highlighted relevant skills and experiences.
                            </p>
                          </div>

                          {/* Task */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Task</h4>
                            <p className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                              My responsibility was to identify a solution that could help students create job-specific, optimized resumes efficiently. I needed to build a platform that could analyze job descriptions, extract key requirements, and guide students in tailoring their resumes to match specific roles. The solution had to be scalable, user-friendly, and provide measurable improvements in application success rates.
                            </p>
                          </div>

                          {/* Action */}
                          <div className="space-y-3">
                            <h4 className="text-xl font-light text-gray-900 dark:text-white mb-2">Action</h4>
                            <ul className="space-y-3 list-none">
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                                  <strong>Research & Ideation:</strong> Conducted user interviews with 30+ students to understand pain points in resume creation. Identified that manual resume tailoring was time-consuming and often missed key keywords.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                                  <strong>Design Process:</strong> Created comprehensive wireframes in Figma, iterating through two design drafts. First draft focused on core functionality, second draft refined UX/UI based on user feedback and accessibility principles.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                                  <strong>Development:</strong> Architected full-stack solution using React for frontend, Node.js/Express for backend, and PostgreSQL for data management. Implemented resume parsing algorithms and job description analysis using NLP techniques.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                                  <strong>Infrastructure:</strong> Deployed on AWS using Terraform for Infrastructure as Code, ensuring scalability and reliability. Integrated Cloudflare for global CDN and performance optimization.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
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
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                                  Successfully launched PepperUni as a production-ready platform at <strong>pepperuni.com</strong>, serving 500+ students at Northeastern University
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                                  Users reported an average <strong>20% improvement in resume scores</strong> and increased interview callbacks by tailoring resumes to job descriptions
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                                  Reduced resume customization time from <strong>2-3 hours to 15-20 minutes</strong> per application
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                                <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
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
                      <p className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                        The primary audience consists of university students and recent graduates actively seeking internships and full-time positions. Specifically targeting:
                      </p>
                      <ul className="space-y-2 list-none mt-4">
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Students applying to multiple positions requiring tailored resumes</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">Career changers needing to reframe experiences for different industries</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                          <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">International students adapting resumes to US job market standards</span>
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
                        <p className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                          PepperUni has become a valuable resource within our university community, helping students navigate the competitive job market more effectively. The platform has demonstrated tangible impact through:
                        </p>
                        <ul className="space-y-3 list-none">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                              <strong>Improved Application Success:</strong> Students using PepperUni reported a 35% increase in interview callbacks compared to those using generic resumes
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                              <strong>Time Efficiency:</strong> Streamlined the resume customization process, enabling students to apply to 3x more positions with quality applications
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                              <strong>Educational Value:</strong> The platform serves as a learning tool, helping students understand how to identify and highlight relevant skills for different roles
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light">
                              <strong>Community Impact:</strong> Built a tool that has become an integral part of the career development resources at Northeastern University
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Design Process */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">Design Process</h3>
                      <p className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light mb-4">
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
                    className="space-y-8"
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">CV</h2>
                    
                    {/* Recruiter Prompt - At Top */}
                    {showRecruiterPrompt && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-200 dark:border-white/10 mb-8"
                      >
                        <p className="text-gray-900 dark:text-white text-lg font-light mb-4 text-center">
                          Are you a recruiter?
                        </p>
                        <div className="flex gap-4 justify-center">
                          <button
                            onClick={() => {
                              setIsRecruiter(true);
                              setShowRecruiterPrompt(false);
                            }}
                            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-300 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => {
                              setIsRecruiter(false);
                              setShowRecruiterPrompt(false);
                            }}
                            className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 rounded-lg font-medium"
                          >
                            No
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Recruiter Message */}
                    {isRecruiter && !showRecruiterPrompt && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 mb-8"
                      >
                        <p className="text-gray-900 dark:text-white text-base leading-relaxed font-light text-center">
                          Thank you for your interest! Please reach out to{" "}
                          <a 
                            href="mailto:kumar.cham@northeastern.edu" 
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          >
                            kumar.cham@northeastern.edu
                          </a>
                          {" "}or{" "}
                          <a 
                            href="tel:+18573398868" 
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          >
                            +1 (857) 339-8868
                          </a>
                          . I&apos;m open to discussing how I can contribute to your team.
                        </p>
                      </motion.div>
                    )}

                    {/* Resume Preview Frame - Smaller */}
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
                        className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white/90 transition-all duration-300 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download Resume</span>
                      </a>
                      {isRecruiter && (
                        <p className="text-sm text-gray-600 dark:text-white/60 font-light">
                          I look forward to hearing from you!
                        </p>
                      )}
                    </div>
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
