"use client"; // ssr방식과 csr방식을 모두 사용할 수 있게함
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import '../style.scss'

export default function page() {
    const router = useRouter();
    const [count, setCount] = useState(0);


    const move = () => {
        console.log('click!!!!!!!!');
        router.push(`/js/${count}`)
    }

    return (
        <div>
            <button onClick={move} className='btn'>click event</button>
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    )
}
