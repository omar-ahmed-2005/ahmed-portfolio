import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaEnvelope } from "react-icons/fa";

const Experience = () => {
  const timeline = [
    {
      type: "Education", icon: <FaGraduationCap />, date: "Third Year – Present",
      title: "Computer and Information Science Student", place: "Zagazig University",
      description: "Currently studying in the third year, developing academic knowledge in computer science, programming, and software development.",
    },
    {
      type: "Completed Training", icon: <FaCertificate />, date: "July 2026 – October 2026",
      title: "Programming Fundamentals", place: "Kayan Academy | 120 Hours",
      description: "Completed a 120-hour course covering C++, Object-Oriented Programming, Data Structures, Algorithms, and Database fundamentals.",
    },
    {
      type: "Currently Learning", icon: <FaCertificate />, date: "November 2026 – Present",
      title: "Backend Development Training", place: "PHP & Laravel",
      description: "Currently learning Backend Development using PHP and Laravel, with a focus on server-side programming and web application development.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span>MY JOURNEY</span><h2>Education & <strong>training.</strong></h2>
        </motion.div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div className="timeline-item" key={`${item.title}-${index}`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.15 }}>
              <div className="timeline-dot">{item.icon}</div>
              <div className="timeline-card"><span className="timeline-type">{item.type}</span><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><h4>{item.place}</h4><p>{item.description}</p></div>
            </motion.div>
          ))}
        </div>
        <motion.div className="cv-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="cv-text"><span>MY RESUME</span><h3>Want to know more <strong>about me?</strong></h3><p>Download my CV to learn more about my education, skills, training, and projects.</p></div>
          <a href="mailto:ahmedabdelhad9y@gmail.com?subject=CV%20Request" className="cv-button"><FaEnvelope size={14} /> Request My CV</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
