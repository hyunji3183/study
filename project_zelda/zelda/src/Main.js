import React from 'react';
import { useNavigate } from 'react-router-dom';

import trailer from './videos/BOTW_trailer.mp4';
import trailer_BGM from './videos/BOTW_BGM.mp3'

export default function Main() {
    const navigate = useNavigate();

    const openapp = (e) => {
        e.preventDefault();
        navigate('/Creatures');
    }

    return (
        <div className="intro">
            <div className="videobox">
                <video autoPlay loop={true} muted={true} onClick={openapp}>
                    <source src={trailer} type="video/mp4" />
                </video>
            </div>
            <audio
                src={trailer_BGM}
                autoPlay={true} loop={true} muted={false}>
            </audio>
        </div>
    );
}
