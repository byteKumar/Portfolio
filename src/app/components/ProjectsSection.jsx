"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { Task, Portfolio, Recipe } from "../../../public/index.js";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio built with React showcasing creativity and coding expertise in a seamless, interactive user experience.",
    image: Portfolio,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/byteKumar/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Recipe Hub",
    description: "A full-stack MERN app for discovering and saving recipes with user authentication and personalized recipe feed.",
    image: Recipe,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/byteKumar/RecipeHub",
    previewUrl: "https://recipehubck.netlify.app/",
  },
  {
    id: 3,
    title: "Task Flow Planner",
    description: "Algorithm-based task sequencing and allocation system to optimize project management, generating detailed daily plans.",
    image: Task,
    tag: ["All", "Java"],
    gitUrl: "https://github.com/byteKumar/TaskFlow-Planner",
    previewUrl: "/",
  },
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
    initial: { y: 50, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <h2 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-12">
        Featured Projects
      </h2>
      <div className="flex justify-center items-center gap-4 mb-12">
        {["All", "Web", "Java"].map((name) => (
          <ProjectTag
            key={name}
            onClick={handleTagChange}
            name={name}
            isSelected={tag === name}
          />
        ))}
      </div>
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.3, ease: "easeOut" }}
            className="cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-out"
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
