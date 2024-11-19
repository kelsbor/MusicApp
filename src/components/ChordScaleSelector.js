import { useState } from "react";
import Chord from "../utils/Chord";
const ChordScaleSelector = ({onClose, onSelect}) => {
    const [chord, setChord] = useState({
        chord: "I",
        quality: "major",
        key: "C"
    })

    const [scale, setScale] = useState({
        fundamental: "C",
        scale: "Ionian"
    })

    const [mode, setMode] = useState({
        chord: true,
        scale: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setChord((prevChord) => ({
            ...prevChord,
            [name]: value
        }))
    }
    
    const handleSubmit = () => {
        const notes = new Chord(chord.chord, chord.quality, chord.key).mount()
        console.log('Generated notes:', notes);
        onSelect(notes);
    }
    return (
        <div className="container p-5">
            <h2>Chord Control</h2>
            <p>Chord: {chord.chord}</p>
            <p>Quality: {chord.quality}</p>
            <p>Key: {chord.key}</p>
            <select className="form-select" name='chord' value={chord.chord} onChange={handleChange}>
                <option value="I">I</option>
                <option value="bII">bII</option>
                <option value="II">II</option>
                <option value="bIII">bIII</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="bV">bV</option>
                <option value="V">V</option>
                <option value="bVI">bVI</option>
                <option value="VI">VI</option>
                <option value="bVII">bVII</option>
                <option value="VII">VII</option>
            </select>
            <select className="form-select" name="quality" value={chord.quality} onChange={handleChange}>
                <option value="major">Major</option>
                <option value="minor">Minor</option>
                <option value="diminished">Diminished</option>
                <option value="augmented">Augmented</option>
                <option value="major7">Major7</option>
                <option value="major7aug">Major7+</option>
                <option value="minor7">Minor7</option>
                <option value="minormaj7">Minor(Maj7)</option>
                <option value="dom7">Dominant7</option>
                <option value="dom7aug">Dominant7+</option>
                <option value="half-diminished">Half-Diminished</option>
                <option value="fully-diminished">Fully-Diminished</option>
            </select>
            <select className="form-select" name="key" value={chord.key} onChange={handleChange}>
                <option value="C">C</option>
                <option value="C#">C#</option>
                <option value="D">D</option>
                <option value="D#">D#</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F#</option>
                <option value="G">G</option>
                <option value="G#">G#</option>
                <option value="A">A</option>
                <option value="A#">A#</option>
                <option value="B">B</option>
            </select>
            <button type="submit" onClick={handleSubmit}>Generate</button>
            <button type="button" onClick={onClose}>Close</button>
        </div>
    );
}

export default ChordScaleSelector