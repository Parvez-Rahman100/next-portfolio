import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Myself</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! This is Parvez Rahman, a professional Visa Processor with 2+ years of experience specializing in tourist visa applications for first-class countries. I work on visa documentation, application review, profile assessment, travel plan preparation, and submission support. Experienced in handling embassy requirements, financial documents, and supporting papers for smooth visa processing. I provide professional guidance to clients throughout the complete visa application journey.
          </p>
          <p className="about-grid-info-text">
            Below are the countries I have recently gained experience working with:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">CANADA</li>
            <li className="about-grid-info-list-item">AUSTRALIAL</li>
            <li className="about-grid-info-list-item">USA</li>
            <li className="about-grid-info-list-item">SCHENGEN</li>
            <li className="about-grid-info-list-item">THAILAND</li>
            <li className="about-grid-info-list-item">MALAYSIA</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="about-grid-photo-container">
            <Image src="/newPhoto.png" alt="Parvez" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
