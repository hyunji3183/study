import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/next.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function Project() {
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
                <SwiperSlide>
                    <div className='project_list'>
                        <div className='pro_left'></div>
                        <div className='pro_right'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={next} /></SwiperSlide>
                <SwiperSlide><img src={next} /></SwiperSlide>
                <SwiperSlide><img src={next} /></SwiperSlide>
                <SwiperSlide><img src={next} /></SwiperSlide>
                <SwiperSlide><img src={next} /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Project