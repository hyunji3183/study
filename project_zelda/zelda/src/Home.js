import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Creatures from './comp/Creatures';
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

import './App.css';
import Materials from './comp/Materials';
import Monsters from './comp/Monsters';
import Treasure from './comp/Treasure';
import Equipment from './comp/Equipment';
import Favorite from './comp/Favorite';
import Search from './comp/Search';
import truffle from './img/big_hearty_truffle.png';


export default function Home() {
    return (<>
        <HashRouter>
            <header>
                <div className="head">
                    <a><img src={home} alt="home" /></a>
                    <h2>creatures</h2>
                    <a><img src={heart} alt="heart" className="heart" /></a>
                </div>
            </header>
            <main>
                <aside>
                    <div className="category">
                        <Link to="/Creatures"><img src={creatures} alt="" /></Link>
                        <Link to="/monsters"><img src={monsters} alt="" /></Link>
                        <Link to="/materials"><img src={materials} alt="" /></Link>
                        <Link to="/equipment"><img src={equipmentd} alt="" /></Link>
                        <Link to="/treasure"><img src={treasure} alt="" /></Link>
                    </div>
                    <div className="toggle">
                        <div>
                            <Link to="/Favorite"><img src={favorite} alt="" /></Link>
                            <a><img src={sort} alt="" /></a>
                            <Link to="/Search"><img src={search} alt="" /></Link>
                        </div>
                        <a><img src={triforce} alt="" /></a>
                    </div>
                </aside>
                <Routes>
                    <Route path="/Creatures" element={<Creatures />} />
                    <Route path="/Monsters" element={<Monsters />} />
                    <Route path="/Materials" element={<Materials />} />
                    <Route path="/Equipment" element={<Equipment />} />
                    <Route path="/Treasure" element={<Treasure />} />
                    <Route path="/Favorite" element={<Favorite />} />
                    <Route path="/Search" element={<Search />} />
                </Routes>
                <div className="list">
                    <ul>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>장비페이지입니당</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <a><img src={truffle} /></a>
                                <figcaption>
                                    <b>큰맥스트러플</b>
                                    <p>big hearty truffle</p>
                                    <span>178</span>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </main>
        </HashRouter>

    </>
    );
}

