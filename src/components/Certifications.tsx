import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    image: "reactjs.jpg",
    title: "React - The Complete Guide 2025",
    date: "Udemy - Feb 2025",
  },
  {
    image: "javascript.jpg",
    title: "Introduction to JavaScript",
    date: "Great Learning Academy - June 2023",
  },
  {
    image: "html.jpg",
    title: "Front End Development - HTML",
    date: "Great Learning Academy - May 2023",
  },
  {
    image: "css.jpg",
    title: "Front End Development - CSS",
    date: "Great Learning Academy - May 2023",
  },
];

const Certifications = () => {
  return (
    <motion.section
      className="py-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div className="border rounded-lg p-4 shadow-sm">
            <img
              src={`/certs/${cert.image}`}
              alt={cert.title}
              className="rounded mb-2"
              loading="lazy"
            />
            <h3 className="text-lg font-medium">{cert.title}</h3>
            <p className="text-md text-gray-500">{cert.date}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
