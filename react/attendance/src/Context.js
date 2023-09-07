import {createContext, useState, useReducer} from 'react';
export const MyContext = createContext(null);

function Context({children}) {
  const reducer = (state, action)=>{
    switch(action.type){
      case 'add' : return [...state,action.d];
      case 'del' : return [...action.d];
    }
  }
  const [data,dispatch] = useReducer(reducer,[]);
  return (
    <MyContext.Provider value={{data,dispatch}}>
        {children}
    </MyContext.Provider>
  )
}




export default Context;