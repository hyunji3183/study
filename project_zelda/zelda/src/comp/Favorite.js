import React, { useEffect, useState } from 'react';
import truffle from '../img/big_hearty_truffle.png';

import '../App.css';
import Header from '../Header';
import Aside from '../Aside';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Favorite() {
    const [data, setData] = useState([]);
    const { param } = useParams();

    const bodys = document.querySelector('body');
    bodys.classList.remove('detail');

    const url = {
        Creatures: '../db/botw/data/compendium/Creatures.json',
        Equipment: '../db/botw/data/compendium/Equipment.json',
        Materials: '../db/botw/data/compendium/Materials.json',
        Monsters: '../db/botw/data/compendium/Monsters.json',
        Treasure: '../db/botw/data/compendium/Treasure.json',
    };

    useEffect(() => {
        if (param) {
            const [category, id] = param.split('-');
            axios.get(url[category])
                .then(res => {
                    const filteredData = res.data.filter(item => favoriteIds.includes(item.id));
                    setData(filteredData);
                    console.log(filteredData);
                })
        }
    }, [param]);

    const favoriteIds = localStorage.getItem('fa') ? localStorage.getItem('fa').split(',') : [];

    return (
        <>
            <Header />
            <main>
                <Aside />
                <div className='favorite'>
                    <div className='favorite_data'>
                        <ul>
                            {data.map((item, index) => (
                                <li key={index}>
                                    <figure>
                                        <a><img src={item.image} alt={item.name} /></a>
                                        <figcaption>
                                            <p>{item.name}</p>
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Favorite;
