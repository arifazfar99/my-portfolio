import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      className="pt-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold pb-12">Let's Connect</h1>
      <p className="text-lg text-gray-700 mb-6">
        Feel free to reach out — whether it’s about a project, collaboration, or
        just to say hi!
      </p>

      <div className="flex flex-col items-center gap-4 text-lg text-gray-700">
        <a
          href="mailto:arifazfar99@gmail.com"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <FaEnvelope /> arifazfar99@gmail.com
        </a>
        <a
          href="https://github.com/arifazfar99"
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <FaGithub /> github.com/arifazfar99
        </a>
        <a
          href="https://www.linkedin.com/in/arif-azfar-azri/"
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <FaLinkedin /> linkedin.com/in/arif-azfar-azri
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
