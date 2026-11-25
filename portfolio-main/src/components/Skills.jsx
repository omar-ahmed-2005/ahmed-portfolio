import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaGitAlt, FaGithub, FaPhp } from "react-icons/fa";
import { SiCplusplus, SiLaravel } from "react-icons/si";
import { BrainCircuit, Workflow } from "lucide-react";

const Skills = () => {
  const groups = [
    { title: "Programming", items: [{ name: "C++", icon: <SiCplusplus /> }, { name: "PHP", icon: <FaPhp />, status: "Currently Learning" }, { name: "Laravel", icon: <SiLaravel />, status: "Currently Learning" }] },
    { title: "Computer Science Fundamentals", items: [{ name: "Object-Oriented Programming", icon: <FaCode /> }, { name: "Data Structures", icon: <Workflow /> }, { name: "Algorithms", icon: <BrainCircuit /> }, { name: "Problem Solving", icon: <FaCode /> }] },
    { title: "Database & Tools", items: [{ name: "Database Fundamentals", icon: <FaDatabase /> }, { name: "SQL", icon: <FaDatabase /> }, { name: "Git", icon: <FaGitAlt /> }, { name: "GitHub", icon: <FaGithub /> }] },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div className="section-heading skills-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span>MY SKILLS</span>
          <h2>My technical <strong>toolkit.</strong></h2>
        </motion.div>
        <div className="skills-grid">
          {groups.flatMap((group) => group.items.map((skill) => ({ ...skill, group: group.title }))).map((skill, index) => (
            <motion.div className="skill-card" key={skill.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }} whileHover={{ y: -7 }}>
              <div className="skill-top"><div className="skill-icon">{skill.icon}</div>{skill.status && <span className="skill-percentage">Learning</span>}</div>
              <div className="skill-info"><h3>{skill.name}</h3><small>{skill.group}</small></div>
            </motion.div>
          ))}
        </div>
        <motion.div className="skills-footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
          <span></span><p>Always learning. Always building. Always improving.</p><span></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
