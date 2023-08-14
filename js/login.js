// step-1: add click event handler in submit btn
document.getElementById('submit-btn').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // remember that to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3:get password
    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    //danger: do not verify email password on the clint side
    // step-4: verify email and password
    if(email === 'matir@bank.com' && pass === '123456'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user email or password');
    }
})