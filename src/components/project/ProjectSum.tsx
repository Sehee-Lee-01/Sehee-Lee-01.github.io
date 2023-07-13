import React from 'react';
import './style.css';
import ProjectSumCard from './ProjectSumCard';
import InfoJSON from '../../assets/json/project.json';

function ProjectSum() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <ProjectSumCard projectSumProps={item} />
    </li>
  ));

  return (
    <div className="sum">
      <ul className="inline-list">{infoList}</ul>
    </div>
  );
}

export default ProjectSum;
