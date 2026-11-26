import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-grid"></div>
    <div className="hero-glow hero-glow-one"></div>
    <div className="hero-glow hero-glow-two"></div>

    <div className="hero-content">
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="status-dot"></span> Open to Backend Internships
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        Hi, I'm <span className="hero-name">Ahmed Mohamed Mahmoud</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Backend Developer Trainee
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        I'm a third-year Computer and Information Science student passionate
        about Backend Development, currently learning PHP and Laravel and
        building a strong foundation in software engineering.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#projects" className="primary-button">
          Explore My Projects <ArrowRight size={18} />
        </a>

<a
  href="/cv/Ahmed_Abdelhady_CV.pdf"
  download="Ahmed_Abdelhady_CV.pdf"
  className="secondary-button"
>
  Download CV <Download size={18} />
</a>
      </motion.div>

      <motion.div
        className="hero-socials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="https://github.com/ahmedabdelhady9"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="mailto:ahmedabdelhad9y@gmail.com"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      className="scroll-indicator"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span>Scroll</span>
      <ArrowDown size={18} />
    </motion.a>
  </section>
);

export default Hero;