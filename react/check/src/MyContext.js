import { createContext, useState } from 'react'
import React from 'react'
export const DataContext = createContext(null);

function MyContext({ children }) {
    const [data, setData] = useState([]);
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>)
}

export default MyContext