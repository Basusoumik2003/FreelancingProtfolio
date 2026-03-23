import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Nest.js", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Prisma"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Netlify"],
    },
    {
      category: "AI & ML",
      skills: ["LLM Integrations", "OpenAI API", "Claude API", "Automation", "Vector DB"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Vite", "Testing", "Stripe", "REST APIs"],
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

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={categoryVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={categoryVariants}
            className="text-xl text-gray-600 mb-16 max-w-2xl"
          >
            A comprehensive toolkit built through years of hands-on development
            across the full technology stack.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={categoryVariants}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIdx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
