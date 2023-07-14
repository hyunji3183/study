// 추가 => prepend(앞)/append(뒤)

$('body').prepend('<header></header>');
$('header').load('./inc.html nav', menu);
// load호출 뒤 callback함수를 선언 하여 기능 작동

function menu() {
    localStorage.num && $('header nav a').eq(localStorage.num).css('color','red');

    $('header nav a').on('click', function (e) {
        e.preventDefault();

        localStorage.setItem('num', $(this).index());
        location.href = $(this).attr('href');
    })
}