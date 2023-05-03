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
            Hello! My name is Parvez Rahman, and I am a passoinate about
            creating top-notch websites.My interest in web development was
            sparked in 2020 when I created my first project called Perfumes
            Granary, an app using React and Nodejs.
          </p>
          <p className="about-grid-info-text">
            During this web development learning period, I have skilled
            knowledge of HTML, CSS, React JS, Tailwind CSS, Node Js, MongoDB,
            Express Js, and other technologies.
          </p>
          <p className="about-grid-info-text">
            I am also working on some new projects. Those are full stack
            application.
          </p>
          <p className="about-grid-info-text">
            Here are few technologies I have been working with recently.
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">NextJs</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Bootstrap</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile2.png" alt="Parvez" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
