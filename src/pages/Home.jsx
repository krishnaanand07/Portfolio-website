import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import GitHub from "../components/GitHub";
import CodingProfiles from "../components/CodingProfiles";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <GitHub />
      <CodingProfiles />
      <Resume />
      <Contact />
    </>
  );
}
