import '../page.scss';
import React, { useEffect, useState } from 'react';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import { Link } from 'react-scroll';
import logo from '../img_src/logo.png';
import top from '../img_src/top.png';
import { Element } from 'react-scroll';

function Page() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);

            if (currentPosition > scrollPosition) {
                setIsHeaderVisible(true); // Scroll down
            } else {
                setIsHeaderVisible(false); // Scroll up or at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const [onmenu, setOnmenu] = useState(false);


    const open_menu = () => {
        setOnmenu(!onmenu);
    }


    return (
        <>
            <header className={isHeaderVisible ? 'on' : ''}>
                <div className='headerbox'>
                    <h1><img src={logo} alt="main_logo" /></h1>
                    <span className="material-symbols-rounded" onClick={open_menu}>
                        menu
                    </span>
                    <nav className={`${onmenu ? 'on' : ''}`}>
                        <Link to="about" smooth={true} duration={500} spy={true}> &#60;About /&#62;</Link>
                        <Link to="skill" smooth={true} duration={500} spy={true}> &#60;Skill /&#62;</Link>
                        <Link to="project" smooth={true} duration={500} spy={true}> &#60;Project /&#62;</Link>
                        <Link to="contact" smooth={true} duration={500} spy={true}> &#60;Contact /&#62;</Link>
                    </nav>
                </div>
            </header>
            <About />
            <Skill />
            <Project />
            <Contact />
            <div className='bubble_box'>
                <span className='blue_ball b4'></span>
                <span className='blue_ball b7'></span>
                <span className='blue_ball b3'></span>
                <span className='blue_ball b1'></span>
                <span className='blue_ball b2'></span>
                <span className='blue_ball b5'></span>
                <span className='blue_ball b6'></span>
                <span className='blue_ball b4'></span>
                <span className='blue_ball b1'></span>
                <span className='blue_ball b5'></span>
                <span className='blue_ball b3'></span>
                <span className='blue_ball b7'></span>
                <span className='blue_ball b2'></span>
                <span className='blue_ball b6'></span>
                <span className='blue_ball b5'></span>
            </div>
        </>
    );
}

export default Page;
