import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Zap,
  Code,
  Layers,
  Gauge,
  GitBranch,
  Brain,
  Workflow,
  Cpu,
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Framer Motion", icon: Zap },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js / Express", icon: Database },
        { name: "Nest.js", icon: Layers },
        { name: "MongoDB / Postgres", icon: Database },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "AWS / Vercel", icon: Cloud },
        { name: "Docker", icon: Gauge },
        { name: "CI/CD Pipelines", icon: GitBranch },
      ],
    },
    {
      category: "AI & Logic",
      skills: [
        { name: "LLM Integrations", icon: Brain },
        { name: "Workflow Automation", icon: Workflow },
        { name: "Scalable Systems", icon: Cpu },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Icon fallback component
  const DefaultIcon = () => <Code className="w-4 h-4" />;

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={categoryVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          >
            Technical Stack
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={categoryVariants}
              >
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIdx * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <Icon className="w-5 h-5 text-gray-700 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple palette icon as fallback
function Palette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .268m-6.268 0A2 2 0 009.5 9H12a2 2 0 012 2v4a2 2 0 01-2 2h-2.5a2 2 0 01-1-.268m0 0H7"
      />
    </svg>
  );
}
