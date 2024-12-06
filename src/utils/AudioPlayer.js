import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AudioPlayer = ({ notes, playmode }) => {
    const [audioBuffers, setAudioBuffers] = useState([]);
    const noteFiles = [
        "c4.mp3", "c-4.mp3", "d4.mp3", "d-4.mp3", "e4.mp3",
        "f4.mp3", "f-4.mp3", "g4.mp3", "g-4.mp3", "a4.mp3",
        "a-4.mp3", "b4.mp3",
    ];

    useEffect(() => {
        const buffers = noteFiles.map((file) => {
            const audio = new Audio(`/audio/piano/${file}`);
            return audio;
        });
        setAudioBuffers(buffers);
    },[]);

    const playNote = (note) => {
        if (audioBuffers[note]) {
            const clonedAudio = audioBuffers[note].cloneNode(); // Clone to play multiple instances
            clonedAudio.play().catch((error) =>
                console.error("Playback error:", error)
            );
        }
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
            <button onClick={play}>Play</button>
        </div>
    );
};

export default AudioPlayer;