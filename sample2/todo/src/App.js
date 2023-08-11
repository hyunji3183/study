import { useEffect, useState } from 'react';
import './App.scss';
import Item from './component/Item';

const initData = [
    // {todo:'리액트공부하기', state:false, date:Date.now()},
]

function App() {

    const [data, setData] = useState(initData);
    const [count, setCount] = useState(0);
    //값이 바뀌면 랜더링 되어 화면에 출력되야하기 때문에 useState() 사용

    const todoCount = () => {
        let dataCount = data.filter(obj => obj.state == false);
        setCount(dataCount.length);
    }

    const todoStatus = (e) => {
        let stateCode = e.target.checked;
        let dateCode = e.target.dataset.code;

        let dataFind = data.map((obj) => {
            if (obj.date == dateCode) {
                obj.state = stateCode;
            }
            return obj;
        });

        setData(dataFind);
    }
    console.log(data);

    const insert = (e) => {
        e.preventDefault();

        let todo = e.target.todo.value;
        setData([...data, { todo, state: false, date: Date.now() }]);
    }

    data.sort(function (b, a) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
    })

    useEffect(() => {
        todoCount();
    }, [data])

    return (
        <div className="App">
            <article>
                <h1> Todo List  <span>할일 {count}개 남음</span></h1>
                <ul>
                    {
                        data.map((obj) => (
                            <Item key={obj.date} item={obj} todoStatus={todoStatus} />
                        ))
                    }
                </ul>
                <form onSubmit={insert}>
                    <p>
                        <input type="text" name="todo" />
                        <button>등록</button>
                    </p>
                </form>
            </article>
        </div>
    );
}

export default App;
