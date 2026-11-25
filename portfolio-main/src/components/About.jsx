import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Server } from "lucide-react";

const About = () => {
  const cards = [
    { icon: <Code2 size={21} />, title: "Programming Fundamentals", text: "Building a solid foundation in C++ and core programming concepts." },
    { icon: <BrainCircuit size={21} />, title: "Problem Solving", text: "Developing logical thinking through algorithms and data structures." },
    { icon: <Database size={21} />, title: "Database Fundamentals", text: "Learning database concepts, SQL, and structured data management." },
    { icon: <Server size={21} />, title: "Backend Development", text: "Currently learning server-side development using PHP and Laravel." },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <span>ABOUT ME</span>
          <h2>Building a strong<br /><strong>foundation in Backend.</strong></h2>
        </motion.div>
        <div className="about-content">
          <motion.div className="about-text" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <p>I'm <strong>Ahmed Mohamed Mahmoud</strong>, a third-year Computer and Information Science student at <strong>Zagazig University</strong> with a strong interest in Backend Development and Software Engineering.</p>
            <p>I completed a <strong>120-hour programming fundamentals course at Kayan Academy</strong>, where I studied C++, Object-Oriented Programming, Data Structures, Algorithms, and Database fundamentals.</p>
            <p>Currently, I'm developing my Backend skills through <strong>PHP and Laravel training</strong>, while working on practical programming projects and improving my problem-solving abilities.</p>
            <div className="about-highlight"><p>"I believe in continuous learning, practical experience, and building solutions that solve real-world problems."</p></div>
          </motion.div>
          <div className="about-cards">
            {cards.map((card, index) => (
              <motion.div className="about-card" key={card.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -7 }}>
                <div className="about-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
