import React, { useEffect } from 'react'
import $ from 'jquery'

export default function JQuery() {
    function test(){
        $('.txt').css('color','blue');

    }
    
    useEffect(test,[])


    return (
        <article>
            <h2> JQuery </h2>
            <div className='txt'>
                npm install jquery <br />
                - import $ from 'jquery'
            </div>
        </article>
    )
}
