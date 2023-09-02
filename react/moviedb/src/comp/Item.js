import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Item() {
    const [data, setData] = useState([]);

    useEffect(() => {    
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
            .then(res => {
                console.log(res.data.results)
                setData(res.data.results)
            })
    }, []);
    const base_url = "https://image.tmdb.org/t/p/original";

    return (
        <>
            <h2>TV</h2>
            <ul>
                {data && data.map((item) => (
                    <li key={item.objectID}>
                        <figure>
                            <img src={`${base_url}${item.poster_path}`}/>
                            <figcaption>
                                <p>{item.name}</p>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Item