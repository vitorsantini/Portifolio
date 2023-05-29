const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


const goTopButton = document.querySelector('.go-to-top');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200){
        goTopButton.style.display = 'flex'
    } else {
        goTopButton.style.display = 'none'
    }
}

goTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behaveior: 'smooth'
    })
})