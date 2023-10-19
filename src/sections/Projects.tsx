import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {
  const projectsData = [
    {
      image: "/ss1.PNG",
      projectName: "WebGency",
      projectLink: "https://webgency.vercel.app/",
      projectDescription:
        "This project about web agency,Web related problem and solutions can be found here.You can buy packages.",
      projectTech: [
        "ReactJS",
        "TailwindCSS",
        "React-Icons",
        "React-Slick",
        "Countup",
      ],
      projectExternalLinks: {
        github: "https://github.com/Parvez-Rahman100/webgency",
        externalLink: "https://webgency.vercel.app/",
      },
    },
    {
      image: "/ss2.png",
      projectName: "Alumni Association",
      projectLink: "https://alumni-association-4e4ae.web.app/",
      projectDescription:
        "Alumni Association is a based ex student of tejgaon college. Where ex student can login/signup via registration number. Can see other students info and also can post job offer. Communication system will be added soon.To Login on my site , use 'iamparvezrahman@gmail.com' as email and password is '123456'",
      projectTech: ["React", "Tailwind", "Firebase", "ExpressJs", "MongoDB"],
      projectExternalLinks: {
        github: "https://github.com/Parvez-Rahman100/alumni-association-client",
        externalLink: "https://alumni-association-client.vercel.app/",
      },
    },
    {
      image: "/ss3.png",
      projectName: "Coders Clinic",
      projectLink: "https://coders-clinic-fc76f.web.app/",
      projectDescription:
        "This is a group project.Where I contribute a lot. Through this project I have learned a lot about git management. This website based on online problem solving platform.",
      projectTech: ["React", "React-Redux", "Firebase", "Tailwind", "axios"],
      projectExternalLinks: {
        github: "https://github.com/akilinjamam/coders-clinic",
        externalLink: "https://coders-clinic-fc76f.web.app/",
      },
    },

    {
      image: "/ss4.png",
      projectName: "Laptop Gizmo",
      projectLink: "https://laptop-gizmo.web.app/",
      projectDescription:
        "It's a tools website where you will find different parts of laptop which you can buy.Login, Registration via email password or social login(google).Both users and admin will be able to access the dashboard. Admin can add new product, manage users, delete products.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Tailwind",
      ],
      projectExternalLinks: {
        github: "https://github.com/Parvez-Rahman100/laptop-gizmo-client",
        externalLink: "https://laptop-gizmo.web.app/",
      },
    },
  ];
  return (
    <div className="projects" id="projects">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub size={50} />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink size={50} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
