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
      <li>C</li>
      <li>C++</li>
      <li>Java</li>
      <li>Python</li>
      <li>Oracle</li>
      <li>HTML</li>
    </div>
  </ul>

  <ul className="list-disc pl-2">
    <div>
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>JavaScript</li>
      <li>React</li> 
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
          <p> September 2023 - May 2025 </p>
          <p>Master of Science in Software Engineering Systems</p>
          <p>GPA: 3.85/4</p>
        </li>
        <br />
        <li><b>Dadi Insitute of Engineering and Technology </b>
            <p>May 2015 - June 2019</p>
            <p>Bachelor of Technology in Computer Science & Engineering</p>
            <p>GPA: 8.2/10</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Technology Analsyt 
          <p>December 2019 - July 2023</p>
          <p><i>Infosys Ltd., Hyderabad, India</i></p>
        </li>
        <br />
        <li>Software Developer Intern
        <p>December 2019 - July 2023</p>
          <p><i>Global InfoTech, Hyderabad, India</i></p>
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
          For the past 3.8 years, I&apos;ve been delving into the digital realms as a tech analyst, specializing in orchestrating database symphonies. With expertise in SQL, MySQL, PostgreSQL, and GIT, I thrive on unraveling the intricate dance of data.

          A perpetual learner, I&apos;m always hungry to expand my knowledge and skill set. My academic journey included hands-on experiences with Object-Oriented Design, Java, JavaScript, React, Redux, Node.js, Express, HTML, and CSS.

          As both a team lead and a team player, I find excitement in collaborating with others to craft extraordinary full-stack applications. Let&apos;s redefine the rhythm of technological precision together!
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
