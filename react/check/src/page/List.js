import { DataContext } from '../MyContext';
import { useContext } from 'react';

function List() {
    const { data, setData } = useContext(DataContext);
    return (
        <>
            <article className='hnum'>
                <h3>참여인원</h3>
                <ul>
                    <li>
                        {
                            data.map((item) => (
                                <p key={item.id}>
                                    {item.name}</p>
                            ))
                        }
                        <button>delete</button>
                    </li>
                </ul>
            </article>
        </>
    )
}

export default List