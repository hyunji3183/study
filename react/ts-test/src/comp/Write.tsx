import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { TestContext } from '../MyContext'
import { ts_sportsObj } from '../types'

type Props = {}

interface ts_msg {
    [key: string]: FormDataEntryValue
}
const Write = (props: Props) => {
    const { data } = useContext(TestContext);
    const datakey: string[] = Object.keys(data);
    const msgForm = useRef<HTMLFormElement | null>(null)
    const [community, setcommunity] = useState<ts_msg[]>([]);

    console.log(community);
    
    const insert = (e: React.FocusEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (msgForm.current) {
            let formdata = new FormData(msgForm.current);
            let idx: number = Date.now()
            formdata.append('id', idx.toString())
            let obj: ts_msg = Object.fromEntries(formdata)
            setcommunity([...community,obj])
        }
    }
    return (
        <article>
            <h2>Write</h2>
            <div>
                <form onSubmit={insert} ref={msgForm} >
                    <select name='category'>
                        {
                            datakey.map((obj: string, idx: number) => (
                                <option key={idx}>{obj}</option>
                            ))
                        }
                    </select>
                    <textarea name='msg'></textarea>
                    <input type="submit" value="save" />
                </form>
            </div>
        </article>
    )
}

export default Write