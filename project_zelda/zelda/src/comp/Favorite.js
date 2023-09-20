import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../App.css';
import Header from '../Header';
import Aside from '../Aside';

function Favorite() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const bodys = document.querySelector('body');
    bodys.classList.remove('detail');

    const url = {
        Creatures: '../db/botw/data/compendium/Creatures.json',
        Equipment: '../db/botw/data/compendium/Equipment.json',
        Materials: '../db/botw/data/compendium/Materials.json',
        Monsters: '../db/botw/data/compendium/Monsters.json',
        Treasure: '../db/botw/data/compendium/Treasure.json'
    };

    const favorites = localStorage.getItem('fa') ? JSON.parse(localStorage.getItem('fa')) : [];

    const fetchDataForFavorites = () => {
        const allData = []; // 모든 결과를 저장할 배열

        const axiosRequests = favorites.map((v, k) => {
            return axios.get(url[v.catagory])
                .then((res) => {
                    let filterData = res.data.filter(n => n.id == v.id);
                    allData.push(...filterData);
                });
        });

        // 모든 axios 요청이 완료되면 데이터 설정
        Promise.all(axiosRequests)
            .then(() => {
                setData(allData);
            });
    };

    useEffect(() => {
        fetchDataForFavorites();
    }, []);

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
