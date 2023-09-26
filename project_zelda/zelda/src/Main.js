import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import trailer from './videos/BOTW_trailer.mp4';
import trailer_BGM from './videos/BOTW_BGM.mp3'
import sheikah_slate from './img/search_button.png';
import sheikah_back from './img/openapp.png';

export default function Main() {
    const navigate = useNavigate();
    const [mute, setMute] = useState(false);
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const imageRef = useRef(null); // 이미지에 대한 ref 추가

    const openapp = (e) => {
        e.preventDefault();
        navigate('/Creatures');
    }

    const behind = () => {
        const playVideoElement = document.querySelector('.playVideo');
        if (playVideoElement) {
            playVideoElement.classList.add('behind');
        }
        // 이미지 숨김
        if (imageRef.current) {
            imageRef.current.style.display = 'none';
        }
        // 비디오 재생
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.play();
        }
    }

    return (
        <div className="intro">
            <div className='playVideo'>
                <p className='sheikah_slate'>
                    <img src={sheikah_slate} ref={imageRef} onClick={behind} />
                </p>
            </div>
            <div className="videobox">
                <video autoPlay loop onClick={openapp} ref={videoRef}>
                    <source src={trailer} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
