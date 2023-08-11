const header = document.querySelector('.header-inner');
const headerDrop = document.querySelector('.header-drop');

header.addEventListener('mouseover', function() {
    headerDrop.classList.add('active');
});

header.addEventListener('mouseout', function() {
    headerDrop.classList.remove('active');
});
