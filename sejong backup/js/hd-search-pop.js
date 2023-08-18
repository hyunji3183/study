const searchpop = document.querySelector(".header-search-container");
const openbtn = document.querySelector("#search-btn");
const closebtn = document.querySelector(".hd-search-close");

openbtn.addEventListener('click', function(){
    searchpop.classList.add('active');
})
closebtn.addEventListener('click',function(){
    searchpop.classList.remove('active');

})