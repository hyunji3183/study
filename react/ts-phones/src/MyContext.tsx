import { createContext, useState } from 'react'
import React from 'react'


export const TestContext = createContext<any>(null)

type Props = {
    children: React.ReactNode
}

export const MyContext = ({children}: Props) => {
    const [data, setData] = useState([])
    
    return (
        <TestContext.Provider value={{data,setData}}>
            {children}
        </TestContext.Provider>
    )
}

