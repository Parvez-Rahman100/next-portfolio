import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";


function Projects() {
  const projectsData = [
    {
      image: "/USA/1.png",
      projectName: "USA",
      projectLink: "/USA",
      projectDescription:
        "I specialize in USA B1/B2 visa processing, including completing the DS-160 form and managing the CGI Federal portal. I handle appointment scheduling for both normal and emergency visa dates. I ensure proper documentation and guidance throughout the process for smooth submission and better approval chances..",
      projectTech: ["Visa Processing", "Documentation", "Client Support"],
      projectExternalLinks: {
        externalLink: "/USA",
      },
    },
     {
      image: "/Canada/1.jpg",
      projectName: "CANADA",
      projectLink: "/Canada",
      projectDescription:
        "I provide professional Canada visa processing services, including application preparation, document review, profile assessment, and online submission support. Experienced in handling visitor visa applications, financial documents, travel history, and supporting papers according to immigration requirements. I guide clients throughout the complete process to ensure smooth and accurate visa submission.",
      projectTech: ["Visa Processing", "Documentation", "Client Support"],
      projectExternalLinks: {
        externalLink: "/Canada",
      },
    },
    {
      image: "/Malaysia/1.jpg",
      projectName: "MALAYSIA",
      projectLink: "/Malaysia",
      projectDescription:
        "I provide professional Malaysia visa processing services, including application preparation, document review, profile assessment, and online submission support. Experienced in handling visitor visa applications, financial documents, travel history, and supporting papers according to immigration requirements. I guide clients throughout the complete process to ensure smooth and accurate visa submission.",
      projectTech: ["Visa Processing", "Documentation", "Client Support"],
      projectExternalLinks: {
        externalLink: "/Malaysia",
      },
    },
    {
      image: "/Thailand/1.jpg",
      projectName: "THAILAND",
      projectLink: "/Thailand",
      projectDescription:
        "I provide professional Thailand visa processing services, including application preparation, document review, profile assessment, and online submission support. Experienced in handling visitor visa applications, financial documents, travel history, and supporting papers according to immigration requirements. I guide clients throughout the complete process to ensure smooth and accurate visa submission.",
      projectTech: ["Visa Processing", "Documentation", "Client Support"],
      projectExternalLinks: {
        externalLink: "/Thailand",
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
        <h2>Some Of My Success</h2>
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
