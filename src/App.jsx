import { useRef } from 'react';
import { Footer, Header } from './components';
import { AboutMe, Contact, Hero, Projects, TechStack } from './sections';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techStackRef = useRef(null);

  const refs = [aboutRef, projectsRef, contactRef, techStackRef];

  return (
    <>
      <main className="bg-gradient-to-br text-white from-black  via-blue-500 to-blue-950 h-full font-poppins">
        <Header refs={refs} />
        <Hero />
        <AboutMe aboutRef={aboutRef} />
        <TechStack techStackRef={techStackRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </main>
    </>
  );
}

export default App;
