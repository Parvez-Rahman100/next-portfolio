import { motion } from "framer-motion";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/Parvez-Rahman100",
    },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      link: "https://www.facebook.com/iamparvezrahman/",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/parvez-rahman-945910229/",
    },
    {},
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/iamparvezrahman/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/parvezrahman100",
    },
  ];

  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.9,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <a
              className="social-icons-list-item-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialIcons;
