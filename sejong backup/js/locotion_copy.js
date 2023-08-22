new daum.roughmap.Lander({
    "timestamp": "1692686139957",
    "key": "2fxzw",
    "mapWidth": "900",
    "mapHeight": "600"
}).render();

const $btn_naver = document.querySelector('.naver_map');
const $btn_kakao = document.querySelector('.kakao_map');
$btn_kakao.onclick = function () {
    const map_img = document.querySelector('.guide_img .img img');
    const kakaomap = document.querySelector('.guide_img .map div');
    map_img.classList.add('on')
    kakaomap.classList.add('on')
}

$btn_kakao.forEach(
        this.classList.add('on')
);







