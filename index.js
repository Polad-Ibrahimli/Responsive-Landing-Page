const menuToggle = document.querySelector('.menu-toggle');
const navElements = document.querySelector('.nav-elements');
const button=document.querySelector(".contact-form button");

button.addEventListener("click",event=>event.preventDefault())

menuToggle.addEventListener('click', () => {
    navElements.classList.toggle('active');
});

