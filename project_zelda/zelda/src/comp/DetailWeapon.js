import React, { useEffect, useState } from 'react'
import '../DetailWeapon.css';
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

    const navigate = useNavigate();

    const { param } = useParams();
    const [catagory, id] = param.split('-');


    const [data, setData] = useState([]);

    const url = {
        Creatures: '../db/botw/data/compendium/Creatures.json',
        Equipment: '../db/botw/data/compendium/Equipment.json',
        Materials: '../db/botw/data/compendium/Materials.json',
        Monsters: '../db/botw/data/compendium/Monsters.json',
        Treasure: '../db/botw/data/compendium/Treasure.json'
    }

    useEffect(() => {
        axios.get(url[catagory])
            .then(res => {
                setData(res.data)
            })
    }, []);

    return (
        <>
            <header>
                <div className="head">
                    <a><img src={back} alt="back" onClick={() => { navigate(-1) }} /></a>
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
                {data && data
                    .filter((item) => item.id == id)
                    .map((item) => (
                        <div className='contentsD' key={item.id}>
                            <div className='left_contents'>
                                <div className='left_txt'>
                                    <p>no. {item.id}</p>
                                    <div className='txt'>
                                        <p>{item.name}</p>
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                                <p><img src={item.image} /></p>
                            </div>
                            <div className='right_contents_Weapon'>
                                <div className='place'>
                                    <div className='location'>
                                        <p><img src={deLplace} /></p>
                                        <span>발견장소</span>
                                        <p><img src={deRplace} /></p>
                                    </div>
                                    <div className='place_data'>
                                        <span>{item.common_locations[0]}</span>
                                        <span>{item.common_locations[1]}</span>
                                        <span>{item.common_locations[2]}</span>
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
                                            <span>{item.properties.attack}</span>
                                        </div>
                                    </div>
                                    <div className='item_stats'>
                                        <div className='item'>
                                            <p><img src={deLweapon} /></p>
                                            <span>방어력</span>
                                            <p><img src={deRweapon} /></p>
                                        </div>
                                        <div className='item_data'>
                                            <span>{item.properties.defense}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='description'>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Detail