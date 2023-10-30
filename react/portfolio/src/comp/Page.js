import '../page.scss';
import React, { useEffect, useState } from 'react'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import top from '../img/top.png';


function Page() {
    const [position, setPosition] = useState(window.pageYOffset);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const moving = window.pageYOffset;
            setOpen(position > moving);
            setPosition(moving);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);

    return (
        <>
            <header className={open ? 'on' : ''}>
                <div className='headerbox'>
                    <h1><img src={logo} alt="main_logo" /></h1>
                    <nav>
                        <Link to="/about"> 	&#60;About /&#62;</Link>
                        <Link to="/skill"> &#60;Skill /&#62;</Link>
                        <Link to="/project"> &#60;Project /&#62;</Link>
                        <Link to="/contact"> &#60;Contact /&#62;</Link>
                    </nav>
                </div>
            </header>
            {/*
                <Contact /> */}
            <About />
            <Skill />
            <Project />
            {/* <aside>
                <img src={top} />
            </aside> */}
        </>
    )
}

export default Page