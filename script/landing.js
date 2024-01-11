document.addEventListener("DOMContentLoaded", () => {
    GoToTop();
})

function GoToTop() {
    const arrowToTop = document.querySelector(".arrow-to-top");
    arrowToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    })
}
