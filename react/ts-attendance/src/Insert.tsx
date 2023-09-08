import { useContext, useRef, useState } from 'react'
import { MyContext } from './Context'
import { log } from 'console';


function Insert() {
    const [ip, setIp] = useState<string | null>(null);
    const selectIp = useRef<HTMLInputElement | null>(null);
    const writeForm = useRef<HTMLFormElement | null>(null);


    const { dispatch } = useContext(MyContext);
    const insert = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (writeForm.current) {
            let formdata = new FormData(writeForm.current);
            console.log(Object.fromEntries(formdata));
        }


        if (selectIp.current) {
            let d = [{ name: selectIp.current.value, id: Date.now() }]

            dispatch({ type: 'add', d });
            selectIp.current.value = '';
            selectIp.current.focus();
        }

    }



    return (
        <article>
            <h2>출석자</h2>
            <form onSubmit={insert} ref={writeForm}>
                <input type="text"
                    name="name"
                    ref={selectIp}
                // onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setIp(e.target.value)}}
                />
                <input type="submit" value="저장" />
            </form>
        </article>
    )
}

export default Insert