import { motion } from "framer-motion";
import { Code2, Zap, Gauge, MessageSquare } from "lucide-react";

export default function WhyChooseMeSection() {
  const benefits = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Maintainable, well-documented code that's easy for teams to understand and build upon.",
    },
    {
      icon: Gauge,
      title: "Scalable Systems",
      description:
        "Architectures designed to grow with your business, handling increased load and complexity.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Efficient development process that doesn't compromise on quality or thoroughness.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description:
        "Regular updates and transparent communication throughout the entire development process.",
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
          >
            Why Choose Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto text-center"
          >
            What sets me apart in delivering exceptional results for your project.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
