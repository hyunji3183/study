import {useContext} from 'react'
import {MyContext} from './Context'

function List() {
  const {data,dispatch} = useContext(MyContext);
  
  const del = (code)=>{
    let d = data.filter((obj)=>(obj.id != code));
    dispatch({type:'del', d});
  }

  return (
    <div>
        <p>참여인원: <code>{data.length}</code>명</p>
        <ul>
        {
            data.map((item)=>(
                <li key={item.id}>
                    {item.name}
                    <button onClick={()=>{del(item.id)}}> X </button>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default List