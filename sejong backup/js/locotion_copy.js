const $btn_naver = document.querySelector('.naver_map');
const $btn_kakao = document.querySelector('.kakao_map');
$btn_kakao.onclick = function () {
    const map_img = document.querySelector('.guide_img');
    map_img.classList.add('on')
}

//버튼 마우스오버
const changenaver = document.querySelector('.naver_map p img');
function mouseover1 (){
    changenaver.setAttribute("src","../imgs/location/location_naver_color_(2).png");
}
function mouseleave1 (){
    changenaver.setAttribute("src","../imgs/location/location_naver_color.png");
}

const changekakao = document.querySelector('.kakao_map p img');
function mouseover2 (){
    changekakao.setAttribute("src","../imgs/location/location_map_color_(2).png");
}
function mouseleave2 (){
    changekakao.setAttribute("src","../imgs/location/location_map_color.png");
}


new daum.roughmap.Lander({
    "timestamp" : "1692694545504",
    "key" : "2fx6r",
    "mapWidth" : "900",
    "mapHeight" : "600",
}).render();

new daum.roughmap.Lander({
    "timestamp" : "1692695583825",
    "key" : "2fx74",
    "mapWidth" : "800",
    "mapHeight" : "400"
}).render();