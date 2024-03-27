document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("header .logo-wrapper");
    console.log(document.location.href)
    logo.addEventListener("click", () => {
        document.location.href = "/index.html";
    })

    const tabs = document.querySelectorAll(".tab-item");
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            let tabID = this.getAttribute("id");
            switch (tabID) {
                case "teams":
                    document.location.href = "/teams.html"
                    break;
                case "projects":
                    document.location.href = "/projects.html"
                    break;
                case "3D_Models":
                    document.location.href = "/3d_models.html"
                    break;
                case "about":
                    document.location.href = "/about.html"
                    break;
            }
        })
    })

    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileBackground = document.querySelector(".mobile-background")
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenuIcon.addEventListener("click", () => {
        mobileMenuIcon.classList.toggle("hidden")
        mobileBackground.classList.toggle("hidden");
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.add("open-menu-anim");
        mobileMenu.classList.remove("close-menu-anim");
    })

    const iconCloseMenu = document.querySelector(".close-menu-icon");

    iconCloseMenu.addEventListener("click", () => {
        mobileMenuIcon.classList.toggle("hidden")
        mobileBackground.classList.toggle("hidden");
        mobileMenu.classList.remove("open-menu-anim");
        mobileMenu.classList.add("close-menu-anim");
        mobileMenu.classList.toggle("hidden");
    })
})