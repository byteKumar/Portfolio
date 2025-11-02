"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { Task, Portfolio, ImageProcessing, PepperUni, Recipe } from "../../../public/index.js";

const projectsData = [
  {
    id: 1,
    title: "Image Processing Application",
    description: "Built a Swing GUI and batch processing tool for image manipulation with Command Pattern and MVC, supporting JPG, PNG, and PPM formats.",
    image: ImageProcessing,
    tag: ["All", "Java"],
    gitUrl: "https://github.com/anandms101/PDPAssignment6",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "A personal portfolio built with React showcasing creativity and coding expertise in a seamless, interactive user experience.",
    image: Portfolio,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/byteKumar/Portfolio",
    previewUrl: "https://chamankumar.vercel.app/",
  },
  {
    id: 3,
    title: "Recipe Hub",
    description: "A full-stack MERN app for discovering and saving recipes with user authentication and personalized recipe feed.",
    image: Recipe,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/byteKumar/RecipeHub",
    previewUrl: "https://recipehubck.netlify.app/",
  },
  {
    id: 4,
    title: "Task Flow Planner",
    description: "Algorithm-based task sequencing and allocation system to optimize project management, generating detailed daily plans.",
    image: Task,
    tag: ["All", "Java"],
    gitUrl: "https://github.com/byteKumar/TaskFlow-Planner",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pepperuni",
    description: "Built PepperUni, a MERN-based AI resume analysis platform designed in Figma, enhancing resume scores by 20%.",
    image: PepperUni,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/apmcneuboston/PepperUni",
    previewUrl: "https://pepperuni.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);  // Track the number of visible projects
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setVisibleProjects(3);  // Reset visible projects when the tag changes
  };

  const handleShowMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);  // Show 3 more projects
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 xl:px-16 max-w-7xl">
        <div className="mb-12">
          <h2 className="section-title bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent mb-4 text-center">
            Featured Projects
          </h2>
          <div className="section-divider"></div>
        </div>
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
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
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
      {filteredProjects.length > visibleProjects && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-medium"
          >
            Show More
          </button>
        </div>
      )}
      </div>
    </section>
  );
};

export default ProjectsSection;
