import React, { memo } from "react";
const ChordControl = memo(({chord, handleChange}) => {
    return (
        <div className="container p-5">
            <h2>Chord Control</h2>
            <p>Chord: {chord.chord}</p>
            <p>Quality: {chord.quality}</p>
            <p>Key: {chord.key}</p>
            <select className="form-select" name='chord' onChange={handleChange}>
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
            <select className="form-select" name="quality" onChange={handleChange}>
                <option value="major">major</option>
                <option value="minor">minor</option>
            </select>
            <select className="form-select" name="key" onChange={handleChange}>
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
        </div>
    );
})

export default ChordControl