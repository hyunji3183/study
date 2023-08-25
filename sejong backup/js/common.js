$('body main').before('<header></header>').after('<footer></footer>').after('<aside></aside>');;
if($('main').hasClass('index')){
    $('header').load('./html/main_header_footer.html .header_wrap');
    $('footer').load('./html/main_header_footer.html .footer_inner');
    $('aside').load('./html/main_header_footer.html aside a');
}
else{ 
    $('header').load('../html/header_footer.html .header_wrap');
    $('footer').load('../html/header_footer.html .footer_inner');
    $('aside').load('../html/header_footer.html aside a');
}


setTimeout(function(){

    // 상단 메뉴 프로필 아이콘 클릭 시 로그인 페이지 이동
    const log = document.querySelector(".link_profile");
    log.addEventListener("click", function(e) {
        e.preventDefault();
        const userInfo = JSON.parse(sessionStorage.getItem("kakao_user_info"));

        if (userInfo) {
            // If user info exists, redirect to mypage.html
            window.location.href = "./html/mypage.html";
        } else {
            alert("로그인 페이지로 이동합니다.")
            // If user info does not exist, redirect to login.html
            window.location.href = "./html/login.html";
        }
    });

    // 탑 버튼
    const $topBtn = document.querySelector("aside");
    $topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

}, 1000);