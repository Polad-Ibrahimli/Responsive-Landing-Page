
const menuToggle = document.querySelector('.header__toggle');
const navList = document.querySelector('.header__nav-list');
const submitButton = document.querySelector('.contact__submit');
 
submitButton.addEventListener("click", event => {
 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
 
    const nameValue = document.getElementById("fname").value;
    const emailValue = document.getElementById("femail").value;
    const additionalMsg = document.getElementById("fnotes").value;
 
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const notesError = document.getElementById("notesError");
 
    event.preventDefault();
 
    if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address!";
    } else {
        emailError.textContent = "";
    }
 
    if (!namePattern.test(nameValue)) {
        nameError.textContent = "Please enter a valid name!";
    } else {
        nameError.textContent = "";
    }
 
    if (additionalMsg === "") {
        notesError.textContent = "This part should not be empty.";
    } else {
        notesError.textContent = "";
    }
 
})
 
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const isExpanded = navList.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
});

