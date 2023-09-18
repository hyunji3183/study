import { HashRouter, Route, Routes, Link, Router, BrowserRouter, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import back from './img/icon_arrow_back.png';
import home from './img/icon_home.png';
import heart from './img/icon_favorite_none.png';
import creatures from './img/icon_1.png';
import monsters from './img/icon_2.png';
import materials from './img/icon_3.png';
import equipmentd from './img/icon_4.png';
import treasure from './img/icon_5.png';
import favorite from './img/favorite.png';
import sort from './img/sort.png';
import search from './img/search.png';
import triforce from './img/icon_triforce.png';
import truffle from './img/big_hearty_truffle.png';

import Main from './Main';
import Home from './comp/Home';
import Creatures from './comp/Creatures';
import Monsters from './comp/Monsters';
import Materials from './comp/Materials';
import Equipment from './comp/Equipment';
import Treasure from './comp/Treasure';
import Favorite from './comp/Favorite';
import Search from './comp/Search';
import Detail from './comp/Detail';
import DetailWeapon from './comp/DetailWeapon';

const App = () => {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Creatures" element={<Creatures />} />
                        <Route path="/Monsters" element={<Monsters />} />
                        <Route path="/Materials" element={<Materials />} />
                        <Route path="/Equipment" element={<Equipment />} />
                        <Route path="/Treasure" element={<Treasure />} />
                        <Route path="/Favorite" element={<Favorite />} />
                        <Route path="/Search" element={<Search />} />
                        <Route path="/Detail/:param" element={<Detail />} />
                        <Route path="/DetailWeapon/:param" element={<DetailWeapon />} />
                    </Routes>
            </BrowserRouter>
        </>
    );
};



export default App;
