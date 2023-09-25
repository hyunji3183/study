import '../App.css';
import Header from '../Header';
import Aside from '../Aside';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Materials() {
    const bodys = document.querySelector('body')
    bodys.classList.remove('detail')

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('./db/botw/data/compendium/materials.json')
            .then(res => {
                setData(res.data)
            })
    }, []);

    const dataSort = (isSorted) => {
        const sorted = isSorted
            ? [...data].sort((a, b) => a.name.localeCompare(b.name))
            : [...data].sort((b, a) => a.name.localeCompare(b.name))
        console.log([...data]);
        setData(sorted);
    };
    return (<>
        <Header />
        <main>
            <Aside onSortRequest={dataSort} />
            <div className="list">
                <ul>
                    {data && data.map((item) => (
                        <li key={item.id}>
                            <figure onClick={() => { navigate(`/detail/Materials-${item.id}`) }}>
                                <a>
                                    <img src={item.image} alt={item.name} />
                                    <span>NO. {item.id}</span>
                                </a>
                                <figcaption>
                                    <b>{item.kname}</b>
                                    <p>{item.name}</p>
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

export default Materials;
