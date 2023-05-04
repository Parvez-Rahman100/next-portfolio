import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      className="form"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <form
        action="https://formcarry.com/s/UxhZ_W5p0"
        method="POST"
        accept-charset="UTF-8"
      >
        <label>Your Name</label>
        <input type="text" name="name" required></input>
        <label>Your Email</label>
        <input type="email" name="email" required></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea
          placeholder="Type your message here"
          name="message"
          required
        />
        <button type="submit" className="button-57 contact-action">
          <span className="text">Submit</span>
          <span>Submit</span>
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
