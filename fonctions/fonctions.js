// ----------bouton pour changer le style d'affichage de la page projet-------------
const iconeCard = document.getElementById("show-Card");
const iconeList = document.getElementById("show-List");
const iconeCardActive = document.getElementById("show-Card-active");
const iconeListActive = document.getElementById("show-List-active");
const affichageCard = document.getElementById("Card");
const affichageList = document.getElementById("List");

iconeCard.addEventListener("click", function () {
  affichageList.style.display = "none";
  affichageCard.style.display = "flex";
  iconeCard.style.display = "none";
  iconeList.style.display = "block";
  iconeCardActive.style.display = "block";
  iconeListActive.style.display = "none";
});

iconeList.addEventListener("click", function () {
  affichageCard.style.display = "none";
  affichageList.style.display = "block";
  iconeCard.style.display = "block";
  iconeList.style.display = "none";
  iconeCardActive.style.display = "none";
  iconeListActive.style.display = "block";
});

// Fonction modale
const projets = document.querySelectorAll(".card-container .card");
const modals = document.querySelectorAll(".modal-container");

projets.forEach((projet) => {
  projet.addEventListener("click", () => {
    const modalId = projet.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("close-modal")) {
      modal.style.display = "none";
    }
  });
});
