import React from 'react'
import truffle from '../img/big_hearty_truffle.png';


import '../App.css';
import Header from '../Header';
import Aside from '../Aside';

function Favorite() {
    return (<>
        <Header />
        <main>
            <Aside />
            <div className='favorite'>
                <div className='favorite_data'>
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

export default Favorite