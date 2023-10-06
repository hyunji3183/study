"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function List() {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('/api')
            .then(res => {
                setData(res.data);
            })
    }

    const del = (num) => {
        axios.delete(`/api/${num}`)
            .then(res => {
                setData(res.data);
            })
    }

    const edit = (num) => {
        axios.put(`/api/${num}`,{name:'하하하하ㅏ하하ㅏ하하ㅏ하ㅏ하하하하ㅏㅎ'})
            .then(res => {
                setData(res.data);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div>List</div>
            <ul>
                {
                    data.map(obj => (
                        <li key={obj.num}>
                            아이디:{obj.id}<br />
                            이름:{obj.name}<br />
                            메일:{obj.email}
                            <button onClick={() => { del(obj.num) }}>delete</button>
                            <button onClick={() => { edit(obj.num) }}>edit</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default List