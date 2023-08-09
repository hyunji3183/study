import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import {txt,txt2} from './animation'

export default function Selector() {
    const element = useRef(null);
    const elementAll = useRef([]);
    const [state, setState] = useState(false);

    let data = [1, 2, 3, 4, 5, 6];
    let pop = () => {
        // popup 클래스를 add
        element.current.classList.toggle('active');
    }

    function selectorAll() {
        elementAll.current.forEach(ele => {
            ele.style = "border:1px solid gray";
        });
    }

    let like = () => {
        setState(!state);
    }


    useEffect(() => {
        selectorAll();
    }, [])

    return (
        <>
        <motion.div
        variants={txt}
        initial="init"
        animate="play"
        transition="trans">

            <article>
                <h2> Selector </h2>
                <button onClick={pop}> open </button>
                <div className='popup' ref={element}>
                    popup...
                </div>
            </article>

            <article>
                <h2> SelectorAll </h2>
                <ul>
                    {
                        data.map((item, k) => (
                            <li key={k} ref={(el) => { elementAll.current[k] = el }}> 다중이 {item}.. </li>
                        ))
                    }
                </ul>
            </article>

            <article>
                <h2> state값을 변경하여 element제어 </h2>
                <button onClick={like}> 좋아용 </button>
                <div className={state ? 'active' : ''}>
                    활성화 & 비활성화
                </div>
            </article>
            </motion.div>
        </>
    )
}

// { (el) => { elementAll.current[0] = el } }