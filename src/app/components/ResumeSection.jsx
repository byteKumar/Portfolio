"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, MapPinIcon, BuildingOfficeIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../../../public/hero-image.jpeg";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

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
                <div className="relative w-full aspect-square rounded-full overflow-hidden border border-gray-300 dark:border-white/20">
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
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-1">
                          Northeastern University
                        </h3>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic mb-2">United States | Sep 2024 - Dec 2026</p>
                        <p className="text-gray-800 dark:text-white/80 text-lg font-light mb-1">Master of Science in Computer Science</p>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light">GPA: 3.67/4</p>
                      </div>
                      <div className="mt-6">
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
                  </motion.div>
                )}

                {/* Leadership Section */}
                {activeTab === "leadership" && (
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
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2">
                          Aspiring Product Managers Club
                        </h3>
                        <p className="text-gray-600 dark:text-white/60 text-base font-light italic mb-4">Northeastern University</p>
                        <p className="text-gray-800 dark:text-white/80 text-lg font-light mb-4">Leader of Technical Development and Product Management</p>
                        <ul className="space-y-2 list-none">
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Leading technical initiatives and product management strategies, fostering innovation and collaboration</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs">—</span>
                            <span className="text-gray-700 dark:text-white/70 text-base leading-relaxed font-light">Organizing technical workshops, mentoring members, and driving product development projects</span>
                          </li>
                        </ul>
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
                    <div className="space-y-4">
                      <p className="text-gray-700 dark:text-white/80 text-base leading-relaxed font-light mb-6">
                        Download my complete curriculum vitae.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <LinkButton href="https://drive.google.com/file/d/1RzvuXUag-NiXiFPu7X-w2vFyIy6LDH8j/view?usp=drive_link" icon={null}>Download CV</LinkButton>
                      </div>
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
