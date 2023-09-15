import React from 'react'
import truffle from '../img/big_hearty_truffle.png';
import searchbar from '../img/search_bar.png'
import searchbtn from '../img/search_button.png'

import '../App.css';
import Header from '../Header';
import Aside from '../Aside';

function Search() {
    const bodys = document.querySelector('body')
    bodys.classList.remove('detail')
    return (
        <>
            <Header />
            <main>
                <Aside />
                <div className="search">
                    <div className='search_area'>
                        <p className='searchbar'>
                            <form>
                                <input type='text' name='text'></input>
                            </form>
                            <img src={searchbar} /></p>
                        <p className='searchbtn'><img src={searchbtn} /></p>
                    </div>
                    <div className='search_data'>
                        <ul>
                            <li>
                                <figure>
                                    <a><img src={truffle} /></a>
                                    <figcaption>
                                        <p>rare ore deposit</p>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <a><img src={truffle} /></a>
                                    <figcaption>
                                        <p>big hearty truffle</p>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <a><img src={truffle} /></a>
                                    <figcaption>
                                        <p>big hearty truffle</p>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <a><img src={truffle} /></a>
                                    <figcaption>
                                        <p>big hearty truffle</p>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <a><img src={truffle} /></a>
                                    <figcaption>
                                        <p>big hearty truffle</p>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <a><img src={truffle} /></a>
                                    <figcaption>
                                        <p>big hearty truffle</p>
                                    </figcaption>
                                </figure>
                            </li>

                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Search