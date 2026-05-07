import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="contact">
        <h1 className="contact-title">CONTACT</h1>
        <p className="contact-sub-title">Let&apos;s have Contact between us</p>
        <p className="contact-text">
          I&apos;m currently looking for new opportunities, and my inbox is always open. I look forward to joining a company as a Visa Processor, where I can utilize my experience and skills professionally.
        </p>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
