import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Popular() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
            .then(res => {
                console.log(res.data.results)
                setData(res.data.results)
            })
    }, []);
    const base_url = "https://image.tmdb.org/t/p/original";

    return (
        <div className='contents'>
            <h2>movie_popular</h2>
            <ul>
                {data && data.map((item) => (
                    <li key={item.objectID}>
                        <figure onClick={() => { navigate(`/detail/${item.id}`) }}>
                            <img src={`${base_url}${item.poster_path}`} />
                            <figcaption>
                                <p>{item.title}</p>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Popular