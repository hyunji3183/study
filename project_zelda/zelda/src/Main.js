import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import trailer from './videos/BOTW_trailer.mp4';
import skip from './img/skip_btn.png';
import notice from './img/notice.png';

export default function Main() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);


    // useEffect(() => {
    //     const audioElement = new Audio(hateno_BGM);
    //     audioElement.pause();
    // }, []);




const openapp = (e) => {
    e.preventDefault();
    navigate('/Creatures');
}

const behind = (type) => {
    console.log(type);
    const playVideoElement = document.querySelector('.playVideo');
    const skipBtn = document.querySelector('.skip');
    const videoElement = videoRef.current;
    switch (type) {
        case 'on':
            videoElement.muted = false;
            break;
        default:
            videoElement.muted = true;
    }
    playVideoElement.classList.add('behind');
    skipBtn.classList.add('on');
    videoElement.play();
}

useEffect(() => {
    return () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.pause();
        }
    };
}, []);

return (
    <div className="intro">
        <div className='playVideo'>
            <p className='sheikah_slate'>
                <img src={notice} ref={imageRef} />
            </p>
            <div className='soundtxt' ref={textRef}>
                <span className='on' onClick={() => { behind('on') }}>on</span>
                <span className='bar'>|</span>
                <span className='off' onClick={() => { behind('off') }}>off</span>
            </div>
        </div>
        <div className="videobox">
            <video autoPlay loop ref={videoRef}>
                <source src={trailer} type="video/mp4" />
            </video>
            <p className='skip'><img src={skip} onClick={openapp} /></p>
        </div>
    </div>
);
}
