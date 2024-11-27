import { useState } from "react";
import Chord from "../utils/Chord";
import Scale from "../utils/Scale";
import Negative from "../utils/Negative";
import ScaleTab from "./tabs/ScaleTab";
import ChordTab from "./tabs/ChordTab";
import NegativeTab from "./tabs/NegativeTab";

const Selector = ({onClose, onSelect, highlightedNotes}) => {
    const [chord, setChord] = useState({
        chord: "I",
        quality: "major",
        key: "C"
    })

    const [scale, setScale] = useState({
        fundamental: "C",
        scale: "ionian"
    })

    const [axis, setAxis] = useState({
        axis: 3.5,
        negative: false
    });

    const [tab, setTab] = useState('chord')

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (tab === 'chord') {
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
        if (tab === 'chord') {
            const notes = new Chord(chord.chord, chord.quality, chord.key).mount()
            console.log('Generated notes:', notes);
            onSelect(notes);
        } 
        if (tab === 'scale') {
            const notes = new Scale(scale.scale, scale.fundamental).transpose()
            console.log(notes)
            onSelect(notes)    
        }
        if (tab === 'negative') {
            const notes = new Negative(highlightedNotes, axis.axis).calculateNegative()
            console.log(notes)
            onSelect(notes)
        }
    } 

    const handleTabChange = (tab) => {
        setTab(tab)
    }

    return (
        <div className="container p-5">
             <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className={`nav-link ${tab === 'chord' ? 'active' : ''}`} onClick={() => handleTabChange('chord')}>Chord</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${tab  === 'scale' ? 'active' : ''}`} onClick={() => handleTabChange('scale')}>Scale</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${tab  === 'negative' ? 'active' : ''}`} onClick={() => handleTabChange('negative')}>Negative</button>
                </li>
            </ul>

            {tab === 'chord' && 
                <ChordTab 
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onClose={onClose}
                    chord={chord}
                />
            }

            {tab === 'scale' && 
                <ScaleTab 
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onClose={onClose}
                    scale={scale}
                />
            }

            {tab === 'negative' && 
                <NegativeTab
                    axis={axis}
                    onSubmit={handleSubmit}
                    onClose={onClose}
                />
            }

        </div>
    );
}

export default Selector