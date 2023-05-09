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

// Fonction modale de détails projets
let modalField = document.getElementById("modal-detail-projet");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Exécution du code après chargement de la page");
  const fieldProjets = document.querySelectorAll("#Card  .card");
  const fieldProjetsListe = document.querySelectorAll('[class*="lists_item"]');

  fieldProjets.forEach((cardPorjetField) => {
    cardPorjetField.addEventListener("click", function () {
      let title = cardPorjetField.querySelector("h2").textContent;
      openModal(title);
    });
  });
  fieldProjetsListe.forEach((cardPorjetField) => {
    cardPorjetField.addEventListener("click", function () {
      let title = cardPorjetField.querySelector("h2").textContent;
      openModal(title);
    });
  });
});

// let fieldCloseModal = document.getElementById("modal-close");
// console.log("field CLOSE MODALE" + fieldCloseModal);

// fieldCloseModal.addEventListener("click", function () {
//   console.log("close modale");
//   closeModal();
// });

function closeModal() {
  console.log("close modale");
  modalField.style.display = "none";
}

function openModal(nomProjet) {
  modalField.style.display = "block";
  const dataProjets = Projet;
  const projet = dataProjets.filter((el) => el.nom === nomProjet)[0];
  afficheModalProjet(projet);
  fieldCloseModal = document.getElementById("modal-close");
  fieldCloseModal.addEventListener("click", function () {
    closeModal();
  });
}

function afficheModalProjet(projet) {
  console.log(projet);
  const modalField = document.getElementById("modal-detail-projet");
  console.log("affiche modal projet" + projet);

  let ensembleImage = "";
  projet.visualisationUrl.forEach((el) => {
    ensembleImage +=
      '<div class="carousel-item">' +
      '<img src="' +
      el +
      '" class="d-block w-100" alt="...">' +
      "</div>";
  });

  modalField.innerHTML =
    '<div class="modal-container ">' +
    '<div class="modal description">' +
    '<div class="text">' +
    "<h1>" +
    projet.nom +
    "</h1>" +
    "<h2>" +
    projet.brief +
    "</h2>" +
    "<p>" +
    projet.description +
    "</p>" +
    "</div>" +
    "</div>" +
    '<div class="modal close" id="modal-close"> ' +
    "<p>X</p> " +
    "</div>" +
    '<div class="modal photo">' +
    '<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">' +
    '<div class="carousel-inner">' +
    '<div class="carousel-item active">' +
    '<img src="' +
    projet.imageCardUrl +
    '" class="d-block w-100" alt="...">' +
    "</div>" +
    ensembleImage +
    "</div>" +
    '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="visually-hidden">Previous</span>' +
    "</button>" +
    '<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="visually-hidden">Next</span>' +
    "</button>" +
    "</div>" +
    "</div>" +
    "</div>";
}
