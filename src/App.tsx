import About from "./components/About";
import Certifications from "./components/Certifications";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <main className="px-6 max-w-5xl mx-auto">
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
