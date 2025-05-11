import { Route, Routes } from "react-router-dom";

import Certifications from "./components/Certifications";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-6 max-w-5xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Experiences />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
