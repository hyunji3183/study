import '../detail.css';
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


function Detail() {
    const [data, setData] = useState([]);
    const param = useParams();
    console.log(param.id)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
            .then(res => {
                // console.log(res.data);
                setData(res.data)
            })
    }, []);
    const base_url = "https://image.tmdb.org/t/p/original";

    return (
        <div className="div">
                <figure className="figure" key={data.id}>
                    <img className="img" src={`${base_url}${data.poster_path}`} />
                    <figcaption className='figcaption'>
                        <h2 className='h2'>{data.title}</h2>
                        <p className='p'>{data.overview}</p>
                        <span className='span'>{data.vote_average}</span>
                    </figcaption>
                </figure>
        </div>
    )
}

export default Detail