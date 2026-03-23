import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  tech: string[];
  liveDemo?: string;
  github?: string;
  status?: string;
  image?: string;
  isOptional?: boolean;
  caseStudy?: string;
}

export default function ProjectCard({
  title,
  description,
  problem,
  solution,
  tech,
  liveDemo,
  github,
  status,
  image,
  caseStudy,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Placeholder */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover bg-gray-200"
        />
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <div className="text-gray-500 text-sm font-medium">Project Image</div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold uppercase tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution */}
        {problem && solution && (
          <div className="space-y-3 mb-4 text-sm">
            <div>
              <p className="font-semibold text-gray-700 mb-1">Problem</p>
              <p className="text-gray-600 text-xs leading-relaxed">{problem}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Solution</p>
              <p className="text-gray-600 text-xs leading-relaxed">{solution}</p>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex gap-2">
          {liveDemo && (
            <motion.a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors font-medium text-sm"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {caseStudy && (
            <motion.a
              href={caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              View Case Study
            </motion.a>
          )}
          {github && !liveDemo && !caseStudy && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              Source <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
