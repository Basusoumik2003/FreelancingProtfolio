import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Carbon Credit Platform",
      description: "A full-stack platform for managing and trading carbon credits",
      problem: "Businesses struggle to manage carbon credits across multiple sources",
      solution: "Built a scalable web platform that streamlines carbon credit management and enables peer-to-peer trading",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Furniture Lifecycle Marketplace",
      description: "Platform to sell, donate, or dispose furniture",
      problem: "Furniture disposal and circulation is inefficient and waste-heavy",
      solution: "Created a marketplace connecting buyers and sellers while optimizing user flow and marketplace logistics",
      tech: ["React", "Express", "PostgreSQL", "Stripe", "Docker"],
      status: "In Progress",
      github: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-16 max-w-2xl"
          >
            A selection of projects I'm proud of. Each demonstrates my approach
            to solving real-world problems with elegant, scalable solutions.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
