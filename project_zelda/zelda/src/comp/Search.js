import React, { useEffect, useState } from 'react';
import truffle from '../img/big_hearty_truffle.png';
import searchbar from '../img/search_bar.png';
import searchbtn from '../img/search_button.png';
import '../App.css';
import Header from '../Header';
import Aside from '../Aside';
import axios from 'axios';

function Search() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const url = {
        Creatures: '../db/botw/data/compendium/Creatures.json',
        Equipment: '../db/botw/data/compendium/Equipment.json',
        Materials: '../db/botw/data/compendium/Materials.json',
        Monsters: '../db/botw/data/compendium/Monsters.json',
        Treasure: '../db/botw/data/compendium/Treasure.json',
    };

    useEffect(() => {
        const fetchData = async () => {
            const requests = Object.values(url).map(url => axios.get(url));
            const responses = await Promise.all(requests);
            const allData = responses.map(response => response.data);
            const mergedData = [].concat(...allData);
            setData(mergedData);
        };

        fetchData();
    }, []);

    function searching(e) {
        e.preventDefault();
        if (searchText) {
            const filteredData = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredData(filteredData);
        } else {
            // Clear filteredData when there's no search text
            setFilteredData([]);
        }
    }

    return (
        <>
            <Header />
            <main>
                <Aside />
                <div className="search">
                    <div className='search_area'>
                        <form onSubmit={searching}>
                            <input
                                type='text'
                                name='text'
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="search" />
                            <button type="submit">
                                <img src={searchbtn} className="searchbtn" alt="searchbtn" />
                            </button>
                        </form>
                        <img src={searchbar} className="searchbar" alt="searchbar" />
                    </div>
                    <div className='search_data'>
                        {filteredData.length > 0 ? (
                            <ul>
                                {filteredData.map((item, index) => (
                                    <li key={index}>
                                        <figure>
                                            <a><img src={item.image} alt="Item" /></a>
                                            <figcaption>
                                                <p>{item.name}</p>
                                            </figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>일치하는 결과가 없습니다.</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Search;
