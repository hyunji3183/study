import Insert from '@/app/comp/Insert'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div>
            <h2>INSERT</h2>
            <Insert />

            <Link href='/'>홈으로 가기</Link><br />
            <Link href='./list'>LIST로 가기</Link>
            {/* 폴더중심으로 위치를잡기때문에 폴더밖으로나가지 않아도 형제요소인 list에 접근할 수 있음 */}
        </div>
    )
}

export default page