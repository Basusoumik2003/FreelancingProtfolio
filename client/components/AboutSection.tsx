import { motion } from "framer-motion";

export default function AboutSection() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            I'm a Full-Stack Developer with a passion for building scalable and
            elegant solutions. With experience across the entire development
            stack, I specialize in turning complex ideas into clean, efficient,
            and user-friendly applications.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            My focus is on problem-solving and building robust architectures that
            scale. Whether it's architecting a complete system or optimizing
            performance, I approach every project with precision and a commitment
            to quality. I thrive at the intersection of innovation and
            pragmatism.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            I work closely with founders and teams to understand their vision,
            translate it into technical requirements, and deliver products that
            not only meet expectations but exceed them.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
