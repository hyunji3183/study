const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const count = document.querySelector("#count");
const sitem = document.querySelector(".swiper-con");
const bullet = document.querySelector(".bullet-color");
const ppContents = document.querySelectorAll(".pp-contents");

let countnum = 1;

let translateXValue = 0; // 초기 이동 거리 (0%)

const minTranslateX = -525; // 최소 이동 거리
const maxTranslateX = 0; // 최대 이동 거리

next.addEventListener('click', function () {
    if (translateXValue > minTranslateX) {
        translateXValue -= 105;
        if (countnum < 6) {
            countnum++;
            count.innerHTML = countnum;
        }
    }
    updateSlider();
    console.log(translateXValue)
});

prev.addEventListener('click', function () {
    if (translateXValue < maxTranslateX) {
        translateXValue += 105;
        countnum--;
        count.innerHTML = countnum;
    }
    updateSlider();
    console.log(translateXValue)

});

function autoPlay() {
    if (translateXValue === minTranslateX) {
        setTimeout(function () {
            translateXValue = maxTranslateX; // -600일 때 0으로 이동
            sitem.style.transition = 'none'; // 트랜지션 제거
            sitem.style.transform = `translateX(${translateXValue}%)`;
            setTimeout(autoPlay, 5000); // 0.5초 후에 재생 재시작
        }, 500); // 0.5초 후에 translateXValue를 변경하여 자연스럽게 처리
    } else {
        translateXValue -= 105; // 이동 거리를 100%씩 감소시킴
        updateSlider();
        setTimeout(autoPlay, 3000); // 3초마다 재생 재시작
    }
}

autoPlay();

function updateSlider() {
    if (translateXValue < minTranslateX) {
        translateXValue = minTranslateX;
    }
    if (translateXValue > maxTranslateX) {
        translateXValue = maxTranslateX;
    }
    sitem.style.transition = 'transform 0.5s';
    sitem.style.transform = `translateX(${translateXValue}%)`;
    bullet.style.transition = 'width 0.5s';
    updateBulletWidth();
    updateActiveContent();
}

function updateBulletWidth() {
    const bulletWidth = (translateXValue - maxTranslateX) / (minTranslateX - maxTranslateX) * (150 - 6) + 6;
    bullet.style.width = bulletWidth + 'px';

    // bulletWidth에 따른 count.innerHTML 변경
    if (bulletWidth === 34.8) {
        count.innerHTML = 2;
    } else if (bulletWidth === 63.6) {
        count.innerHTML = 3;
    } else if (bulletWidth === 92.4) {
        count.innerHTML = 4;
    } else if (bulletWidth === 121.2) {
        count.innerHTML = 5;
    } else if (bulletWidth === 150) {
        count.innerHTML = 6;
    } else if (bulletWidth < 7) {
        count.innerHTML = 1;
    } else {
        count.innerHTML = 4;
    }
}
function updateActiveContent() {
    ppContents.forEach((content, index) => {
        if (index === Math.abs(translateXValue / 105)) {
            content.classList.add('active');
        } else if (content.classList.contains('active')) {
            content.classList.add('remove-active'); // 트랜지션을 위한 클래스 추가
            setTimeout(() => {
                content.classList.remove('active', 'remove-active'); // 클래스 제거
            }, 500); // 트랜지션 시간과 동일한 시간(0.5초) 이후에 제거
        }
    });
}