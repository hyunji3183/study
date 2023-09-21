import React from 'react';
import { useNavigate } from 'react-router-dom';

import trailer from './videos/breath_of_the_wild_1St_trailer.mp4';
import logo from './img/Zelda_main_logo.png';

export default function Main() {
    const navigate = useNavigate();

    const nextpage = () => {
        navigate('/Creatures');
    }

    return (
        <div className="intro">
            <div className="videobox">
                <video autoPlay loop={true} muted={true}>
                    <source src={trailer} type="video/mp4" />
                </video>
            </div>
            <div className="logo">
                <p>
                    <img src={logo} alt="main_logo" onClick={nextpage} />
                </p>
            </div>
        </div>
    );
}
