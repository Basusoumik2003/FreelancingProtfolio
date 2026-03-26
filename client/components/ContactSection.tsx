import { motion } from "framer-motion";
import { useState } from "react";
import { ContactFormPayload, ContactResponse } from "@shared/api";

const initialFormState: ContactFormPayload = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormPayload>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const payload: ContactFormPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: ContactResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message);
      }

      setFormData(initialFormState);
      setSubmitted(true);

      window.setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-blue-900 to-blue-950"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          >
            Let's build something amazing
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-100 mb-12 text-center"
          >
            Have a project in mind? Let's discuss how we can turn your vision
            into a production-ready reality.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-blue-200 mb-3 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  minLength={2}
                  maxLength={80}
                  required
                  className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors disabled:opacity-70"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-blue-200 mb-3 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  maxLength={120}
                  required
                  className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors disabled:opacity-70"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-blue-200 mb-3 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                minLength={5}
                maxLength={5000}
                required
                rows={5}
                className="w-full px-4 py-3 bg-blue-800 bg-opacity-50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none disabled:opacity-70"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={isSubmitting ? undefined : { scale: 1.02 }}
              whileTap={isSubmitting ? undefined : { scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors uppercase tracking-wider disabled:cursor-not-allowed disabled:bg-blue-100"
            >
              {isSubmitting
                ? "Sending..."
                : submitted
                  ? "Message Sent!"
                  : "Send Message"}
            </motion.button>
          </motion.form>

          {errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-red-200 font-medium"
            >
              {errorMessage}
            </motion.p>
          )}

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-blue-100 font-medium"
            >
              Thank you! I'll be in touch soon.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
