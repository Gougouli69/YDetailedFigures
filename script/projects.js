document.addEventListener("DOMContentLoaded", () => {
    const projects = Projects;
    const years = [];

    projects.forEach(project => {
        const { year } = project;
        if (!years.includes(year)) {
            years.push(year);
        }
    })
    years.sort();

    renderFilter();
    renderProjects(projects);
    filterEvent();
    searchEvent();
    handleLightbox();

    function renderFilter() {
        const YearsWrapper = document.querySelector(".filter-wrapper");
        let YearsHTML = '';
        years.forEach(year => {
            YearsHTML += `<div class="filter-item selected" id="year-${year}">${year}</div>`
        });
        YearsWrapper.innerHTML = YearsHTML;
    }

    function filterEvent() {
        const filterBtn = document.querySelectorAll(".filter-item");
        const projects = document.querySelectorAll(".project");
        filterBtn.forEach(btn => {
            btn.addEventListener("click", function () {
                this.classList.toggle("selected");
                const projectId = this.getAttribute('id');
                const year = projectId.split('-')[1];
                projects.forEach(project => {
                    const projectYear = project.getAttribute("data-year");
                    if (year == projectYear) {
                        project.classList.toggle("hidden");
                    }
                })
            });
        })
    }

    function searchEvent() {
        const searchbar = document.querySelector("#searchbar");
        searchbar.addEventListener('input', function () {
            const searchedText = searchbar.value.trim().toLowerCase();
            let result = projects.filter(project => project.name.toLowerCase().includes(searchedText));
            projects.map(project => {
                project.artist.forEach(artist => {
                    if (artist.toLowerCase().includes(searchedText)) {
                        if (!result.includes(project)) {
                            result.push(project);
                        }
                    }
                })
            })
            renderProjects(result);
        });
    }

    function renderProjects(projects) {
        const projectWrappper = document.querySelector(".project-wrapper");
        let projectHTML = ``;
        if (projects.length) {
            projects.forEach(project => {
                const { thumbnail, name, year } = project;
                projectHTML += `<div class="project" data-name="${name}" data-year="${year}" style="background-image:url(${thumbnail ? thumbnail : "./assets/img/visuel-a-venir.jpg"})"></div>`;
            });
        }
        else {
            projectHTML = `<p class="no-result">Aucun résultat</p>`;
        }
        projectWrappper.innerHTML = projectHTML;
    }

    function handleLightbox() {
        const projects = document.querySelectorAll(".project");
        const lightboxWrapper = document.querySelector(".project-lightbox");
        const lightboxBackground = document.querySelector(".project-lightbox-background");
        projects.forEach(project => {
            project.addEventListener("click", () => {
                let imgProject = "";
                let thumbnailProject = "";
                lightboxBackground.classList.toggle("hidden");
                lightboxWrapper.classList.toggle("hidden");
                const projectName = project.getAttribute("data-name");
                const selectedProject = Projects.find(project => project.name == projectName);
                let { name, artist, img, desc, year, model_3d, isDownloadable, thumbnail } = selectedProject;
                if (!img) {
                    imgProject = "./assets/img/visuel-a-venir.jpg"
                }
                else {
                    imgProject = img;
                }
                if (!thumbnail) {
                    thumbnailProject = "./assets/img/visuel-a-venir.jpg";
                }
                else {
                    thumbnailProject = thumbnail;
                }
                lightboxWrapper.innerHTML = `<div class="img-wrapper">
                    <img class="big-img" src="${thumbnailProject}" />
                </div>
                <div class="mini-img-list">
                    ${renderMiniImgList(imgProject, thumbnailProject)}
                </div>
                <div class="info-wrapper">
                <h4 id="name-year">${name}</h4>
                <p id="artist">${artist} - ${year}</p>
                    <div class="info">
                        <p id="desc">${desc}</p>
                        ${isDownloadable ? `<a href="${model_3d}"></a>` : ""}
                    </div>
                </div>
                <img src="./assets/icons/close.svg" class="btn-close">`;
                const btnCloseLightbox = document.querySelector(".project-lightbox .btn-close");
                btnCloseLightbox.addEventListener("click", function () {
                    lightboxWrapper.classList.toggle("hidden");
                    lightboxBackground.classList.toggle("hidden");
                });

                const bigImg = document.querySelector(".big-img");
                const miniImgs = document.querySelectorAll(".mini-img");

                miniImgs.forEach(mini => {
                    mini.addEventListener("click", function () {
                        let miniSRC = this.getAttribute("src");
                        bigImg.setAttribute("src", miniSRC);
                    })
                })
            })
        });

        lightboxBackground.addEventListener("click", function () {
            this.classList.toggle("hidden");
            lightboxWrapper.classList.toggle("hidden");
        });

    }

    function renderMiniImgList(imgs, thumbnail) {
        let miniImgListHTML = `<img src="${thumbnail}" class="mini-img" />`
        if (imgs != thumbnail) {
            imgs.map(img => {
                miniImgListHTML += `<img src="${img}" class="mini-img" />`
            })
        }
        return miniImgListHTML;
    }

})