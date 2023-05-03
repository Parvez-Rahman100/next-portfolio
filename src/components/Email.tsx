import { motion } from "framer-motion";
import Link from "next/link";

const Email = () => {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.9,
      }}
    >
      <Link href="mailto:iamparvezrahman@gmail.com" className="email-link">
        iamparvezrahman@gmail.com
      </Link>
    </motion.div>
  );
};

export default Email;
