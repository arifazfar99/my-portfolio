import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <motion.section
      className="pb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-2">Career</h2>
      <ul className="space-y-7 max-w-2xl">
        <li>
          <div className="flex justify-center">
            <img
              src="/career/ust-logo.jpeg"
              alt="UST Global Sdn. Bhd."
              width={200}
              height={200}
              className="mb-2 border rounded-lg"
            />
          </div>
          <strong className="text-xl">
            Software Engineer @ UST Global (Malaysia) Sdn. Bhd. <br />{" "}
          </strong>
          <p className="font-semibold">April 2024 - Present</p>
          <p className="text-lg text-justify">
            At UST, I have been working on some pretty interesting internal
            applications. One of them is a sports event management app where I
            built the front-end using React and set up role-based access
            controls. I also worked on a multilingual translation app using
            React and integrated it with Hugging Face for real-time
            translations. It’s been fun diving into both front-end and a bit of
            backend with Node.js!
          </p>
        </li>
        <hr className="my-8" />
        <li>
          <div className="flex justify-center">
            <img
              src="/career/polarisaura-logo.png"
              alt="Polaris Aura Sdn. Bhd."
              width={200}
              height={200}
              className="mb-2 bg-black p-3 border rounded-lg"
            />
          </div>
          <strong className="text-xl">
            Junior JavaScript Developer @ Polaris Aura Sdn. Bhd.
          </strong>
          <p className="font-semibold">July 2023 - April 2024</p>
          <p className="text-lg text-justify">
            At Polaris Aura, I built responsive web apps for e-commerce using
            React. I focused a lot on improving performance — like cutting down
            load times with code splitting. I also used Material UI to keep the
            designs clean and consistent. It was a great experience working
            closely with clients and collaborating daily with the dev team.
          </p>
        </li>
        <hr className="my-8" />
        <li>
          <div className="flex justify-center">
            <img
              src="/career/zcity-logo.jpg"
              alt="Polaris Aura Sdn. Bhd."
              width={200}
              height={200}
              className="mb-2 border rounded-lg"
            />
          </div>
          <strong className="text-xl">
            Junior Front-end Developer @ ZCity Sdn. Bhd.
          </strong>
          <p className="font-semibold">October 2022 - December 2022</p>
          <p className="text-lg text-justify">
            My first real dev role! I worked with React Native to build features
            for a mobile app. I created reusable components and learned a ton
            about working in Agile teams and using GitLab for version control.
            It was a short gig, but it really helped me get comfortable with
            real-world development.
          </p>
        </li>
        <hr className="my-8" />
      </ul>
    </motion.section>
  );
};

export default Experiences;
