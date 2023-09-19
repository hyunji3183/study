import React, { useEffect, useState } from 'react'
import '../Detail.css';
import like_heart from '../img/icon_favorite_none.png'
import back from '../img/icon_arrow_back.png'
import creatures from '../img/icon_1.png';
import monsters from '../img/icon_2.png';
import materials from '../img/icon_3.png';
import equipmentd from '../img/icon_4.png';
import treasure from '../img/icon_5.png';
import deLplace from '../img/detail_line_place_left.png'
import deRplace from '../img/detail_line_place_right.png'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import List from '../Favorite_List.json';


function Detail() {
    const bodys = document.querySelector('body')
    bodys.classList.add('detail')

    const { param } = useParams();
    const [catagory, id] = param.split('-');


    const [data, setData] = useState([]);
    const [favorite, setFavorite] = useState();
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

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
                let data = res.data.filter(n => n.id == id)
                setData(data)
                setFavorite(localStorage.getItem('fa'))
            })
    }, []);



    function loaclS(id) {
        localStorage.setItem('fa', id)
        setFavorite(id)
    }


    let favoriteArr;
    function faadd(id) {
        favorite.split(',').length || !favorite.split(',') <= 0 ? favoriteArr = 0 : favoriteArr = favorite.split(',');

        if (!favorite || favoriteArr.length <= 0) {
            loaclS(id)
        } else {
            let findFavorite = favoriteArr.filter(n => n == id);
            if (findFavorite.length <= 0) {
                let key = favorite + "," + id;
                loaclS(key)
            } else {
                let key = favoriteArr.filter(n => n != id);
                loaclS(key)
            }
            console.log(findFavorite);
        }
    }

    if (!data && data.length <= 0) return <></>;




    return (
        <>
            <header>
                <div className="head">
                    <a><img src={back} alt="back" onClick={() => { navigate(-1) }} /></a>
                    <h2>Detail</h2>
                    <span className={`material-symbols-outlined `} onClick={() => { faadd(id) }}>favorite</span>
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
                    .map((item) => (
                        <div className='contents' key={item.id}>
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
                            <div className='right_contents'>
                                <div className='place'>
                                    <div className='location'>
                                        <p><img src={deLplace} /></p>
                                        <span>발견장소</span>
                                        <p><img src={deRplace} /></p>
                                    </div>
                                    <div className='place_data'>
                                        {
                                            item.common_locations && item.common_locations.map((v, k) => (
                                                <span key={k}>{v}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='get_item'>
                                    <div className='item'>
                                        <p><img src={deLplace} /></p>
                                        <span> {catagory == 'Materials' ? "요리효과" : "관련아이템"} </span>
                                        <p><img src={deRplace} /></p>
                                    </div>
                                    <div className='item_data'>
                                        {
                                            item.drops === undefined ? <span>{item.cooking_effect}</span> : item.drops.map((v, k) => (<span key={k}>{v}</span>))
                                        }
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