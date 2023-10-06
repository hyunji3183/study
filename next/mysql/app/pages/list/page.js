import List from '@/app/comp/List'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <h1>List</h1>
            <List />
            <Link href='./insert'>추가하기</Link> 
        </>
    )
}

export default page