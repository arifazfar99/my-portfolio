import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      className="pt-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold pb-12">Projects</h1>
      <ul className="space-y-4">
        <li>
          <strong className="text-xl">Track My Gaji (April 2025)</strong>
          <a
            href="https://track-my-gaji.vercel.app/"
            className="text-blue-600 text-md"
            target="_blank"
          >
            {" "}
            Link
          </a>
          <p className="text-lg">
            Track My Gaji is a salary calculator I built to figure out my net
            pay after Malaysia’s EPF, SOCSO, and EIS deductions. It also tracks
            personal commitments like car loans, phone bills and Netflix
            subcription. I used React and Tailwind CSS to make the UI clean and
            responsive — and I actually finished it in just 2 days!
          </p>
        </li>
      </ul>
    </motion.section>
  );
};

export default Projects;
