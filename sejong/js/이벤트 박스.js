const ebx = document.querySelector('.event-box'); // .event-box 요소를 선택합니다.
const ebx1 = document.querySelector('.event-box1');
const ebx2 = document.querySelector('.event-box2');
const ebx3 = document.querySelector('.event-box3');
const ebx4 = document.querySelector('.event-box4');

const observer20 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                ebx1.classList.add('active2');
            }, 0);
            setTimeout(() => {
                ebx2.classList.add('active2');
            }, 1000); // 1초 후에 클래스 추가
            setTimeout(() => {
                ebx3.classList.add('active2');
            }, 2000); // 2초 후에 클래스 추가
            setTimeout(() => {
                ebx4.classList.add('active2');
            }, 3000); // 3초 후에 클래스 추가
        }
    });
});

observer20.observe(ebx); // .event-box 요소를 감시합니다.
