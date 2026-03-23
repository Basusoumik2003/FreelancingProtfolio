import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  liveDemo?: string;
  github?: string;
  status?: string;
  isOptional?: boolean;
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
  isOptional,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        {status && (
          <span className="ml-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold whitespace-nowrap">
            {status}
          </span>
        )}
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">Problem</p>
          <p className="text-gray-700">{problem}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">Solution</p>
          <p className="text-gray-700">{solution}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-600 mb-3">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        {liveDemo && (
          <motion.a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </motion.a>
        )}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            GitHub <Github className="w-4 h-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
