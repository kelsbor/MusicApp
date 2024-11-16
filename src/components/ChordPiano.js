import { useState } from 'react';

import Piano from './Piano';
import Chord from '../utils/Chord.js';
import ChordControl from './ChordControl';

const ChordPiano = () => {
    const [chord, setChord] = useState({
        chord: 'I',
        quality: 'major',
        key: 'C'
    });  

    const handleChordChange = (event) => {
        const { name, value } = event.target;
        setChord((prevChord) => ({ ...prevChord, [name]: value }));
        console.log(chord)
    };

    return (
        <div>
            {<Piano notes={new Chord(chord.chord, chord.quality, chord.key).mount()} />} 
            {<ChordControl chord={chord} handleChange={handleChordChange} />} 
        </div>
    );
};

export default ChordPiano;