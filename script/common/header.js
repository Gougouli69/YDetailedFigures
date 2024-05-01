document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("header .logo-wrapper");
    logo.addEventListener("click", () => {
        document.location.href = "/index.html";
    })

    const tabs = document.querySelectorAll(".tab-item");
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            let tabID = this.getAttribute("id");
            switch (tabID) {
                case "landing":
                    document.location.href = "/index.html"
                    break;
                case "teams":
                    document.location.href = "/teams.html"
                    break;
                case "projects":
                    document.location.href = "/projects.html"
                    break;
                case "models_3d":
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
        mobileBackground.classList.toggle("hidden");
        mobileMenu.classList.add("open-menu-anim");
    })

    const iconCloseMenu = document.querySelector(".close-menu-icon");

    iconCloseMenu.addEventListener("click", () => {
        mobileBackground.classList.toggle("hidden");
        mobileMenu.classList.remove("open-menu-anim");
    })
    const pathname = location.pathname;
    const tabID = pathname.split('.')[0].substr(1);
    tabs.forEach(tab => {
        tab.classList.remove("selected");
    });
    const actualTab = document.querySelector(`header #${tabID == "3d_models" ? "models_3d" : tabID}`)
    actualTab && actualTab.classList.add("selected");
})