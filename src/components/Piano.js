import React, { useState, useEffect, useMemo} from 'react';

const Piano = ({ notes = [] }) => {
    console.log('Received notes:', notes);
    const [highlightedNotes, setHighlightedNotes] = useState(notes);

    useEffect(() => {
        // console.log('Received notes:', notes);
        setHighlightedNotes(notes);
    }, [notes]);


    const getKeyFill = (noteIndex) => {
        console.log('Checking note index:', noteIndex);
        console.log('Highlighted notes:', highlightedNotes);
        
        if (highlightedNotes && highlightedNotes.includes(noteIndex)) {
            console.log(`Highlighting note: ${noteIndex}`);
            return 'blue'; // Highlighted color
        }
        
        // Determine the default color based on whether the note is black or white
        return (noteIndex % 12 === 1 || noteIndex % 12 === 3 || 
                noteIndex % 12 === 6 || noteIndex % 12 === 8 || 
                noteIndex % 12 === 10) ? 'black' : 'white';
    };

    const keyFills = useMemo(() => {
        const fills = [];
        for (let i = 0; i < 12; i++) {
          fills.push(getKeyFill(i));
        }
        return fills;
      }, [highlightedNotes]);

    
    return (
        <svg width="560" height="120" xmlns="http://www.w3.org/2000/svg">
            {/* White keys */}
            <rect id="C" x="0" y="0" width="40" height="120" fill={keyFills[0]} stroke="black" />
            <rect id="D" x="40" y="0" width="40" height="120" fill={keyFills[2]} stroke="black" />
            <rect id="E" x="80" y="0" width="40" height="120" fill={keyFills[4]} stroke="black" />
            <rect id="F" x="120" y="0" width="40" height="120" fill={keyFills[5]} stroke="black" />
            <rect id="G" x="160" y="0" width="40" height="120" fill={keyFills[7]} stroke="black" />
            <rect id="A" x="200" y="0" width="40" height="120" fill={keyFills[9]} stroke="black" />
            <rect id="B" x="240" y="0" width="40" height="120" fill={keyFills[11]} stroke="black" />
            
            {/* Black keys */}
            <rect id="C#" x="25" y="0" width="30" height="80" fill={keyFills[1]} />
            <rect id="D#" x="65" y="0" width="30" height="80" fill={keyFills[3]} />
            <rect id="F#" x="145" y="0" width="30" height="80" fill={keyFills[6]} />
            <rect id="G#" x="185" y="0" width="30" height="80" fill={keyFills[8]} />
            <rect id="A#" x="225" y="0" width="30" height="80" fill={keyFills[10]} />
        </svg>
    );
};

export default Piano;