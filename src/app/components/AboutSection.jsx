"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "../../../public/about-image.png"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div style={{ display: 'flex', gap: '20px'}}>
  <ul className="list-disc pl-2">
    <div>
      <li>Java</li>
      <li>C++</li>
      <li>JavScript</li>
      <li>HTML</li>
      <li>TypeScript</li>
      <li>CSS</li>
    </div>
  </ul>

  <ul className="list-disc pl-2">
    <div>
      <li>MySQL</li>
      <li>PostgreSQL</li>
      <li>MongoDB</li>
      <li>Spring</li>
      <li>SpringBoot</li>
      <li>JQuery</li> 
    </div>
  </ul>

  <ul className="list-disc pl-2">
    <div>
      <li>Redux</li>
      <li>Node.js</li>
      <li>GraphQL</li>
      <li>Express</li>
      <li>CI/CD</li>
      <li>ReactJS</li> 
    </div>
  </ul>

  <ul className="list-disc pl-2">
    <div>
      <li>Git</li>
      <li>Docker</li>
      <li>Amazon Web Services (AWS)</li>
      <li>Terraform</li>
      <li>RESTful APIs</li>
      <li>AEM (Adobe Experience Manager)</li> 
    </div>
  </ul>
  
</div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Northeastern University</b>
          <p> September 2024 - May 2026 </p>
          <p>Master of Science in Computer Science</p>
          <p>GPA: 3.9/4</p>
          <p>Revelant Courses: Program Design Paradigms, Web Development
</p>
        </li>
        <br />
        <li><b>Galgotias University </b>
            <p>August 2018 - May 2022</p>
            <p>Bachelor of Technology in Computer Science & Engineering</p>
            <p>GPA: 8.4/10</p>
            <p>Relevant Courses: Data Structures, Algorithms, Databases, Operating Systems, Computer Networks
</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Developer 
          <p>July 2022 - August 2024</p>
          <p><i>AKQA., Haryana, India</i></p>
          <p>- Led the optimization of IWC Schaffhausen’s global e-commerce platform, improving customer experience, and
          achieving a 20% increase in code coverage and a 10% reduction in ticket resolution time.</p>
          <p>- Developed reusable components in Adobe Experience Manager (AEM) with comprehensive documentation,
          reducing infrastructure costs by 20% and enhancing scalability.</p>
          <p>- Ensured cross-browser compatibility and optimized website performance, using AEM, HTML, JavaScript, CSS,
          LESS, Docker, Confluence, React, Java, Slightly and Jira.</p>
        </li>
        <br />
        <li>Software Engineering Intern
        <p>November 2021 - February 2022</p>
          <p><i>BluePi, Haryana, India</i></p>
          <p>- Developed in-house projects using Spring Boot and Java, optimizing system efficiency and performance while reducing API calls by 10%; gained hands-on experience with AWS, managing VMs, and earning AWS Developer Associate certification.</p>
        </li>
        <br />
        <li>Teaching Assistant
        <p>August 2019 - December 2019</p>
          <p><i>Coding Ninjas, New Delhi, India</i></p>
          <p>- Instructed 400+ students on Object-Oriented Design and testing practices, improving project quality by 10%, while providing C++ support for Data Structures and Algorithms, and boosting student engagement by 15% through webinars and Q&A sessions.</p>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={AboutImage} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m Chaman Kumar, a Master&apos;s student in Computer Science at Northeastern University with over two years of experience in web development and software engineering.
          I&apos;ve worked at AKQA and BluePi, leading projects that optimized e-commerce platforms and improved system efficiency.
          Skilled in Java, JavaScript, React, Node.js, AWS, and AEM, I enjoy solving complex problems and delivering scalable solutions.
          I&apos;ve also mentored 400+ students at Coding Ninjas, fueling my passion for both learning and teaching. 
          Outside of work, I love exploring new cuisines, playing volleyball, and hiking.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
