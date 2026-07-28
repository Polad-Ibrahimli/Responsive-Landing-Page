const menuToggle = document.querySelector('.menu-toggle');
const navElements = document.querySelector('.nav-elements');
const button=document.querySelector(".contact-form button");

button.addEventListener("click",event=>{

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern=/^[a-zA-Z]+ [a-zA-Z]/;

    const nameValue=document.getElementById("fname").value;
    const emailValue=document.getElementById("femail").value;
    const additionalMsg=document.getElementById("fnotes").value;

    const nameError=document.getElementById("nameError");
    const emailError=document.getElementById("emailError");
    const notesError=document.getElementById("notesError");

    event.preventDefault();
    if (!emailPattern.test(emailValue)) {
     emailError.textContent = "Please enter a valid email address!";
    }
    else{
        document.getElementById("emailError").textContent="";
    }
    if(!namePattern.test(nameValue)){
        nameError.textContent="Please enter a valid name!";
    }
    else{
        nameError.textContent="";
    }
    if(additionalMsg===""){
        notesError.textContent="This part should not be empty."
    }

})

menuToggle.addEventListener('click', () => {
    navElements.classList.toggle('active');
});

