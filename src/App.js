import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './sections/Home';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyle';

function App() {
  const [sectionKey, setSectionKey] = useState(0);

  const handleSetActive = () => {
    setSectionKey(prevKey => prevKey + 1);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar handleSetActive={handleSetActive} />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="resume" key={sectionKey}>
        <Resume />
      </Element>
      <Element name="projects" key={sectionKey}>
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Router>
  );
}

export default App;
