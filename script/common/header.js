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
})