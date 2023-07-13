import React from 'react';
import './style.css';
import ProjectSum from './ProjectSum';
import ProjectDetail from './ProjectDetail';

const { useState } = React;

function Projects() {
  const [visibleSum, setVisibleSum] = useState(true);
  const sum = '🔎 세부 정보 보기';
  const detail = '🗺️ 요약해서 보기';
  return (
    <div className="projects">
      <div id="project" className="bookmark" />
      <h2>프로젝트</h2>
      <a href="/#projects" onClick={() => setVisibleSum(!visibleSum)}>
        {visibleSum ? sum : detail}
      </a>
      {visibleSum ? <ProjectSum /> : <ProjectDetail />}
    </div>
  );
}

export default Projects;
