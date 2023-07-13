import React from 'react';
import './style.css';
import ProjectCard from './ProjectCard';
import InfoJSON from '../../assets/json/project.json';

function Projects() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <ProjectCard projectProps={item} />
    </li>
  ));

  return (
    <div className="projects inline">
      <div id="project" className="bookmark" />
      <h2>프로젝트</h2>
      <ul className="inline-list">{infoList}</ul>
    </div>
  );
}

export default Projects;

export interface ProjectInfo {
  id: number;
  name: string;
  summary: string;
  date: string;
  scale: string;
  role: string[];
  keyword: string[];
  trouble: string[];
  result: string;
  url: string;
}
