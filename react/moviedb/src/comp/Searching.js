import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function Searching() {
    const [data, setData] = useState([])
    const [keyword, setKword] = useState(null)
    const [type, setType] = useState(null)

    const searchinglist = (e) => {
        e.preventDefault();
        setType(e.target.type.value);
        setKword(e.target.txt.value)
    }

    function search() {
        axios.get(`https://api.themoviedb.org/3/search/${!type ? 'movie' : type}?query=${keyword}&api_key=f89a6c1f22aca3858a4ae7aef10de967`)
            .then(res => { setData(res.data.results); })
    }

    useEffect(() => { search() }, [keyword])
    const base_url = "https://image.tmdb.org/t/p/original";
    if (!keyword) return (
        <div className='searching'>
            <b>검색어를 입력 해 주세요.</b>
            <form onSubmit={searchinglist}>
                <div>
                    <label for='movie'><input type='radio' name='type' value='movie' id='movie' /> MOVIE </label>
                    <label for='tv'><input type='radio' name='type' value='tv' id='tv' /> T V </label>
                </div>
                <input type='text' name='txt' id='txt' />
                <input type='submit' name='search' id='search' />
            </form>
        </div>
    )
    return (
        <div className='searching'>
            <b>검색 결과를 확인 해 주세요.</b>
            <form onSubmit={searchinglist}>
                <div>
                    <label for='movie'><input type='radio' name='type' value='movie' id='movie' /> MOVIE </label>
                    <label for='tv'><input type='radio' name='type' value='tv' id='tv' /> T V </label>
                </div>
                <input type='text' name='txt' id='txt' placeholder={keyword} />
                <input type='submit' name='search' id='search' />
            </form>
            <ul>
                {
                    data.map((item) => (
                        <li key={item.id}>
                            <figure onClick={() => { Navigate(`/detail/${item.id}`) }}>
                                <img src={`${base_url}${item.poster_path}`} />
                                <figcaption>
                                    <p>{item.title}</p>
                                </figcaption>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Searching