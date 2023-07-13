import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectDetail from 'components/project/ProjectDetail';
import Navbar from '../navbar/Navbar';
import Resume from '../resume/Resume';

function App() {
  return (
    <>
      <Navbar />
      <div className="contanier">
        <Resume />
      </div>
    </>
  );
}

export default App;
