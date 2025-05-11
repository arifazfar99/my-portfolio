import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="my-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-semibold mb-2">About Me</h2>
      <p>
        Front-end Developer with 2 years of experience building performant and
        responsive web apps using React.js. Passionate about clean code,
        testing, and eager to expand into backend development.
      </p>
    </motion.section>
  );
};

export default About;
