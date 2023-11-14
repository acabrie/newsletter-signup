// Form Validation

const page = document.querySelector('main');
const template = document.querySelector('.thankyou');
const error = document.querySelector('.error-message');
const button = document.getElementById('button');
const dismissButton = document.getElementById('dismiss-btn');
const pattern = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
const userEmail = document.getElementById('user-email');
const email = document.getElementById('email'); 


let isValid;

function validation(){

    if(!email.value.match(pattern)){
        error.textContent = "Valid email required";
        email.style.outlineColor = "hsl(4, 100%, 67%)";
        email.style.borderColor = "hsl(4, 100%, 67%)";
        email.style.backgroundColor = "hsla(4, 100%, 67%, 0.125)";
        return false
    } else{
        error.textContent = ""
        email.style.outlineColor = "hsl(119, 87%, 78%)";
        email.style.borderColor = "hsl(119, 87%, 78%)";
        email.style.backgroundColor = "hsla(119, 87%, 78%, 0.125)";
        return isValid = true
    };

};


button.addEventListener('click', (event) => {
    event.preventDefault()

    if(isValid == true){
        page.innerHTML = template.innerHTML;
    }
});



function reloadWindow(){
    window.location.reload();
};

