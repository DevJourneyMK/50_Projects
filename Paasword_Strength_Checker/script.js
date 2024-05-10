
const inputField = document.querySelector("#password");
const outputField = document.querySelector("#output");

inputField.addEventListener("input", function(){
    console.log(inputField.value);
    let password = inputField.value;
    if(password.length < 8){
        outputField.innerText = "Password is too short";
        outputField.style.color = "orange";
    } else {
        if(password.search(/[a-z]/) === -1){
            outputField.innerText = "Password is missing lowercase letter";
            outputField.style.color = "red";
        }
        else if(password.search(/[A-Z]/) === -1){
            outputField.innerText = "Password is missing uppercase letter";
            outputField.style.color = "red";
        }
        else if(password.search(/[0-9]/) === -1){
            outputField.innerText = "Password is missing number";
            outputField.style.color = "red";
        }
        else if(password.search(/[!\@\#\$\%\&\*\()\_\+\\]/) === -1){
            outputField.innerText = "Password is missing special character";
            outputField.style.color = "red";
        }
       
        else {
            outputField.innerText = "Password is strong";
            outputField.style.color = "green";
        }
        
    }
});


