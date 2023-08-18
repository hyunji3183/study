function handleWindowSize() {
    const boxes = document.querySelectorAll('.Sejong-box1, .Sejong-box2, .Sejong-box3');
    const sbc = document.querySelectorAll('.se-box-con');

    let boxPrimaryWidth = '700px';
    let boxSecondaryWidth = '165px';
    let clickedBoxIndex = -1;

    if (window.innerWidth < 1024) {
        boxPrimaryWidth = '454px';
        boxSecondaryWidth = '141px';
    }

    const setBoxState = (index) => {
        boxes.forEach((box, i) => {
            box.style.width = i === index ? boxPrimaryWidth : boxSecondaryWidth;
            if (i === index) {
                box.classList.add('active-box'); // 해당 박스에 클래스 추가
            } else {
                box.classList.remove('active-box'); // 다른 박스에서 클래스 제거
            }
        });

        sbc.forEach((con, i) => {
            con.style.display = i === index ? 'block' : 'none';
        });

        clickedBoxIndex = index;
    };

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            if (index === clickedBoxIndex) {
                setBoxState(-1); // 클릭한 박스를 다시 클릭하면 초기 상태로 변경
            } else {
                setBoxState(index);
            }
        });
    });
}

function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('load', handleWindowSize);
window.addEventListener('resize', debounce(handleWindowSize, 250));
