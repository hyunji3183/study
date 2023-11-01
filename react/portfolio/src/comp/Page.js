import '../page.scss';
import React, { useEffect, useState } from 'react';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import logo from '../img_src/logo.png';
import top from '../img_src/top.png';

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

    return (
        <>
            <header className={isHeaderVisible ? 'on' : ''}>
                <div className='headerbox'>
                    <h1><img src={logo} alt="main_logo" /></h1>
                    <nav>
                        <Link to="/about"> &#60;About /&#62;</Link>
                        <Link to="/skill"> &#60;Skill /&#62;</Link>
                        <Link to="/project"> &#60;Project /&#62;</Link>
                        <Link to="/contact"> &#60;Contact /&#62;</Link>
                    </nav>
                </div>
            </header>
            <About />
            <Skill />
            <Project />
            <Contact />
            {/* <aside>
                <img src={top} />
            </aside> */}
            
        </>
    //     <>
    //     <header className={isHeaderVisible ? 'on' : ''}>
    //         <div className='headerbox'>
    //             <h1><img src={logo} alt="main_logo" /></h1>
    //             <nav>
    //                 <Link to="about" smooth={true} duration={500}> &#60;About /&#62;</Link>
    //                 <Link to="skill" smooth={true} duration={500}> &#60;Skill /&#62;</Link>
    //                 <Link to="project" smooth={true} duration={500}> &#60;Project /&#62;</Link>
    //                 <Link to="contact" smooth={true} duration={500}> &#60;Contact /&#62;</Link>
    //             </nav>
    //         </div>
    //     </header>

    //     <Element name="about">
    //         <About />
    //     </Element>
    //     <Element name="skill">
    //         <Skill />
    //     </Element>
    //     <Element name="project">
    //         <Project />
    //     </Element>
    //     <Element name="contact">
    //         <Contact />
    //     </Element>
    // </>
    );
}

export default Page;
