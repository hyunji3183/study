

$('body main').before('<header></header>');
$('header').load('./header_footer.html .header_wrap');

$('body main').after('<aside></aside>');
$('aside').load('./header_footer.html aside a');

$('aside').after('<footer></footer>');
$('footer').load('./header_footer.html .footer_inner');


const $topBtn = document.querySelector("aside");

$topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}