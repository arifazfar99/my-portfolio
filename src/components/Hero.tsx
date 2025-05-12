import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="py-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* <div className="flex justify-center mb-2">
        <img
          src="/profile.jpg"
          alt="Arif Azfar"
          className="rounded-full"
          loading="lazy"
        />
      </div> */}
      <h1 className="text-4xl font-bold mb-2">
        Hi, my name is Arif Azfar<span className="wave">👋</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg text-justify">
        and I am a front-end developer who enjoys building cool stuff with React
        and TypeScript. I am currenty learning more about the backend world to
        grow into full-stack dev. Feel free to check out my projects and say hi!
      </p>
    </motion.section>
  );
};

export default Hero;
