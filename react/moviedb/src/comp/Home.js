import React from 'react'
import List from './List';
import Popular from './Popular';
import Item from './Item';



function Home() {

    return (
        <>
            <div>
                <Popular/>
            </div>
            <div>
                <List/>
            </div>
            <div>
                <Item/>
            </div>
        </>
    )
}

export default Home