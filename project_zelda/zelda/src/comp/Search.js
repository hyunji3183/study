import React, { useEffect, useState } from 'react';
import truffle from '../img/big_hearty_truffle.png';
import searchbar from '../img/search_bar.png';
import searchbtn from '../img/search_button.png';
import '../App.css';
import Header from '../Header';
import Aside from '../Aside';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Search() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const navigate = useNavigate();


    const url = {
        Creatures: '../db/botw/data/compendium/Creatures.json',
        Equipment: '../db/botw/data/compendium/Equipment.json',
        Materials: '../db/botw/data/compendium/Materials.json',
        Monsters: '../db/botw/data/compendium/Monsters.json',
        Treasure: '../db/botw/data/compendium/Treasure.json',
    };
    //url내 모든 데이터찾아오기
    useEffect(() => {
        const fetchData = async () => {
            const requests = Object.values(url).map(url => axios.get(url));
            const responses = await Promise.all(requests);
            const allData = responses.map(response => response.data);
            const mergedData = [].concat(...allData);
            setData(mergedData);
        };
        const bodys = document.querySelector('body')
        bodys.classList.remove('detail')
        fetchData();
    }, []);

    //검색
    function searching(e) {
        e.preventDefault();
        if (searchText) {
            const filteredData = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredData(filteredData);
        } else {
            setFilteredData([]);
        }
    }

    //정렬
    const sortDataAlphabetically = (isSorted) => {
        const sorted = isSorted
            ? [...filteredData].sort((a, b) => a.name.localeCompare(b.name))
            : [...filteredData].sort((b, a) => a.name.localeCompare(b.name))
        setFilteredData(sorted);
    };

    return (
        <>
            <Header />
            <main>
                <Aside onSortRequest={sortDataAlphabetically} />
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
                                        <figure onClick={() => { navigate(`/detail/${item.category}-${item.id}`) }}>
                                            <a><img src={item.image} alt="Item" /></a>
                                            <figcaption>
                                                <p>{item.name}</p>
                                            </figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        ) : searchText != '' ? (
                            <p>검색된 내용이 없습니다.</p>
                        ) : (
                            <p>검색어를 입력해주세요</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Search;
