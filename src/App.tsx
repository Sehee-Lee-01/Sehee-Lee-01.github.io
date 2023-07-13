import React from 'react';
import Awards from 'components/award/Awards';
import Educations from 'components/education/Education';
import Activities from 'components/activity/Activities';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Projects from './components/project/Projects';
import Certificates from './components/certificate/Certificates';
import './App.css';

function App() {
  return (
    <div className="app">
      <header id="app-header">
        <Navbar />
      </header>
      <body id="app-body">
        <Contact />
        <Projects />
        <Certificates />
        <Awards />
        <Activities />
        <Educations />
      </body>
    </div>
  );
}

export default App;
