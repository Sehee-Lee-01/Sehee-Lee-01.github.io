import React from 'react';
import Awards from 'components/award/Awards';
import Educations from 'components/education/Education';
import Activities from 'components/activity/Activities';
import Contact from '../../components/contact/Contact';
import Projects from '../../components/project/Projects';
import Certificates from '../../components/certificate/Certificates';

function Resume() {
  return (
    <div id="resume">
      <Contact />
      <Projects />
      <Activities />
      <Awards />
      <Certificates />
      <Educations />
    </div>
  );
}

export default Resume;
