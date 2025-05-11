import { motion } from "framer-motion";

import { FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";

const Skills = () => {
  return (
    <motion.section
      className="pb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl font-bold mb-2">Skills & Tools</h1>
      <p className="text-lg text-gray-700 mb-4">
        Here is a quick look at the stacks I enjoy working with:
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-lg font-semibold text-gray-800">
        <li className="flex justify-center items-center">
          <FaReact className="mr-2" />
          React.js
        </li>
        <li className="flex justify-center items-center">
          <SiTypescript className="mr-2" /> TypeScript
        </li>
        <li className="flex justify-center items-center">
          <RiTailwindCssFill className="mr-2" /> Tailwind CSS
        </li>
        <li className="flex justify-center items-center">
          <FaGithub className="mr-2" /> Github
        </li>
        <li className="flex justify-center items-center">
          <IoLogoVercel className="mr-2" /> Vercel
        </li>
      </ul>
    </motion.section>
  );
};

export default Skills;
