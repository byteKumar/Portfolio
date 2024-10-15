"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "../../../public/about-image.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-sm sm:text-base">
        <ul className="list-disc pl-2 space-y-2">
          <li>Java</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>TypeScript</li>
          <li>CSS</li>
        </ul>
        <ul className="list-disc pl-2 space-y-2">
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Spring</li>
          <li>SpringBoot</li>
          <li>jQuery</li>
        </ul>
        <ul className="list-disc pl-2 space-y-2">
          <li>Redux</li>
          <li>Node.js</li>
          <li>GraphQL</li>
          <li>Express</li>
          <li>CI/CD</li>
          <li>ReactJS</li>
        </ul>
        <ul className="list-disc pl-2 space-y-2">
          <li>Git</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Terraform</li>
          <li>RESTful APIs</li>
          <li>AEM</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-sm sm:text-base space-y-6">
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Northeastern University
          </b>
          <p>September 2024 - May 2026</p>
          <p>Master of Science in Computer Science</p>
          <p>GPA: 3.9/4</p>
          <p>Relevant Courses: Program Design Paradigms, Web Development</p>
        </li>
        <li>
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Galgotias University
          </b>
          <p>August 2018 - May 2022</p>
          <p>Bachelor of Technology in Computer Science & Engineering</p>
          <p>GPA: 8.4/10</p>
          <p>Relevant Courses: Data Structures, Algorithms, Databases, Operating Systems, Computer Networks</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-sm sm:text-base space-y-6">
        <li>
          <b>Web Developer</b>
          <p>July 2022 - August 2024</p>
          <p>
            <i className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              AKQA, Haryana, India
            </i>
          </p>
          <p>
            - Led the optimization of IWC Schaffhausen&apos;s global e-commerce platform, improving customer experience and achieving a 20% increase in code coverage.
          </p>
          <p>
            - Developed reusable components in AEM, reducing infrastructure costs by 20% and enhancing scalability.
          </p>
          <p>
            - Ensured cross-browser compatibility, optimized performance using AEM, React, Docker, and Java.
          </p>
        </li>
        <li>
          <b>Software Engineering Intern</b>
          <p>November 2021 - February 2022</p>
          <p>
            <i className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              BluePi, Haryana, India
            </i>
          </p>
          <p>
            - Worked with Spring Boot and Java, optimizing API efficiency by reducing calls by 10%, gaining hands-on experience with AWS.
          </p>
        </li>
        <li>
          <b>Teaching Assistant</b>
          <p>August 2019 - December 2019</p>
          <p>
            <i className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Coding Ninjas, New Delhi, India
            </i>
          </p>
          <p>
            - Instructed 400+ students in OOP and testing practices, improving project quality by 10%, and conducted webinars to boost engagement.
          </p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-center px-4 xl:px-16">
        <div className="relative">
          <Image alt="About Me Image" src={AboutImage} width={500} height={500} className="rounded-lg shadow-lg" />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black opacity-30 rounded-lg"></div>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-base lg:text-lg leading-relaxed mb-6">
            I&apos;m Chaman Kumar, a Master&apos;s student at Northeastern University with over two years of experience in web development and software engineering. 
            I&apos;ve led projects optimizing e-commerce platforms and improving system efficiency at AKQA and BluePi. I specialize in Java, JavaScript, AWS, AEM, and React, with a passion for solving complex challenges and delivering scalable solutions.
            Outside of work, I&apos;m an avid foodie, volleyball player, and hiking enthusiast.
          </p>

          <div className="flex flex-row space-x-4 mb-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="overflow-x-auto transition-opacity duration-300 ease-in-out">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
