import React from 'react'
import st from '../page.module.css' //모듈방법
import '../style.scss'

export default function Page() {
    return (
        <>
            <div className={st.txt}>page</div>
            <div className="txt">Global styles</div>
            <img src="/next.svg" />
            <button className="btn">hi next Btn</button>
        </>
    )
}
