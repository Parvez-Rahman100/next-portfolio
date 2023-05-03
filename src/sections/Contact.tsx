import Button from "@/components/Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      id="contact"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I&apos;m looking for new opportunity. My inbox always open. I am looking
        forward to join a job as junior web developer.
      </p>
      <div className="contact-action">
        <Button text="Say Hello" link="mailto:iamparvezrahman@gmail.com" />
      </div>
    </motion.div>
  );
};

export default Contact;
