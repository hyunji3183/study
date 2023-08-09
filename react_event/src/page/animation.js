const txt = {
    init: { scale: 2, x: 1000, opacity: 0 },
    play: { scale: 1, x: 0, opacity: 1 ,
    transition:{duration:3, ease:'easeOut'}
}
}

const txt2 = {
    init: { scale: 2, x: 100, },
    play: { scale: 1, x: 0}
}
// export default txt;  
// //1개인경우

export {txt,txt2}  //여러개인 경우 export
// 각 const앞에 export해도되지만 수량이 많은 경우 구분이안되기에 해당위 방법이 적절