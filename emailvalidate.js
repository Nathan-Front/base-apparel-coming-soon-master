const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener('submit', function(e){
    e.preventDefault();

    validateEmail();
});

function validateEmail(){
    const inputEmail = email.value.trim();

    if(inputEmail === ''){
        sendErrorMessage(email, 'This should not be empty');
    }else if(!emailFormat(email.value)){
        sendErrorMessage(email, 'Enter correct email');
    }else{
        sendSuccessMessage(email, 'Send Successfully');
    }
}

function sendErrorMessage(input, message){
    const validate = input.parentElement;
    const span = validate.querySelector('span');
    validate.className ='validate error';
    span.innerText = message;
}

function sendSuccessMessage(input, message){
    const validate = input.parentElement;
    const span = validate.querySelector('span');
    validate.className ='validate success';
    span.innerText = message;
}

function emailFormat(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}