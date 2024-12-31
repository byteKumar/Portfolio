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
      <div className="space-y-8">
        <div className="grid grid-cols-2 text-sm sm:text-base">
          <div>
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Northeastern University
            </b>
            <p>Master of Science in Computer Science</p>
          </div>
          <div className="text-right">
            <p>Sept 2024 - May 2026</p>
            <p>GPA: 3.9/4</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="col-span-full text-center font-semibold text-primary-400">
            Relevant Courses
          </p>
          <ul className="list-none space-y-2">
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">CS5010 Program Design Paradigms</li>
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">CS5610 Web Development</li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">CS5800 Algorithms</li>
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">CS5200 Database Management Systems</li>
          </ul>
        </div>
        <hr className="border-gray-600" />
        <div className="grid grid-cols-2 text-sm sm:text-base">
          <div>
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Galgotias University
            </b>
            <p>Bachelor of Technology in Computer Science & Engineering</p>
          </div>
          <div className="text-right">
            <p>Aug 2018 - May 2022</p>
            <p>GPA: 8.4/10</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-900 p-4 rounded-lg shadow-md">
          <p className="col-span-full text-center font-semibold text-primary-400">
            Relevant Courses
          </p>
          <ul className="list-none space-y-2">
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">Data Structures</li>
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">Algorithms</li>
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">Web Development</li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">Database Management Systems</li>
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">Operating Systems</li>
            <li className="p-2 bg-gray-800 rounded-md shadow-sm">Computer Networks</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-6 text-sm sm:text-base">
        {[
          {
            position: "Graduate Teaching Assistant",
            duration: "Jan 2024 - Present",
            company: "Northeastern University",
          },
          {
            position: "Full-Stack Developer",
            duration: "Sept 2024 - Present",
            company: "Aspiring Product Managers Club @ Northeastern University",
          },
          {
            position: "Software Engineer",
            duration: "Jul 2022 - Aug 2024",
            company: "AKQA",
          },
          {
            position: "Software Engineering Intern",
            duration: "Nov 2021 - Feb 2022",
            company: "BluePi",
          },
          {
            position: "Teaching Assistant",
            duration: "Aug 2019 - Dec 2019",
            company: "Coding Ninjas",
          },
        ].map(({ position, duration, company }, index) => (
          <div key={position}>
            <div className="grid grid-cols-2">
              <div>
                <b>{position}</b>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  {company}
                </p>
              </div>
              <div className="text-right">
                <p>{duration}</p>
              </div>
            </div>
            {index !== 4 && <hr className="border-gray-600 mt-4" />}
          </div>
        ))}
      </div>
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
      <div className="md:grid gap-12 items-center px-4 xl:px-16">
        <div className="mt-6 md:mt-0 flex flex-col">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
            Background
          </h2>
          <div className="text-base lg:text-lg leading-relaxed mb-6">
            <p class="mb-[25px] mt-0">I am a Master&apos;s in Computer Science student at Northeastern University. </p>

            <p class="mb-[25px] mt-0">My expertise spans developing scalable systems, optimizing data processes, and leveraging cloud technologies (AWS, GCP) to drive efficiency and innovation.
            I consistently stay abreast of the latest developments in my field, diligently seeking opportunities to learn and explore emerging technologies. </p>
            <p class="mb-[25px] mt-0">When I&apos;m not in front of a computer screen, you&apos;ll likely find me reading a non-fiction book, exploring new trails, or out on a run.</p>
          </div>

          <div className="flex flex-row justify-center space-x-4 mb-8">
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
