import './App.css';
import React, { useState } from 'react'; 
import Chord from './components/Chord.js';
import Piano from './components/Piano.js' 

function App() {
    return (
        <div>
            {/* Render a two-octave piano with highlighted notes */}
            <Piano notes={[0,2,4]} />

            {/* Render a default one-octave piano without highlighted notes */}
            
        </div>
    );
}

export default App;
