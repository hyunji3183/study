import React from 'react'
import home from './img/icon_home.png';
import heart from './img/icon_favorite_none.png';
import { Link } from 'react-router-dom';

function Header() {
    console.log();
    return (
        <header>
            <div className="head">
                <Link to="/"><img src={home} alt="" /></Link>
                <h2>creatures</h2>
                <a><img src={heart} alt="heart" className="heart" /></a>
            </div>
        </header>
    )
}

export default Header