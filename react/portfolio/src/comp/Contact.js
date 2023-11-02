import React, { useState } from 'react';
import QR from '../img_src/kakao_QR.png';
import contact_me from '../img_src/contact_me.png';
import Inview from './Inview';

function Contact() {
    const [isFlipped, setIsFlip] = useState(false);

    const handleFlipClick = () => {
        setIsFlip(!isFlipped);
    };



    return (
        <section className='contact_page'>
            <div className='color_box'>
                <p>contact</p>
            </div>
            <div className={`flip frame_in ${isFlipped ? 'on' : ''}`} onClick={handleFlipClick}>
            <Inview>
                    <div className='front'>
                        <p><img src={contact_me} alt='contact_me' /></p>
                    </div>
                    <div className='back'>
                        <div className='con_left'>
                            <b>&#60;hyun ji cho /&#62;</b>
                            <div className='con_text'>
                                <div className='email'>
                                    <p>Email</p>
                                    <span>chj3183@gmail.com</span>
                                </div>
                                <div className='Github'>
                                    <p>email</p>
                                    <span>https://github.com/hyunji3183</span>
                                </div>
                            </div>
                        </div>
                        <div className='con_right'>
                            <p> <img src={QR} alt='kakao_qr' /></p>
                        </div>
                    </div>
            </Inview>
                </div>
        </section>
    );
}

export default Contact;
