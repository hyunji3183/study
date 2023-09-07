import {useContext} from 'react'
import {MyContext} from './Context'

function Insert() {
  const {dispatch} = useContext(MyContext);
  const insert = (e:any)=>{
    e.preventDefault();
    let d = {name:e.target.name.value, id:Date.now()}
    dispatch({type:'add', d});
    e.target.name.value = '';
    e.target.name.focus();
    console.log(e.target);
  }

  return (
    <article>
        <h2>인원추가하기</h2>
        <form onSubmit={insert}>
            <input type="text" name="name"/>
            <input type="submit" value="저장"/>
        </form>
    </article>
  )
}

export default Insert