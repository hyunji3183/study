import { DataContext } from '../MyContext'
import { useContext } from 'react'

function Write() {
    const {data,setData} = useContext(DataContext);
    let insert = (e) => {
        e.preventDefault();
        let v = e.target;
        let d = {
            name: v.name.value,
            email: v.email.value,
            txt: v.txt.value,
            id: Date.now()
        }
        setData([...data,d]);
        console.log([d]);
    }

    return (
        <article>
            <h2>Write</h2>
            <form onSubmit={insert}>
                <input type="text" name="name" placeholder='name' />
                <input type="email" name="email" placeholder='email' />
                <textarea name="txt"></textarea>
                <input type="submit" value="save" placeholder='save'/>
            </form>
        </article>
    )
}

export default Write