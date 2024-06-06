import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Languages from "./components/Language/Languages";
import MySkills from "./components/MySkills";
import Project from "./components/Projects/Project";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
        <Header />
        <Languages />
        <AboutMe />
        <MySkills />
        <Education />
        <Project />
        <Contact />
        <Footer />
    </main>
  );
}
