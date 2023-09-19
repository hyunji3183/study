import React, { useState } from 'react'
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

function Aside({ onSortRequest }) {
    const toggle = () => {
        const togglemenu = document.querySelector('.menu')
        togglemenu.classList.toggle('on')
    }

    const click_back = () => {
        const categoryBtn = document.querySelectorAll('.category a');
        let num = 0;

        window.event.target.classList.toggle('active');

        // categoryBtn.forEach(function (ele, key) {

        //         this.classList.toggle('active');
        //         if (num != key) {
        //             categoryBtn[num].classList.remove('active');
        //         }
        //         num = key;
        // })        
    }
    const [isSorted, setIsSorted] = useState(false);

    const toggleSort = () => {
        setIsSorted(!isSorted);
        onSortRequest(!isSorted); 
    };

    return (
        <aside>
            <div className="category">
                <Link to="/Creatures"><img src={creatures} alt="" onClick={click_back} /></Link>
                <Link to="/monsters"><img src={monsters} alt="" onClick={click_back} /></Link>
                <Link to="/materials"><img src={materials} alt="" onClick={click_back} /></Link>
                <Link to="/equipment"><img src={equipmentd} alt="" onClick={click_back} /></Link>
                <Link to="/treasure"><img src={treasure} alt="" onClick={click_back} /></Link>
            </div>
            <div className="toggle">
                <div className='menu'>
                    <Link to="/Favorite"><img src={favorite} alt="" /></Link>
                    <a onClick={toggleSort}><img src={sort} alt="" /></a>
                    <Link to="/Search"><img src={search} alt="" /></Link>
                </div>
                <a onClick={toggle}><img src={triforce} alt="" /></a>
            </div>
        </aside>
    )
}

export default Aside