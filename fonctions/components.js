// Appel de la fonction init_client_duels au après chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  var urlcourante = document.location.href;
  switch (true) {
    case urlcourante.includes(2021):
      initPage2021();
      break;
    case urlcourante.includes(2022):
      initPage2022();
      break;
    default:
      break;
  }
});

const team = Equipe;
const fieldEquipeTitre = document.querySelector("#section-equipe h3");
const fieldEquipeDescription = document.querySelector(
  "#section-equipe .presation-paragraph"
);

function initPage2021() {
  const equipeAnnee = team.filter((el) => el.annee === "2021");
  fieldEquipeTitre.style.display = "block";
  fieldEquipeDescription.style.display = "block";
  afficheEquipe(equipeAnnee);
}

function initPage2022() {
  const equipeAnnee = team.filter((el) => el.annee === "2022");
  fieldEquipeTitre.style.display = "block";
  fieldEquipeDescription.style.display = "block";
  afficheEquipe(equipeAnnee);
}

function afficheEquipe(arr) {
  const cardField = document.getElementById("grid-equipe");

  arr.forEach((el) => {
    cardField.innerHTML +=
      '<div class="col card-container" >' +
      '<div class="col card-equipe">' +
      '<div id="photo">' +
      '<img class="photo-membre" id="photo-membre" src=' +
      el.photoUrl +
      ' alt="">' +
      "</div>" +
      '<div id="nom">' +
      el.prenom +
      " " +
      el.nom +
      "</div>" +
      '<div id="formation">' +
      el.niveau +
      " " +
      el.formation +
      "</div>" +
      "</div>" +
      "</div>";
  });
}
