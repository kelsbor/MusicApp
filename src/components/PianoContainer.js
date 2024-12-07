import Piano from './Piano';
import '../styles/Piano.css';
import React, { useState } from 'react';

const PianoContainer = () => {
  const [pianos, setPianos] = useState([
    { id: 1, occupied: false },
    { id: 2, occupied: false }
  ]);

  const handleAddPiano = () => {
    setPianos((prevPianos) => [
      ...prevPianos,
      { id: prevPianos.length + 1, occupied: true }
    ]);
  };

  const handleRemovePiano = (id) => {
    setPianos((prevPianos) => prevPianos.filter((piano) => piano.id !== id));
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark p-3">
        <button className="btn btn-primary m-2 add-piano-btn" onClick={handleAddPiano}>
        <i class="bi bi-plus-circle-fill"></i> Piano
        </button>
        <button className="btn btn-primary m-2 add-piano-btn" >
          <i class="bi bi-play-fill"></i>
        </button>
      </nav>
      
      <div>
      <div className="grid-container">
        {pianos.map((piano) => (
          <div key={piano.id} className="grid-item">
            <Piano />
            <button
              className="btn btn-primary remove-piano-btn"
              onClick={() => handleRemovePiano(piano.id)}
            >
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PianoContainer;