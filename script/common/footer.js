document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("footer .logo-wrapper");
    logo.addEventListener("click", () => {
        document.location.href = "/landing.html";
    })
})