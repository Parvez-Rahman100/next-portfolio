import Button from "@/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi Myself
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        Parvez Rahman
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        My line of work for web
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.25,
        }}
      >
        I&apos;m a web developer with expertise in creating top-notch digital
        experiences. My current focus is on developing products that are
        accessible and centered around user needs, as part of the team at any IT
        firms.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.7,
        }}
      >
        <Button text="Check Out My Projects" link="#" />
      </motion.div>
    </div>
  );
};

export default Hero;
