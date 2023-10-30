import '../page.scss';
import React from 'react'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import QR from '../img/kakao_QR.png'
import mimoji from '../img/mimoji_profile1.png'
import next from '../img/next.png'

function Page() {
    return (
        <>
            <header>
                <div className='headerbox'>
                    <h1><img src={logo} alt="main_logo" /></h1>
                    <nav>
                        <Link to="/about"> 	&#60;About /&#62;</Link>
                        <Link to="/skill"> &#60;Skill /&#62;</Link>
                        <Link to="/project"> &#60;Project /&#62;</Link>
                        <Link to="/contact"> &#60;Contact /&#62;</Link>
                    </nav>
                </div>
            </header>
            {/* <About />
                <Skill />
                <Project />
                <Contact /> */}
            <section className='about_page'>
                <div className='about'>
                    <div className='about_left'>
                        <div className='profile'>
                            <p><img src={mimoji} /></p>
                            <div className='info_data'>
                                <div className='kakao_qr'><img src={QR} /></div>
                                <div>
                                    <p>1996.02.29</p>
                                    <p>kakao talk</p>
                                    <p>chj3183@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about_right'>
                        <b>안녕하세요.<br />
                            <span>프론트엔드 개발자</span> 조현지입니다.👋</b>
                        <div className='about_me'>
                            <p>&#60;About /&#62;</p>
                            <span>안녕하세요, 문제에서 기회를 찾고 해결 과정을 통한 성취감을 느끼는 프론트엔드 개발자입니다.<br />
                                더 나은 사용자 경험을 실현하고, 사용자들의 불편함을 해소하는 것에 진심을 다하고 있습니다.
                            </span>
                        </div>
                        <div className='Education'>
                            <p>&#60;Education /&#62;</p>
                            <div className='edu_data'>
                                <span>2014년 02월 전주생명과학고등학교 졸업</span>
                                <span>2018년 02월 우석대학교 졸업</span>
                                <span>2023년 05월 ~ 2023년 11월
                                    프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정 수료</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='skill_page'>
                <div className='color_box'>
                    <p>skill</p>
                </div>
                <div className='skill'>
                    <div className='skill_left'>
                        <div className='skill_left_top'>
                            <p>skill_left_top</p>
                            <ul>
                                <li>
                                    <div className='contents_box'>
                                        <div className='skill_name'>
                                            <p><img src={next} /></p>
                                            <span>Html</span>
                                        </div>
                                        <div className='skill_level'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='skill_left_bottom'>
                            <p>skill_left_bottom</p>
                            <ul>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='skill_right'>
                        <div className='skill_right_top'>
                            <p>skill_right_top</p>
                            <ul>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='skill_right_bottom'>
                            <p>skill_right_bottom</p>
                            <ul>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='skill_name'>
                                        <p><img src={next} /></p>
                                        <span>Html</span>
                                    </div>
                                    <div className='skill_level'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page