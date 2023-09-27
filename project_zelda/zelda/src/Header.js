import React, { useState, useRef } from 'react';
import note from './img/note.png';
import note_none from './img/note_none.png';
import { Link, useLocation } from 'react-router-dom';
import hateno_BGM from './videos/Hateno_Village.mp3';

function Header() {
    const location = useLocation();
    const pathname = location.pathname;
    const routeName = pathname.replace('/', '');

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioElementRef = useRef(new Audio(hateno_BGM));

    const toggleAudio = () => {
        const audioElement = audioElementRef.current;
        if (audioElement.paused) {
            audioElement.play();
            setIsAudioPlaying(true);
        } else {
            audioElement.load();
            setIsAudioPlaying(false);
        }
    };

    return (
        <header>
            <div className="head">
                <h2>{routeName}</h2>
                <p>
                    <img src={isAudioPlaying ? note : note_none} onClick={toggleAudio} alt="Audio Control" />
                </p>
            </div>
        </header>
    );
}

export default Header;
