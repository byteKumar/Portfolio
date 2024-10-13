"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import {Task, Portfolio, Recipe } from "../../../public/index.js";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Explore my React portfolio—a fusion of code and creativity, showcasing a symphony of innovation in a virtual journey.",
    image: Portfolio,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/byteKumar/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Recipe Hub",
    description: "Designed and developed a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that allows users to browse, search, and save their favorite recipes.\nImplemented user authentication, recipe creation and editing functionalities, and a personalized recipe feed to enhance user engagement and experience.",
    image: Recipe,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/byteKumar/RecipeHub",
    previewUrl: "https://recipehubck.netlify.app/",
  },
  {
    id: 3,
    title: "Task Flow Planner",
    description: "An algorithm designed to sequence and allocate project tasks efficiently based on provided constraints. It organizes Epics, Stories, and Tasks in a specified order, assigning them to available personnel while considering their skill sets and daily availability. The output is a detailed daily plan in CSV format, ensuring optimal task management and adherence to project milestones.",
    image: Task,
    tag: ["All", "Java"],
    gitUrl: "https://github.com/byteKumar/TaskFlow-Planner",
    previewUrl: "/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image.src}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
