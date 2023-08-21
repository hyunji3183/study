import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react'
const MyContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'insert': return;
        case 'modify': return;
        case 'del': return;
        default: return action.d;
    }
}


function Context({ children }) {
    const [data, dispatch] = useReducer(reducer, []);
    const fetchFn = () => {
        axios.get('http://localhost:3030/history')
            .then(res => {
                dispatch({ type: 'get', d: res.data })
            })
    }

    useEffect(() => {
        fetchFn()
    }, [])

console.log(data);
    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

export default Context
