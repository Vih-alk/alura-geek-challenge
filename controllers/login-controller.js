const form = document.querySelector("[data-login]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = document.querySelector("[data-email]").value;
    const senha = document.querySelector("[data-senha]").value;

    if(email.length > 5 && senha.length > 5) {
        window.location.href = "../pages/produtos-home.html";
    } 

});