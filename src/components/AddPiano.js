import Piano from './Piano';
import '../styles/Piano.css';
import React, { useState } from 'react';

const AddPiano = () => {
  const [pianos, setPianos] = useState([
    { id: 1, occupied: false },
    { id: 2, occupied: false }
  ]);

  const handleAddPiano = (id) => {
    setPianos((prevPianos) =>
      prevPianos.map((piano) => {
        if (piano.id === id) {
          return { ...piano, occupied: true };
        }
        return piano;
      })
    );
  };

  const handleRemovePiano = (id) => {
    setPianos((prevPianos) =>
      prevPianos.map((piano) => {
        if (piano.id === id) {
          return { ...piano, occupied: false };
        }
        return piano;
      })
    );
  };

  return (
    <div className="grid-container">
      {pianos.map((piano) => (
        <div key={piano.id} className="grid-item">
          {piano.occupied ? (
            <Piano />
          ) : (
            <button onClick={() => handleAddPiano(piano.id)}>Add Piano</button>
          )}
          {piano.occupied && (
            <button onClick={() => handleRemovePiano(piano.id)}>Remove</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddPiano;