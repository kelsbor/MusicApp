import { useState } from "react";
import Chord from "../utils/Chord";
import Scale from "../utils/Scale";
const ChordScaleSelector = ({onClose, onSelect}) => {
    const [chord, setChord] = useState({
        chord: "I",
        quality: "major",
        key: "C"
    })

    const [scale, setScale] = useState({
        fundamental: "C",
        scale: "ionian"
    })

    const [mode, setMode] = useState({
        chord: true,
        scale: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (mode.chord) {
            setChord((prevChord) => ({
                ...prevChord,
                [name]: value
            }))
        }
        else {
            console.log(scale)
            setScale((prevScale) => ({
                ...prevScale,
                [name]: value
            }))
        }
        
    }
    
    const handleSubmit = () => {
        if (mode.chord) {
            const notes = new Chord(chord.chord, chord.quality, chord.key).mount()
            console.log('Generated notes:', notes);
            onSelect(notes);
        } else {
            const notes = new Scale(scale.scale, scale.fundamental).transpose()
            console.log(notes)
            onSelect(notes)    
        }
        
    } 

    const handleTabChange = (tab) => {
        setMode({
            chord: tab === 'chord',
            scale: tab === 'scale'
        })
    }
    return (
        <div className="container p-5">
             <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className={`nav-link ${mode.chord ? 'active' : ''}`} onClick={() => handleTabChange('chord')}>Chord</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${mode.scale ? 'active' : ''}`} onClick={() => handleTabChange('scale')}>Scale</button>
                </li>
            </ul>

            {mode.chord ? (
            <>
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
        </>
        ) : (
            <>
                <h2>Scale Control</h2>
                <p>Fundamental: {scale.fundamental}</p>
                <p>Scale: {scale.scale}</p>
                <select className="form-select" name="fundamental" value={scale.fundamental} onChange={handleChange}>
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
                <select className="form-select" name="scale" value={scale.scale} onChange={handleChange}>
                    <option value="ionian">Ionian</option>
                    <option value="dorian">Minor</option>
                    <option value="phrygian">Phrygian</option>
                    <option value="lydian">Lydian</option>
                    <option value="mixolydian">Mixolydian</option>
                    <option value="aeolian">Aeolian</option>
                    <option value="locrian">Locrian</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Generate</button>
                <button type="button" onClick={onClose}>Close</button>
            </>
        )}
        </div>
    );
}

export default ChordScaleSelector