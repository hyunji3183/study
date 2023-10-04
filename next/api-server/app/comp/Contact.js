"use client"
import React, { useEffect } from 'react'

function Contact() {
    useEffect(() => {
        fetch('/api', {
            method: 'post',
            body: JSON.stringify({ c: 3000 }),
            headers:{
                'Content-type' : 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })


        // fetch('/api')
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //     })
    }, [])


    return (
        <div>Contact</div>
    )
}

export default Contact