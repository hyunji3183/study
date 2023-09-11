import React, { useContext } from 'react'
import { TestContext } from './MyContext'




type Props = {}

const List = (props: Props) => {
    const { data } = useContext(TestContext)
    if (!data) return (<></>)
    return (
        <>
            <div className='list'>
                <p>리스트</p>
                <span>전화번호가 저장된 연락처 {data.length}개</span>
                <ul>
                    {
                        data.map((item: any) => (
                            <li key={item}>
                                <span> {item.name} </span>
                                <span> {item.tel} </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default List