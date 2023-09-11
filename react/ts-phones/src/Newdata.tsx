import React, { useContext, useRef, useState } from 'react'
import { TestContext } from './MyContext'
import { useNavigate } from 'react-router-dom'

type Props = {}

interface ts_msg {
    [key: string]: FormDataEntryValue
}

const Newdata = (props: Props) => {
    const { data, setData } = useContext(TestContext);
    const datakey: string[] = Object.keys(data);
    const msgForm = useRef<HTMLFormElement | null>(null)
    const [text, settext] = useState<ts_msg[]>([]);

    const na = useNavigate();

    let insert = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (msgForm.current) {
            const formdata = new FormData(msgForm.current);
            const formDataObject: ts_msg = {};

            formdata.forEach((value, key) => {
                formDataObject[key] = value;
            });


            if (formdata.get('name') === '' && formdata.get('tel') === '') {
                alert('이름과 연락처를 입력해주세요')
            }
            else if (formdata.get('name') == '') {
                alert('이름을 입력해주세요')
            }
            else if (formdata.get('tel') == '') {
                alert('연락처를 입력해주세요')
            }
            else {
                setData([...data, formDataObject])
                na('/List')
            }
        }
    }
    return (
        <div className='new'>
            <p>신규등록</p>
            <span>새로운 친구를 등록해 주세요</span>
            <form onSubmit={insert} ref={msgForm}>
                <input type='text' name='name' placeholder='name'></input>
                <input type='tel' name='tel' placeholder='phonenumber'></input>
                <input type='submit' name='save' placeholder='save'></input>
            </form>
        </div>
    )
}

export default Newdata