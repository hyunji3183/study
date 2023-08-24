//슬라이드
document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.querySelector('.notice_slide');
    const slides = slideContainer.querySelectorAll('p');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.transform = 'translateY(0)';
                slide.style.opacity = '1';
            } else {
                slide.style.transform = 'translateY(-100%)';
                slide.style.opacity = '0';
            }
        });
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    showSlide(currentSlideIndex);
    setInterval(nextSlide, 3000); 
});

//라인메뉴
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu_item');
    const linePoints = document.querySelectorAll('.line_point');
    const menuCircles = document.querySelectorAll('.menu_circle');
  
    menuItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove('active');
        });
        linePoints.forEach((linePoint) => {
          linePoint.style.display = 'none';
        });
        menuCircles.forEach((circle) => {
          circle.style.display = 'none';
        });
  
        item.classList.add('active');
        linePoints[index].style.display = 'block';
        menuCircles[index].style.display = 'inline-block';
      });
    });
  
    // 초기에 첫 번째 메뉴 선택 표시
    menuItems[0].classList.add('active');
    linePoints[0].style.display = 'block';
    menuCircles[0].style.display = 'inline-block';
    
  });


//탭메뉴이동
  document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu_item');
    const tableContainers = document.querySelectorAll('.table_radius');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            menuItems.forEach((menuItem) => {
                menuItem.classList.remove('active');
            });

            item.classList.add('active');
            tableContainers.forEach((tableContainer) => {
                tableContainer.style.display = 'none';
            });

            if (index === 0) {
                document.querySelector('.all_ele').style.display = 'block';
            } else if (index === 1) {
                document.querySelector('.ongoing').style.display = 'block';
            } else if (index === 2) {
                document.querySelector('.ended').style.display = 'block';
            }
        });
    });
});


// 미디어쿼리
media();
function media(){
  const m = window.matchMedia('(max-width:640px)');
const elGoingImg = document.getElementsByClassName("going");
const elEndImg = document.getElementsByClassName("end");

function changeImageSrc(images, newSrc) {
  Array.from(images).forEach(image => {
    image.src = newSrc;
  });
}

if (m.matches) {
  changeImageSrc(elGoingImg, "../imgs/rental/m_state.png");
  changeImageSrc(elEndImg,"../imgs/rental/m_state_2.png");
} else {
  changeImageSrc(elGoingImg, "../imgs/rental/state.png");
  changeImageSrc(elEndImg, "../imgs/rental/state_2.png");
}

}


