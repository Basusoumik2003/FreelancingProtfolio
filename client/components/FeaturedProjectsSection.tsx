import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Carbon Credit Platform",
      description: "Integrated platform for managing and trading carbon credits",
      problem: "Businesses struggle to manage carbon credits efficiently",
      solution: "Build a scalable web platform for seamless tracking and trading",
      tech: ["React", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Furniture Lifecycle",
      description: "A circular economy marketplace to sell, donate, or responsibly dispose office furniture",
      problem: "Optimized user flow and marketplace logic for high-volume transactions",
      solution: "",
      tech: ["Next.js", "PostgreSQL", "FastAPI"],
      caseStudy: "#",
    },
    {
      title: "AI-based SaaS Platform",
      description: "Automation platform leveraging LLMs to optimize content workflows",
      problem: "",
      solution: "",
      tech: ["Python", "FastAPI"],
      liveDemo: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-start justify-between mb-4 gap-4">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-2xl"
              >
                A selection of my recent work focusing on SaaS, AI, and complex
                marketplaces.
              </motion.p>
            </div>
            <motion.a
              variants={itemVariants}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-semibold text-sm whitespace-nowrap hover:text-gray-900 transition-colors mt-2"
            >
              Browse GitHub <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
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
