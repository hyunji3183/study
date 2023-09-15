import '../App.css';
import Header from '../Header';
import Aside from '../Aside';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Treasure() {
    const bodys = document.querySelector('body')
    bodys.classList.remove('detail')
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('./db/botw/data/compendium/treasure.json')
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
    }, []);
    return (<>
        <Header />
        <main>
            <Aside />
            <div className="list">
                <ul>
                    {data && data.map((item) => (
                    <li key={item.objectID}>
                        <figure>
                            <a><img src={item.image} /></a>
                            <figcaption>
                                <b>{item.name}</b>
                                <p>{item.name}</p>
                                <span>{item.id}</span>
                            </figcaption>
                        </figure>
                    </li>
                    ))}
                </ul>
            </div>
        </main>
    </>
    );
}

export default Treasure;
