import { useState } from "react";

function StateProps({data,name}) {
    let [count, setCount] = useState(0);


    function plus(){
        setCount(++count);
    }


    return (
        <>
            <h2>Props</h2>
            
            * 부모 컨포넌트에서 자식 컨포넌트로 값을 보내줄때 사용<br />
            * 부모안에 있는 &#60; 자식컨포넌트  <b>속성='값'</b> / &#62; <br />
            * function 자식( <b>props</b> )&#123;  <br />
                    &nbsp; &nbsp;    
                    console.log( props )  // <b>&#123;속성:'값'&#125; </b><br />
            &#125;<br />


            <h2>State
                <button onClick={plus}> {count} </button>
            </h2>
            * useState() //상태 [값, 값수정함수] <br />
            * 값수정함수를 이용해서 값을 수정하면 컨포넌트 자체내에 랜더링 발생 <br />
            * 랜더링 발생시 바뀐값이 실체 dom에 적용됨 
        </>
    )
}

export default StateProps