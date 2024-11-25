import About from './sections/About.jsx';
import Clients from './sections/Clients.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Hero from './sections/Hero.jsx';
import MotivationGoal from './sections/MotivationGoal.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <MotivationGoal />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
