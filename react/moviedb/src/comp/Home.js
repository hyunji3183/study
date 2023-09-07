import React, { useEffect, useState } from 'react'
import List from './List';
import Popular from './Popular';
import Item from './Item';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
            .then(res => {
                // console.log(res.data.results)
                setData(res.data.results)
            })
    }, []);

    return (
        <>
            <section className='visual'>
                <Swiper className="mySwiper" loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}>
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id} className="visualSlide">
                                <div className="movie-background"
                                    style={{
                                        backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`
                                    }} >
                                    <p></p>
                                    <div className='left'>
                                        <h1 data-aos="fade-down-right">{item.title}</h1>
                                        <p>{item.overview}</p>
                                        <button onClick={() => { navigate(`/detail/${item.id}`) }}>view Detail</button>
                                    </div>
                                    <div className='right'>
                                        <p><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>

            <div>
                <Popular />
            </div>
            <div>
                <List />
            </div>
            <div>
                <Item />
            </div>
        </>
    )
}

export default Home