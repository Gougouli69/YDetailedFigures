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

    GoToTop();
    renderFilter();
    renderProjects(projects);
    filterEvent();
    searchEvent();

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

    function renderFilter() {
        const YearsWrapper = document.querySelector(".filter-wrapper");
        let YearsHTML = '';
        years.forEach(year => {
            YearsHTML += `<div class="filter-item selected" id="year-${year}" style="border:solid 1px var(--year-${year});color:var(--year-${year});">${year}</div>`
        });
        YearsWrapper.innerHTML = YearsHTML;
    }

    function filterEvent() {
        const filterBtn = document.querySelectorAll(".filter-item");
        const teamWrapper = document.querySelectorAll(".team-item");
        filterBtn.forEach(btn => {
            btn.addEventListener("click", function () {
                this.classList.toggle("selected");
                const teamId = this.getAttribute('id');
                const teamYear = teamId.split('-')[1];
                teamWrapper.forEach(team => {
                    const year = team.getAttribute('data-year');
                    if (teamYear === year) {
                        team.classList.toggle("hidden");
                    }
                })
            });
        })
    }

    function searchEvent() {
        //TODO Search by projects
        const searchbar = document.querySelector("#searchbar");

        searchbar.addEventListener("input", function () {
            const searchedText = searchbar.value.trim().toLowerCase();
            let result = "";
            resultByName = projects.filter(project => project.name.toLowerCase().includes(searchedText))
            resultByArtist = [];
            projects.forEach(project => {
                if (project.artist.toLowerCase().includes(searchedText)) {
                    resultByArtist.push(project)
                }
            })
            result.push(resultByName, ...resultByArtist);
            renderProjects(result);
        })
    }

    function renderProjects(projects) {
        const projectWrappper = document.querySelector(".project-wrapper");
        let projectHTML = ``;
        projects.forEach(project => {
            const { thumbnail, name } = project;
            projectHTML += `<div class="project" data-name="${name}" style="background-image:url(${thumbnail})"></div>`;
        });
        projectWrappper.innerHTML = projectHTML;
    }

    //TODO RENDER LIGHTBOX + EVENTS

    //TODO RENDER TAGS ON LIGHTBOX
    // function renderTags(member) {
    //     let tagHTML = ``;
    //     const projectsByMember = projects.filter(project => project.artist.includes(member.name))
    //     console.log(projectsByMember);
    //     projectsByMember.forEach(project => {
    //         if (!tagHTML.includes(project.name) || !tagHTML.includes(project.theme) || !tagHTML.includes(project.year)) {
    //             tagHTML += `<div class="tag-project" data-name='${project.name}'>${project.name}</div>`
    //             tagHTML += `<div class="tag-theme" data-name='${project.theme}'>${project.theme}</div>`
    //             tagHTML += `<div class="tag-year" data-name='${project.year}'>${project.year}</div>`
    //         }
    //     })
    //     return tagHTML;
    // }

})