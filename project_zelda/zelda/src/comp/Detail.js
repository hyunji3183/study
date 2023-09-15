import React, { useEffect, useState } from 'react'
import '../Detail.css';
import like_heart from '../img/icon_favorite_none.png'
import back from '../img/icon_arrow_back.png'
import creatures from '../img/icon_1.png';
import monsters from '../img/icon_2.png';
import materials from '../img/icon_3.png';
import equipmentd from '../img/icon_4.png';
import treasure from '../img/icon_5.png';
import truffle from '../img/big_hearty_truffle.png';
import deLplace from '../img/detail_line_place_left.png'
import deRplace from '../img/detail_line_place_right.png'
import deLitem from '../img/detail_line_item_left.png'
import deRitem from '../img/detail_line_item_right.png'
import deLweapon from '../img/detail_line_weapon_left.png'
import deRweapon from '../img/detail_line_weapon_right.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
    const bodys = document.querySelector('body')
    bodys.classList.add('detail')
    const {param} = useParams();
    const [catagory,id] = param.split('-');
    console.log(   catagory,  id )
    

    const [data, setData] = useState([]);
    // const param = useParams();
    // console.log(param.id)
    const url = {
        Creatures : '../db/botw/data/compendium/Creatures.json',
        Equipment : '../db/botw/data/compendium/Equipment.json',
        Materials : '../db/botw/data/compendium/Materials.json',
        Monsters : '../db/botw/data/compendium/Monsters.json',
        Treasure : '../db/botw/data/compendium/Treasure.json'
    }

    useEffect(() => {
        axios.get(url[catagory])
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
    }, []);
    

    return (
        <>
            <header>
                <div className="head">
                    <a><img src={back} alt="back" /></a>
                    <h2>Detail</h2>
                    <a className='like_heart'><img src={like_heart} alt="like_heart" /></a>
                </div>
            </header>
            <div className='detail'>
                <aside>
                    <div className="category">
                        <Link to="/Creatures"><img src={creatures} alt="" /></Link>
                        <Link to="/monsters"><img src={monsters} alt="" /></Link>
                        <Link to="/materials"><img src={materials} alt="" /></Link>
                        <Link to="/equipment"><img src={equipmentd} alt="" /></Link>
                        <Link to="/treasure"><img src={treasure} alt="" /></Link>
                    </div>
                </aside>
                {data && data.map((item) => (
                    <div className='contents' key={item.id}>
                        <div className='left_contents'>
                            <div className='left_txt'>
                                <p>no.{item.id}</p>
                                <div className='txt'>
                                    <p>{item.name}</p>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                            <p><img src={item.image} /></p>
                        </div>
                        <div className='right_contents'>
                            <div className='place'>
                                <div className='location'>
                                    <p><img src={deLplace} /></p>
                                    <span>발견장소</span>
                                    <p><img src={deRplace} /></p>
                                </div>
                                <div className='place_data'>
                                    <span>{item.common_locations}</span>
                                    <span>타반타 변두리</span>
                                </div>
                            </div>
                            <div className='get_item'>
                                <div className='item'>
                                    <p><img src={deLitem} /></p>
                                    <span>얻을 수 있는 아이템</span>
                                    <p><img src={deRitem} /></p>
                                </div>
                                <div className='item_data'>
                                    <span>부싯돌</span>
                                    <span>호박</span>
                                    <span>오팔</span>
                                    <span>토파즈</span>
                                    <span>루비</span>
                                    <span>사파이어</span>
                                    <span>다이아몬드</span>
                                </div>
                            </div>
                            <div className='description'>
                                <p>바위로 위장한 거대 몬스터. 단단한 바위 몸에는 검과 활이 들지 않는다. 머리 쪽에 노출되어 있는 광상에 귀한 광석을 많이 함유하고 있는 것이 특징이다.</p>
                            </div>
                        </div>
                        <div className='right_contents2'>
                            <div className='place'>
                                <div className='location'>
                                    <p><img src={deLplace} /></p>
                                    <span>발견장소</span>
                                    <p><img src={deRplace} /></p>
                                </div>
                                <div className='place_data'>
                                    <span>하이랄평원</span>
                                    <span>타반타 변두리</span>
                                </div>
                            </div>
                            <div className='get_item'>
                                <div className='item_stats'>
                                    <div className='item'>
                                        <p><img src={deLweapon} /></p>
                                        <span>공격력</span>
                                        <p><img src={deRweapon} /></p>
                                    </div>
                                    <div className='item_data'>
                                        <span>10</span>
                                    </div>
                                </div>
                                <div className='item_stats'>
                                    <div className='item'>
                                        <p><img src={deLweapon} /></p>
                                        <span>방어력</span>
                                        <p><img src={deRweapon} /></p>
                                    </div>
                                    <div className='item_data'>
                                        <span>0</span>
                                    </div>
                                </div>


                            </div>
                            <div className='description'>
                                <p>바위로 위장한 거대 몬스터. 단단한 바위 몸에는 검과 활이 들지 않는다. 머리 쪽에 노출되어 있는 광상에 귀한 광석을 많이 함유하고 있는 것이 특징이다.</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Detail