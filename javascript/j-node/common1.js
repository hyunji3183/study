const elNav = document.querySelectorAll('nav a');
let pageNum = localStorage.pageNum;

if (pageNum) { elNav[pageNum].style.color = 'yellow'; }

console.log
    (JSON.parse(localStorage.obj));

elNav.forEach(function (menu, key) {
    menu.onclick = function (e) {
        e.preventDefault();
        localStorage.pageNum = key;

        let objStr = { num: key, name: this.innerText };

        localStorage.obj = JSON.stringify(objStr);
        location.href = this.href;
    }
})


// const elNav = document.querySelectorAll('nav a')

// elNav.forEach(function(v,k){
//     v.onclick = function(){
//         sessionStorage.menuname = this.innerText;
//     }
//     if (sessionStorage.menuname == v.innerText){

//         v.style.color = "yellow"
//     }
// })


switch (pageNum) {
    case '0': console.log(main()); break;  /* break를 만나면 명령을 빠져나옴 */
    case '1': console.log(about()); break;
    case '2': console.log(board()); break;
    default: /* 케이스에 해당되지 않는다면 디폴트를 실행; */
}
function main() { return 'main' }
function about() { return 'about' }
function board() { return 'board' }



// localStorage.키 = 값(문자, 숫자, 객체, 배열);
// localStorage.키

// JSON.parse(객체형식의 문자) < 문자를 객체로 변형
// JSON.stringify(객체) < 객체를 문자로 변형

// switch (값) {
//     case: 값: 실행문; break; 
//     default: 값이 없을 경우 실행문;}