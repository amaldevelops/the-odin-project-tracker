let password1Check;
let password2Check;

const password1=document.querySelector("#password1");
const password2=document.querySelector("#password2");
const passwordStatus=document.querySelector("#passwordStatus");

document.addEventListener("DOMContentLoaded", function() {
    var submitButton=document.querySelector("#createButton")

    submitButton.addEventListener("click", function() {

        let passwordCompare=password1.value==password2.value;
        console.log(passwordCompare);

        if (passwordCompare===true)
            {
                passwordStatus.textContent="Passwords matched"; 
                passwordStatus.style.color="#89c851";
                password1.style.background="#89c851";
                password2.style.background="#89c851";
            }
        
        else if (passwordCompare===false)
        {
            passwordStatus.textContent="Passwords don't match";
            passwordStatus.style.color="red";
            password1.style.background="#ef1616";
            password2.style.background="#ef1616";
        }
        
    });
});

