import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import { Education, Experience } from './sections/EducationExperience.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import SocialMediaTree from './components/SocialMediaTree.jsx';
import Services from './sections/Services.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <SocialMediaTree />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
