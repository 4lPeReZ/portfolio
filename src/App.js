import './App.css';
import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Utils/Themes.js'
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Experience />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Wrapper>
          <Skills />
          <Wrapper>
            <Education />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
