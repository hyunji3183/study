import { DataContext } from '../MyContext'
import { useContext } from 'react'


function Write() {
    const { data, setData } = useContext(DataContext);
    let custom = (e) => {
        e.preventDefault();
        let t = e.target;
        let all = {
            name: t.name.value
        }
        setData([...data, all])
    }


    return (
        <article className='save'>
            <div>
                <h2>참여자 등록</h2>
                <button className='notactive' onClick='active'> + </button>
            </div>
            <form onSubmit={custom}>
                <input type="text" name="name" placeholder="name" />
                <input type="submit" name="save" placeholder="save" />
            </form>
        </article>
    )
}

export default Write