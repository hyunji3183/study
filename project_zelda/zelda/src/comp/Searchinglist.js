import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function Searchinglist() {
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
                let data = res.data.filter(n => n.id == id)
                setData(data)
            })
    }, []);


    
    return (
        <>
        </>
    )
}

export default Searchinglist