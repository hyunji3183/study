import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

function Project() {

    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('/project.json')
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
    }, []);

    return (
        <section className='project_page'>
            <div className='color_box'>
                <p>project</p>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data && data.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className='project_list'>
                            <div className='pro_left'>
                                <ul>
                                    {
                                        item.image.map((item, key) => (
                                            <li key={key} ><img src={item} alt={item} className='li_box'/></li>
                                        ))
                                    }
                                </ul>
                                <div className='btn_box'>
                                    <span class="material-symbols-rounded">
                                        navigate_before
                                    </span>
                                    <span class="material-symbols-rounded">
                                        check_indeterminate_small
                                    </span>
                                    <span class="material-symbols-rounded">
                                        navigate_next
                                    </span>
                                </div>
                            </div>
                            <div className='pro_right'>
                                <b>&#60;{item.name} /&#62;</b>
                                <div className='pro_text'>
                                    <div className='date'>
                                        <p>Make Date</p>
                                        <span>{item.Production}</span>
                                    </div>
                                    <div className='language'>
                                        <p>Make Language</p>
                                        {
                                            item.Language.map((item, key) => (
                                                <span key={key}>{item}</span>
                                            ))
                                        }
                                    </div>
                                    <div className='program'>
                                        <p>Using Program</p>
                                        {
                                            item.program.map((item, key) => (
                                                <span key={key}>{item}</span>
                                            ))
                                        }
                                    </div>
                                    <div className='description'>
                                        <p>Planning the road</p>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Project