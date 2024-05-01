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

   renderFilter();
   renderTeams(members);
   filterEvent();
   searchEvent();
   mobileEvent();

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
      const teamWrapper = document.querySelectorAll(".team");
      filterBtn.forEach(btn => {
         btn.addEventListener("click", function () {
            this.classList.toggle("selected");
            const teamId = this.getAttribute('id');
            const teamYear = teamId.split('-')[1];
            teamWrapper.forEach(team => {
               const year = team.closest(".team").getAttribute('data-year');
               if (teamYear === year) {
                  team.closest(".team").classList.toggle("hidden");
               }
            })
         });
      })
   }

   function searchEvent() {
      const searchbar = document.querySelector("#searchbar");
      searchbar.addEventListener('input', function () {
         const searchedText = searchbar.value.trim().toLowerCase();
         let result = members.filter(member => member.name.toLowerCase().includes(searchedText))
         renderTeams(result);
      });
   }

   function mobileEvent() {
      const membersItem = document.querySelectorAll(".member-item");
      membersItem.forEach(item => {
         item.addEventListener("click", function () {
            this.querySelector(".member-infos").style.transform = "translate(0)";
         })
      })
      const membersInfos = document.querySelectorAll(".member-infos");
      membersInfos.forEach(info => {
         info.addEventListener("click", function () {
            this.style.transform = "translate(100%)";
         })
      })
   }

   function renderTeams(members) {
      const teamWrappper = document.querySelector(".team-wrapper");
      let teamHTML = "";
      for (let i = 0; i < years.length; i++) {
         let year = years[i]
         const membersByYear = members.filter(member => member.year.includes(year))
         const LeaderByYear = membersByYear.filter(member => member.isLeader.includes(year))
         teamHTML += `<div class="team" data-year="${year}">
            <div class="separator"></div>
            <div class="team-year">Équipe ${year}</div>
            <ul class="member-list">
               ${renderMembers(membersByYear, LeaderByYear)}
            </ul>
         </div>`;
      }
      teamWrappper.innerHTML = teamHTML;
   }

   function renderMembers(members, leaders) {
      let memberHTML = '';
      if (members.length === 0) {
         memberHTML = `<div class="no-result">Aucun résultat</div>`;
      }
      else {
         members.forEach(member => {
            const { name, role, img } = member;
            const isLeader = leaders.map(leader => leader.name == name);
            memberHTML += `<li class="member-item">
            <div class="member-img" style="background-image:url('${img}')"></div>
            <div class="member-infos">
               <p class="member-name">${name}</p>
               <p class="member-role">${role}${isLeader.includes(true) ? ', Chef de projet' : ''}</p>
               <div class="member-tags">${renderTags(member)}</div>
               <div class="contact">${renderContact(member)}</div>
            </div>
         </li>`;
         })
      }
      return memberHTML;
   }

   function renderContact(member) {
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
            `<a href='${portfolio}' target="_blank">
               <img class="portfolio" src="./assets/icons/briefcase.svg" />
            </a>`
            : ``}
            ${mail ?
            `<a href='mailto:${mail}'>
               <img class="mail" src="./assets/icons/mail.svg" />
            </a>`
            : ``}
            `;
   }

   function renderTags(member) {
      let tagHTML = ``;
      const projectsByMember = projects.filter(project => project.artist.includes(member.name))
      const projectsName = [];
      projectsByMember.forEach(project => {
         if (!tagHTML.includes(project.name) && !projectsName.includes(project.name)) {
            projectsName.push(project.name);
            tagHTML += `<div class="tag-project" data-name='${project.name}'>${project.name}</div>`
         }
      })
      return tagHTML;
   }

})