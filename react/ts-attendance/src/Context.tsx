import { createContext, useState, useReducer } from 'react';
import { ts_data, ts_action } from './types';
export const MyContext = createContext<any>(null);

type aa = {
    children: React.ReactNode
}

const Context: React.FC<aa> = ({ children }) => {

    console.log(children)

    const reducer = (state: ts_data[], action: ts_action) => {
        switch (action.type) {
            case 'add': return [...state, ...action.d];
            case 'del': return [...action.d];
        }
    }
    const [data, dispatch] = useReducer<any>(reducer, []);


    return (
        <MyContext.Provider value={{ data, dispatch }}>
            {children}
        </MyContext.Provider>
    )
}




export default Context;