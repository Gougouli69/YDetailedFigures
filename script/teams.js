document.addEventListener("DOMContentLoaded", () => {
   const members = Members;
   const projects = Projects;
   const years = [];
   members.forEach(member => {
      const { year } = member;
      year.forEach(y => {
         if (!years.includes(y)) {
            years.push(y);
         }
      })
   })
   years.sort();

   GoToTop();
   renderFilter();
   renderTeams(members);
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
         YearsHTML += `<div class="filter-item selected" id="year-${year}">${year}</div>`
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
      console.log(members)
      searchbar.addEventListener('input', function () {
         const searchedText = searchbar.value.trim().toLowerCase();
         let result = members.filter(member => member.name.toLowerCase().includes(searchedText))
         console.log("result", result)
         renderTeams(result);
      });
   }

   function renderTeams(members) {
      console.log("members", members)
      const teamWrappper = document.querySelector(".team-wrapper");
      let teamHTML = "";
      years.forEach(year => {
         const membersByYear = members.filter(member => member.year.includes(year))
         const LeaderByYear = membersByYear.filter(member => member.isLeader.includes(year))
         teamHTML += `<div class="team" data-year="${year}">
            <div class="team-year">Équipe ${year}</div>
            <ul class="member-list">
               ${renderMembers(membersByYear, LeaderByYear)}
            </ul>
         </div>`;
      })
      teamWrappper.innerHTML = teamHTML;
   }

   function renderMembers(members, leaders) {
      let memberHTML = '';

      if (members.length === 0) {
         memberHTML = `<div class="empty-skeleton">Aucun résultat</div>`;
      }
      else {
         members.forEach(member => {
            const { name, role, img } = member;
            memberHTML += `<li class="member-item">
            <div class="member-img" style="background-image:url('${img}')"></div>
            <div class="member-infos">
               <p class="member-name">${name}</p>
               <p class="member-role">${role}${leaders.includes(name)? ', Chef de projet': ''}</p>
               <div class="member-tags">${renderTags(member)}</div>
               <div class="contact">${renderContact(member)}</div>
            </div>
         </li>`;
         })
      }
      return memberHTML;
   }

   function renderContact(member) {
      //TODO ADD MAIL
      const { instagram, artstation, portfolio, github, mail } = member;
      return contactHTML = `${instagram ?
         `<a class="instagram_Logo" href="${instagram}" target="_blank">
                        <img src="./assets/img/logo-social-network/instagram.png" />
                     </a>`
         : ``}
            ${artstation ?
            `<a class="artstation_Logo" href="${artstation}" target="_blank">
                        <img src="./assets/img/logo-social-network/artstation.png" />
                     </a>`
            : ``}
            ${github ?
            `<a class="github_Logo" href="${github}" target="_blank">
                        <img src="./assets/img/logo-social-network/github-mark-white.svg" />
                     </a>`
            : ``}
            ${portfolio ?
            `<span class="material-symbols-outlined portfolio">
               work
            </span>`
            : ``}
            ${mail ? 
            `<span class="material-symbols-outlined mail">
               chat
            </span>`
            :``}
            `;
   }

   function renderTags(member) {
      //TODO CHECK DOUBLON
      let tagHTML = ``;
      const projectsByMember = projects.filter(project => project.artist.includes(member.name))
      console.log(projectsByMember);
      const projectsName = [];
      const projectsTheme = [];
      projectsByMember.forEach(project => {
         console.log(projectsName, projectsTheme)
         if (!tagHTML.includes(project.name) && !projectsName.includes(project.name)) {
            projectsName.push(project.name);
            tagHTML += `<div class="tag-project" data-name='${project.name}'>${project.name}</div>`
         }
         if (!tagHTML.includes(project.theme) && !projectsTheme.includes(project.theme)){
            projectsTheme.push(project.theme);
            tagHTML += `<div class="tag-theme" data-name='${project.theme}'>${project.theme}</div>`
         }
      })
      return tagHTML;
   }

})