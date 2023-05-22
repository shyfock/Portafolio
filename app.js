const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
const slides1 = document.querySelectorAll('.slide1');
const slides2 = document.querySelectorAll('.slide2');
const slides3 = document.querySelectorAll('.slide3');

let activeLink = 0;
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;

carousel1();
carousel2();
carousel3();

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

function carousel1() {
    for (let i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}
    slides1[slideIndex1-1].style.display = "block";
    setTimeout(carousel1, 3000);
}

function carousel2() {
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}
    slides2[slideIndex2-1].style.display = "block";
    setTimeout(carousel2, 3000);
}

function carousel3() {
    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) {slideIndex3 = 1}
    slides3[slideIndex3-1].style.display = "block";
    setTimeout(carousel3, 3000);
}