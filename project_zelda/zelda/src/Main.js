import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import trailer from './videos/breath_of_the_wild_1St_trailer.mp4';
import logo from './img/Zelda_main_logo.png';

export default function Main() {
    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);
    const history = useNavigate();



    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startX && endX) {
            const difference = startX - endX;
            if (difference > 50) {
                // 스와이프 왼쪽으로 밀면 다른 페이지로 이동
                history('/Home');
            }
        }
        setStartX(null);
        setEndX(null);
    };


    return (
        <div
            className="intro"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="videobox">
                <video autoPlay loop={true} muted={true}>
                    <source src={trailer} type="video/mp4" />
                </video>
            </div>
            <div className="logo">
                <p>
                    <img src={logo} alt="" />
                </p>
            </div>
        </div>
    )
}
