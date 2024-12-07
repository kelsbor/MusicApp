import React from "react";
const AudioPlayer = ({ notes, playmode }) => {
    const noteFiles = [
        "c4.mp3", "c-4.mp3", "d4.mp3", "d-4.mp3", "e4.mp3",
        "f4.mp3", "f-4.mp3", "g4.mp3", "g-4.mp3", "a4.mp3",
        "a-4.mp3", "b4.mp3",
    ];

    const playNote = (note) => {
        const audio = new Audio(`/audio/piano/${noteFiles[note]}`);
        audio.play();
    };

    const play = () => {
        (playmode) ? playChord() : playArpeggio();
    }

    const playChord = () => {
        if (!notes || notes.length === 0) return;
        notes.forEach((note) => playNote(note));
    };

    const playArpeggio = () => {
        if (!notes || notes.length === 0) return;
        notes.forEach((note, index) => {
            setTimeout(() => playNote(note), index * 300); // 300ms between notes
        });
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={play}><i class="bi bi-play"></i></button>
        </div>
    );
};

export default AudioPlayer;