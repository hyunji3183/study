function dataChange(pageUrl) {
    $('main').removeClass('active');

    setTimeout(() => {
        $('main').load(pageUrl, function () {
            $('main').addClass('active')
        })
    }, 1000);
}
dataChange('./main.html')

$('header a').on('click', function (e) {
    e.preventDefault();

    let url = $(this).attr('href');
// 히스토리에 값을 쌓아서 뒤로가기 앞으로가기를 할 수 있게함
    history.pushState({num:$(this).index()},'','');
    dataChange(url);
})
// state에 null과 undefined값이 나타나면 num값이 없으니 조건을달아둠(?)
$(window).on('popstate',function(){
    let num = history.state?.num || 0 ;
    let url = $('header a').eq(num).attr('href');
    dataChange(url);
})