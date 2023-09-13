import back from './img/icon_arrow_back.png';
import heart from './img/icon_favorite_none.png';
import creatures from './img/icon_1.png';
import equipment from './img/icon_2.png';
import materials from './img/icon_3.png';
import monsters from './img/icon_4.png';
import treasure from './img/icon_5.png';
import favorite from './img/icon_favorite.png';
import sort from './img/icon_sort.png';
import search from './img/icon_search.png';
import triforce from './img/icon_triforce.png';


import './App.scss';

function App() {
    return (
        <>
            <header>
                <div classname="head">
                    <p><img src={back} alt="" /></p>
                    <h2>creatures</h2>
                    <p><img src={heart} alt="" /></p>
                </div>
            </header>
            <aside>
                <div classname="category">
                    <p><img src={creatures} alt="" /></p>
                    <p><img src={equipment} alt="" /></p>
                    <p><img src={materials} alt="" /></p>
                    <p><img src={monsters} alt="" /></p>
                    <p><img src={treasure} alt="" /></p>
                </div>
                <div classname="toggle">
                    <div>
                        <p><img src={favorite} alt="" /></p>
                        <p><img src={sort} alt="" /></p>
                        <p><img src={search} alt="" /></p>
                    </div>
                    <p><img src={triforce} alt="" /></p>
                </div>
            </aside>
            <main></main>
            <footer></footer>
        </>
    );
}

export default App;
