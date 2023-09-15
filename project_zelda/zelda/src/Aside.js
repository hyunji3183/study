import React from 'react'
import creatures from './img/icon_1.png';
import monsters from './img/icon_2.png';
import materials from './img/icon_3.png';
import equipmentd from './img/icon_4.png';
import treasure from './img/icon_5.png';
import favorite from './img/favorite.png';
import sort from './img/sort.png';
import search from './img/search.png';
import triforce from './img/icon_triforce.png';
import { Link } from 'react-router-dom';

function Aside() {
    return (
        <aside>
            <div className="category">
                <Link to="/Creatures"><img src={creatures} alt="" /></Link>
                <Link to="/monsters"><img src={monsters} alt="" /></Link>
                <Link to="/materials"><img src={materials} alt="" /></Link>
                <Link to="/equipment"><img src={equipmentd} alt="" /></Link>
                <Link to="/treasure"><img src={treasure} alt="" /></Link>
            </div>
            <div className="toggle">
                <div>
                    <Link to="/Favorite"><img src={favorite} alt="" /></Link>
                    <a><img src={sort} alt="" /></a>
                    <Link to="/Search"><img src={search} alt="" /></Link>
                </div>
                <a><img src={triforce} alt="" /></a>
            </div>
        </aside>
    )
}

export default Aside