import React from 'react'

function List() {
    return (
        <article>
            <h2>List</h2>
            <p className='total'>총 잔액 - <code>3,800</code> </p>
            <ul>
                <li>
                    <code>8/21</code>
                    <code>바나프레소</code>
                    <code>-5,800</code>
                </li>
            </ul>
        </article>
    )
}

export default List