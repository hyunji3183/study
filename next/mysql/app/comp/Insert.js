"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function Insert() {
    const navigate = useRouter();

    const insertFn = (e) => {
        e.preventDefault();
        const formD = new FormData(e.target);
        const values = Object.fromEntries(formD);

        axios.post('/api', values);
        navigate.push('./list');
    }

    return (
        <div>
            <form onSubmit={insertFn}>
                <p><input type='text' name='id' placeholder='id' /></p>
                <p><input type='text' name='name' placeholder='name' /></p>
                <p><input type='email' name='email' placeholder='email' /></p>
                <p><input type='submit' value='save' /></p>
            </form>
        </div>
    )
}

export default Insert