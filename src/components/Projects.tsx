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
        {/* <li>
          <strong className="text-xl">OllamaGPT UI</strong>
          <p className="text-lg text-justify">
            A custom chatbot interface inspired by ChatGPT that leverages
            Ollama's local LLMs for conversational AI. It supports multiple chat
            threads, renaming and deletion of threads, and persistent message
            history stored on the backend.
          </p>
          <div className="text-lg text-justify">
            <span className="font-semibold block mb-1">Tech Stack:</span>
            <ul className="list-disc list-inside text-base text-gray-700 ml-4">
              <li>
                <strong>Frontend:</strong> Vite + React + TypeScript + Tailwind
                CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js + Express
              </li>
              <li>
                <strong>Local LLM:</strong> Ollama (LLaMA 3 model)
              </li>
            </ul>
          </div>
        </li> */}
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
          <div className="text-lg text-justify">
            <span className="font-semibold block mb-1">Tech Stack:</span>
            <ul className="list-disc list-inside text-base text-gray-700 ml-4">
              <li>
                <strong>Frontend:</strong> Vite + React + TypeScript + Tailwind
                CSS + dnd-kit
              </li>
              <li>
                <strong>Backend/Database/Authentication:</strong> Supabase
              </li>
              <li>
                <strong>Deployment:</strong> Vercel
              </li>
            </ul>
          </div>
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
          <div className="text-lg text-justify">
            <span className="font-semibold block mb-1">Tech Stack:</span>
            <ul className="list-disc list-inside text-base text-gray-700 ml-4">
              <li>
                <strong>Frontend:</strong> Vite + React + TypeScript + Tailwind
                CSS
              </li>
              <li>
                <strong>State & Storage:</strong> LocalStorage
              </li>
              <li>
                <strong>Deployment:</strong> Vercel
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </motion.section>
  );
};

export default Projects;
