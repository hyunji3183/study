const scrollBox1 = document.querySelector('.p-animation');
const scrollBox2 = document.querySelector('.p-animation2');
const scrollBox3 = document.querySelector('.p-animation3');
const scrollBox4 = document.querySelector('.p-animation4');
const width1212 = document.querySelector('.puplewidth');
const circle1212 = document.querySelector('.puplecircle');
const width121 = document.querySelector('.puplewidth2');
const circle121 = document.querySelector('.puplecircle2');
const width12 = document.querySelector('.puplewidth3');
const circle12 = document.querySelector('.puplecircle3');
const width1 = document.querySelector('.puplewidth4');
const circle1 = document.querySelector('.puplecircle4');

// Intersection Observer 생성 - scrollBox1
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            width1212.classList.add('active');

            setTimeout(function () {
                circle1212.classList.add('active');
            }, 300); // 0.3초 후에 클래스 추가
        } else {
            width1212.classList.remove('active');
            circle1212.classList.remove('active');

        }
    });
});
// Intersection Observer 생성 - scrollBox2
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            width121.classList.add('active');

            setTimeout(function () {
                circle121.classList.add('active');
            }, 300); // 0.3초 후에 클래스 추가
        } else {
            width121.classList.remove('active');
            circle121.classList.remove('active');
        }
    });
});

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            width12.classList.add('active');

            setTimeout(function () {
                circle12.classList.add('active');
            }, 300); // 0.3초 후에 클래스 추가
        } else {
            width12.classList.remove('active');
            circle12.classList.remove('active');

        }
    });
});

const observer4 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            width1.classList.add('active');
            setTimeout(function () {
                circle1.classList.add('active');
            }, 300); // 0.3초 후에 클래스 추가
        } else {
            width1.classList.remove('active');
            circle1.classList.remove('active');

        }
    });
});


// 요소를 각각의 옵저버에 추가
observer1.observe(scrollBox1);
observer2.observe(scrollBox2);
observer3.observe(scrollBox3);
observer4.observe(scrollBox4);


