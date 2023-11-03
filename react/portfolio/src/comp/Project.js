import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import Inview from './Inview';

function Project() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/project.json')
            .then(res => {
                setData(res.data);
            });
    }, []);


    const [slide, setSlide] = useState(0);
    const handlePage = (key, type) => {
        switch (type) {
            case 'next': if (data[key].image.length <= slide + 1) { setSlide(0); } else { setSlide(slide + 1); } break;
            default:
                if (slide <= 0) {
                    setSlide(data[key].image.length - 1);
                } else {
                    setSlide(slide - 1);
                }
                break;
        }
    }

    if (!data.length) return <></>;

    return (
        <section className='project_page' id='project'>
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
                observer={true}
                observeParents={true}
                modules={[Pagination, Navigation]}
                className="mySwiper frame_in"
            >
                <Inview>
                    {data.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className='project_list'>
                                <div className='pro_box'>
                                    <div className='pro_left'>
                                        <ul>
                                            {item.image.map((img, key) => (
                                                <li key={key}><img src={img} alt={img} className={slide === key ? "active" : null} /></li>
                                            ))}
                                        </ul>
                                        <div className='btn_box'>
                                            <span className="material-symbols-rounded" onClick={() => { handlePage(index, 'prev') }}>
                                                navigate_before
                                            </span>
                                            <span className="material-symbols-rounded" onClick={() => { handlePage(index, 'next') }}>
                                                navigate_next
                                            </span>
                                        </div>
                                    </div>
                                    <div className='pro_right'>
                                        <b>&#60;{item.name} /&#62;</b>
                                        <div className='pro_text'>
                                            <div className='date'>
                                                <p>Make Date</p>
                                                <div className='date_txt'>
                                                    <span>{item.Production}</span>
                                                </div>
                                            </div>
                                            <div className='language'>
                                                <p>Make Language</p>
                                                <div className='language_txt'>
                                                    {item.Language.map((lang, key) => (
                                                        <span key={key}>{lang}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='program'>
                                                <p>Using Program</p>
                                                <div className='program_txt'>
                                                    {item.program.map((prog, key) => (
                                                        <span key={key}>{prog}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p>Planning the road</p>
                                                <div className='description_txt'>
                                                    <span>{item.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Inview>
            </Swiper>
        </section>

    );
}

export default Project;
