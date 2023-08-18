const smbtn = document.querySelector(".s-b-1");
const smbtn2 = document.querySelector(".s-b-2");
const smpop = document.querySelector('.smallbtn');
const smcl = document.querySelector('.small-close');

smbtn2.style.display = "none";

smbtn.addEventListener('mouseover', () => {
    smpop.classList.add('active');
    smbtn.style.display = 'none'; // 마우스 아웃시 숨김
    smbtn2.style.display = "block";

});
smbtn2.addEventListener('mouseover', function () {
    smpop.classList.remove('active');
    smbtn.style.display = 'block'; // 마우스 아웃시 숨김
    smbtn2.style.display = 'none'; // 마우스 아웃시 숨김


})
