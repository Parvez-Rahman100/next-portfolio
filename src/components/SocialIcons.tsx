import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/Parvez-Rahman100",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/parvez-miah-945910229/",
    },
    {},
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/i_amparvezrahman/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/parvezrahman100",
    },
  ];

  return (
    <div className="social-icons">
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
    </div>
  );
};

export default SocialIcons;
