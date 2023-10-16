"use client"
import React, { useEffect, useState } from 'react'
import de from './detail.module.scss'
import { Modal, Modal2 } from '../../../comp/dex/detail/Modal'
import Footer from '@/app/comp/Footer'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'



export default function page() {
    // 모달 버튼 클릭 유무를 저장할 state
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [data, setData] = useState();
    const [reviewText, setReviewText] = useState([])
    const params = useSearchParams();
    const idParam = params.get('id');



    // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
    const clickModal = () => {
        setShowModal(!showModal);
        const body = document.querySelector('body');
        if (!showModal) {
            body.style.overflow = "hidden"; // 스타일 속성을 수정
        } else {
            body.style.overflow = "auto"; // 스타일 속성을 수정
        }
    }
    const clickModal2 = () => {
        console.log('sdssdf')
        setShowModal2(!showModal2);
        const body = document.querySelector('body');
        if (!showModal2) {
            body.style.overflow = "hidden"; // 스타일 속성을 수정
        } else {
            body.style.overflow = "auto"; // 스타일 속성을 수정
        }
    }

    const data_input = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const value = Object.fromEntries(formData);
        setReviewText([...reviewText, value.search]);
        console.log(value.date);
    }
    const like = () => {
        const like_btn = document.querySelector('.likes');
    }

    const detailData = function () {
        axios.get(`/api/dex/detail?num=${idParam}`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
    }

    useEffect(() => {
        detailData()
    }, [])

    if (!data || data.length <= 0) return <></>;

    return (
        <section className={de.detail} key={data.id}>
            {showModal && <Modal clickModal={clickModal} />}
            {showModal2 && <Modal2 clickModal2={clickModal2} />}
            <div className={de.detail_page}>
                <div className={de.user_info}>
                    <p><img src={'/img/detail/logo.png'} /></p>
                    <div className={de.info_box}>
                        <div className={de.inner_box}>
                            <span>[Rk.99]</span>
                            <div>
                                <img src='/img/detail/user_icon.png' />
                                <p>자룡님은바보</p>
                            </div>
                        </div>
                        <div className={de.user_profile}>
                            <p><img src={'/img/detail/profile.png'} /></p>
                        </div>
                    </div>
                </div>
                <div className={de.dg_info}>
                    <h3>{data.name}</h3>
                    <div className={de.dg_data}>
                        <div className={de.left_data}>
                            <p className={de.like} onClick={like} >
                                <img src={'/img/detail/like_box.png'} />
                                <img src={'/img/detail/like_1.png'} className={de.likes} />
                                <span>1,234</span>
                            </p>
                            <div className={de.dg_img}>
                                <p className={de.dg_img_1}>
                                    <img src={'/img/detail/dg_img_1.png'} />
                                </p>
                                <p className={de.sample}>
                                    <img src={data.images[0].href} />
                                </p>
                                <p className={de.dg_img_2}>
                                    <img src={'/img/detail/dg_img_2.png'} />
                                </p>
                            </div>
                        </div>
                        <ul className={de.right_data}>
                            <li>
                                <p>LEVEL</p>
                                <div>
                                    {
                                        data.levels.map((level, key_1) => (
                                            <span key={key_1}>{level.level}</span>
                                        ))
                                    }
                                </div>
                            </li>
                            <li>
                                <p>TYPE</p>
                                <div>
                                    {
                                        data.types.map((type, key_2) => (
                                            <span key={key_2}>{type.type}</span>
                                        ))
                                    }
                                </div>
                            </li>
                            <li>
                                <p>X-Antibody</p>
                                <div>
                                    <span>{data.xAntibody === true ? 'true' : data.xAntibody ? data.xAntibody : 'none'}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={de.description}>
                        <p className={de.description_txt} onClick={clickModal} >
                            {data.descriptions[1].description}
                        </p>
                        <div className={de.description_more}>
                            <p><img src={'/img/detail/more.png'} /></p>
                        </div>
                    </div>
                    <div className={de.get_btn}>
                        <p>포획하기</p>
                    </div>
                </div>
                <div className={de.skill_more}>
                    <p onClick={clickModal2}>스킬 더보기</p>
                </div>
                <div className={de.skill_info}>
                    <div className={de.skill}>
                        <div className={de.skill_gif}>
                            <p><img src={'/img/detail/digivice.gif'} /></p>
                            <span>SKILLS</span>
                        </div>
                        <div className={de.skill_txt}>
                            {
                                data.skills.slice(0, 4).map((skill, key_3) => (
                                    <p key={key_3}>{skill.skill}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={de.dg_review}>
                    <h3>유저 한줄 평</h3>
                    <ul>
                        {reviewText.map((item) => (
                            <li className={de.review_list} key={data.id}>
                                <div>
                                    <p className={de.review_text}>{item}</p>
                                    <div>
                                        <div className={de.user_text}>
                                            <img src='/img/detail/user_icon.png' />
                                            <p>자룡님은바보</p>
                                        </div>
                                        <span>[2023.10.12]</span>
                                    </div>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div className={de.search_area}>
                    <form onSubmit={data_input}>
                        <label htmlFor="search_box">
                            <input id='search_box' type='search' name="search" maxLength='15' placeholder='한줄평을 입력하세요.' />
                            <input name='date' type='hidden' value={new Date()} />
                        </label>
                        <label htmlFor="submit_btn">
                            <input id='submit_btn' type='submit' name="save" value='입력' />
                        </label>
                    </form>
                </div>
                <div className={de.Evolution_process}>
                    <div className={de.prev}>
                        <div>
                            <img src={'/img/detail/Evolution_process.png'} />
                            <span>이전진화</span>
                        </div>
                        <ul >
                            {
                                data.priorEvolutions.map((priorEvolutions, key_5) => (
                                    <li className={de.Evolution_list} key={key_5}>
                                        <div className={de.Evolution_data}>
                                            <div className={de.picture}>
                                                <img src={'/img/detail/digi_box.png'} />
                                                <div className={de.digimon}>
                                                    <img src={priorEvolutions.image} className={de.digi_picture} />
                                                    <p>
                                                        <img src={'/img/detail/mask.png'} className={de.mask} />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={de.digi_name}>
                                                <img src={'/img/detail/name_box.png'} />
                                                <span>{priorEvolutions.digimon}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={de.next}>
                        <div>
                            <img src={'/img/detail/Evolution_process.png'} />
                            <span>다음진화</span>
                        </div>
                        <ul>
                            {
                                data.nextEvolutions.map((nextEvolutions, key_6) => (
                                    <li className={de.Evolution_list} key={key_6}>
                                        <div className={de.Evolution_data}>
                                            <div className={de.picture}>
                                                <img src={'/img/detail/digi_box.png'} />
                                                <div className={de.digimon}>
                                                    <img src={nextEvolutions.image} className={de.digi_picture} />
                                                    <p>
                                                        <img src={'/img/detail/mask.png'} className={de.mask} />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={de.digi_name}>
                                                <img src={'/img/detail/name_box.png'} />
                                                <span>{nextEvolutions.digimon}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            < Footer />
        </section>
    )
}