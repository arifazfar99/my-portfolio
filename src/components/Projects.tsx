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
      <ul className="space-y-6">
        <li>
          <section className="flex justify-center">
            <img src="/projects/planit-2.png" alt="PlanIt Logo" width={300} />
          </section>
          <strong className="text-xl">PlanIt!</strong>
          <a
            href="https://planit.arifazfar.com/"
            className="text-blue-600 text-md"
            target="_blank"
          >
            {" "}
            Link
          </a>
          <p className="text-lg text-justify">
            A Kanban board for managing tasks across "To Do", "In Progress" and
            "Completed" columns with drag-and-drop functionality. Users can
            create, edit, delete and move tasks with smooth UX, assign due
            dates, manage their work in real-time and includes secure user
            authentication.
          </p>
        </li>
        <li>
          <strong className="text-xl">Track My Gaji</strong>
          <a
            href="https://track-my-gaji.arifazfar.com/"
            className="text-blue-600 text-md"
            target="_blank"
          >
            {" "}
            Link
          </a>
          <p className="text-lg text-justify">
            Track My Gaji is a salary calculator I built to figure out my net
            pay after Malaysia’s EPF, SOCSO, and EIS deductions. It also tracks
            personal commitments like car loans, phone bills and Netflix
            subcription. I used React and Tailwind CSS to make the UI clean and
            responsive.
          </p>
        </li>
      </ul>
    </motion.section>
  );
};

export default Projects;
