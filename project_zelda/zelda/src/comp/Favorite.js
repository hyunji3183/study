import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../App.css';
import Header from '../Header';
import Aside from '../Aside';

function Favorite() {
    const [data, setData] = useState([]);
    const { param } = useParams();
    const favorites = localStorage.getItem('fa') ? localStorage.getItem('fa').split(',') : [];

    const bodys = document.querySelector('body');
    bodys.classList.remove('detail');

    const url = {
        Creatures: '../db/botw/data/compendium/Creatures.json',
        Equipment: '../db/botw/data/compendium/Equipment.json',
        Materials: '../db/botw/data/compendium/Materials.json',
        Monsters: '../db/botw/data/compendium/Monsters.json',
        Treasure: '../db/botw/data/compendium/Treasure.json'
    };

    const test = () =>
    {
        favorites.map(cur => {
            const [category, id] = cur.split('-');
            axios.get(url[category])
                .then(res => {
                    let filteredData = res.data.filter(n => n.id == id)[0]
                    setData(data  => [...data, filteredData]);
                })
        });
    };

    useEffect(test, []);

    return (
        <>
            <Header />
            <main>
                <Aside />
                <div className='favorite'>
                    <div className='favorite_data'>
                        <ul>
                            {data.map((item) => (
                                <li key={item.id}>
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
