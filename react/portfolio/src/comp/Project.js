import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import Inview from './Inview';
import ProContent from './ProContent';

function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/project.json')
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleSlideChange = (swiperCore) => {
        const { realIndex } = swiperCore;

        setCurrentIndex(realIndex);
    };


    if (!data.length) return <></>;

    return (<>
        <section className='project_page' id='project' style={{
            background: `url(${data[currentIndex].back_img}) 0 0 /cover no-repeat`
            // transition:'0.5s'
            // filter: 'blur(5px)'
        }}>
            <div className='color_box'>
                <p>project</p>
            </div>
            <Inview>
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
                    onSlideChange={handleSlideChange}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className='project_list'>
                                <div className='pro_box'>
                                    <div className='pro_left'>
                                        <ProContent item={item} />
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
                                                <p>Language & Using Program</p>
                                                <div className='language_txt'>
                                                    {item.Language.map((lang, key) => (
                                                        <span key={key}>{lang}</span>
                                                    ))}
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
                                            <div className='description'>
                                                <p>Trouble shooting</p>
                                                <div className='description_txt'>
                                                    <span>{item.Trouble}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='link'>
                                            <a href={item.url} target='_blank'> Go to page </a>
                                            <span className="material-symbols-rounded">chevron_right</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Inview>
        </section>
    </>
    );
}

export default Project;
