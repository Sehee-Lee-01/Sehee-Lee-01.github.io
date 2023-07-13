import React from 'react';
import './style.css';
import ProjectDetailCard from './ProjectDetailCard';
import InfoJSON from '../../assets/json/project_detail.json';

function ProjectDetail() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <ProjectDetailCard projectDetailProps={item} />
    </li>
  ));

  return (
    <div id="detail">
      <div id="project-detail" className="bookmark" />
      <ul className="inline-list">{infoList}</ul>
    </div>
  );
}

export default ProjectDetail;
