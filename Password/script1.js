document.getElementById("password").addEventListener("input", function(){
    const password = this.value;

    const maiusculo = /[A-Z]/;
    const minusculo = /[a-z]/;
    const numero = /[0-9]/;
    const simbolo = /[!@#$%^&*(),.?":{}|<>]/;

    updateValidation(
        "upperCase",
        maiusculo.test(password)
    );

    updateValidation(
        "lowercase",
        minusculo.test(password)
    );

    updateValidation(
        "number",
        numero.test(password)
    );

    updateValidation(
        "specialChar",
        simbolo.test(password)
    );
});

function updateValidation(elementId, isValid){
    const element = document.getElementById(elementId);
    const icon = element.querySelector("i");

    if(isValid){
        element.classList.remove("invalid");
        element.classList.add("valid");
        icon.classList.remove("bi-shield-x");
        icon.classList.add("bi-shield-check");
    }
    else{
        element.classList.remove("valid");
        element.classList.add("invalid");
        icon.classList.remove("bi-shield-check");
        icon.classList.add("bi-shield-x");
    }
}




