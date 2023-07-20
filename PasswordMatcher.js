const firstPasswordInput = document.querySelector("#password");
const secondPasswordInput = document.querySelector("#confirm-password");

function checkForMatchingPassword () {
    if (firstPasswordInput.value == secondPasswordInput.value) {
        firstPasswordInput.classList.remove("error");
        secondPasswordInput.classList.remove("error");
    } else {
        firstPasswordInput.classList.add("error");
        secondPasswordInput.classList.add("error");
    }
}

firstPasswordInput.addEventListener("input", checkForMatchingPassword);
secondPasswordInput.addEventListener("input", checkForMatchingPassword);