import React from 'react';
import './App.css';
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
