import React, { useEffect } from 'react'

export default function Scroll() {

    let inter = () => {
        const elScroll = document.querySelector('.scroll');
        HTMLCollection.prototype.forEach = Array.prototype.forEach;
        //배열이 가진 forEach 프로토타입을 HTMLCollection 프로토타입에 적용시킨것

        // console.log(elScroll.children);

        elScroll.children.forEach((el) => {
            if (el.offsetTop < window.pageYOffset + window.innerHeight) {
                el.classList.add('active')
            };
        });
    }

    useEffect(() => {
        //mounting
        window.addEventListener('scroll', inter);

        return () => {
            console.log('unmounting');
            window.removeEventListener('scroll', inter);
            //컴포넌트를 이동할때에도 동일한 이벤트가 발생하기때문에 정지시켜주기위해 해당 명령어 적용
        }
    }, [])


    return (
        <div>
            <h2> Scroll </h2>
            <div className="scroll">
                <figure> 01 </figure>
                <figure> 02 </figure>
                <figure> 03 </figure>
                <figure> 04 </figure>
                <figure> 05 </figure>
                <figure> 06 </figure>
            </div>
        </div>
    )
}
