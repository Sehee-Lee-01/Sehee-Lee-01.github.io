import React from 'react';
import './style.css';
import ProjectlCard from './ProjectCard';
import InfoJSON from '../../assets/json/project.json';

function Projects() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <ProjectlCard projectProps={item} />
    </li>
  ));
  return (
    <div className="projects">
      <div id="project" className="bookmark" />
      <h2>프로젝트</h2>
      <div id="detail">
        <div id="project-detail" className="bookmark" />
        <ul className="inline-list">{infoList}</ul>
      </div>
    </div>
  );
}

export default Projects;
