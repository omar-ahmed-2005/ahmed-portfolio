import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      number: "01", category: "Management System", title: "Library Management System",
      description: "A C++ console application created to organize library operations and manage library records. Explore the source code to see the implemented features and program structure.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80",
      technologies: ["C++", "Console Application"],
      github: "https://github.com/ahmedabdelhady9/cpp/tree/main/Library%20Management%20System",
    },
    {
      number: "02", category: "Console Game", title: "X-O Game",
      description: "A two-player Tic-Tac-Toe game developed in C++, where players take turns marking cells on a 3×3 board and the game checks for a winning combination.",
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1400&q=80",
      technologies: ["C++", "Functions", "Arrays", "Game Logic"],
      github: "https://github.com/ahmedabdelhady9/cpp/blob/main/X_O%20Game/main.cpp",
    },
    {
      number: "03", category: "Console Game", title: "Guess The Number",
      description: "An interactive number guessing game built with C++, featuring random number generation, difficulty levels, limited attempts, and feedback to the player.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
      technologies: ["C++", "Random Number Generation", "Loops", "Conditions"],
      github: "https://github.com/ahmedabdelhady9/cpp/blob/main/Guess%20Number%20Project/main.cpp",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div className="section-heading projects-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
          <span>MY WORK</span><h2>Learning through <strong>building.</strong></h2>
        </motion.div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}>
              <div className="project-image-wrapper"><img src={project.image} alt={`${project.title} project`} className="project-image" /><div className="project-image-overlay"></div><span className="project-number">{project.number}</span></div>
              <div className="project-content">
                <div className="project-meta">{project.category}</div>
                <div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={28} className="project-arrow" /></div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" className="project-link"><FaGithub size={17} /> View Source Code</a></div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div className="projects-more" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <p>Want to explore the source code?</p>
          <a href="https://github.com/ahmedabdelhady9/cpp" target="_blank" rel="noreferrer" className="github-button"><FaGithub size={18} /> Visit My GitHub <ArrowUpRight size={17} /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
