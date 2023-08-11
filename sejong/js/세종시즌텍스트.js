const eventbox = document.querySelector('.event-box');
const eventboxs = document.querySelectorAll('.event-boxs');


const observer10 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            eventboxs.forEach(element => {
                element.classList.add('active');
            });
        } else {
            eventboxs.forEach(element => {
                element.classList.remove('active');
            });
        }
    });
});

observer10.observe(eventbox);
