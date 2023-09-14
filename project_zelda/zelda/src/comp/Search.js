import React from 'react'
import truffle from '../img/big_hearty_truffle.png';
import searchbar from '../img/search_bar.png'
import searchbtn from '../img/search_button.png'



import '../App.css';

function Search() {
    return (
        <>
            <div className="search">
                <div className='search_area'>
                    <form>
                        <input></input>
                    </form>
                    <div>
                        <p className='searchbar'><img src={searchbar}></img></p>
                        <p className='searchbtn'><img src={searchbtn}></img></p>
                    </div>
                </div>
                <ul className='search_data'>
                    <li>
                        <figure>
                            <a><img src={truffle} /></a>
                            <figcaption>
                                <b>장비페이지입니당</b>
                                <p>big hearty truffle</p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Search