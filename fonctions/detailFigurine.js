const params = new URLSearchParams(window.location.search);
const cardName = decodeURIComponent(params.get("nom"));

// Trouver la carte correspondante dans la liste des données de projet
const cardData = Projet.find((item) => item.nom === cardName);

// Mettre à jour les éléments HTML avec les informations de la carte sélectionnée
const titleElement = document.getElementById("card-title");
const briefElement = document.getElementById("card-brief");
const descriptionElement = document.getElementById("card-description");
const artisteElement = document.getElementById("card-artiste");
const dateElement = document.getElementById("card-date");
titleElement.textContent = cardData.nom;
briefElement.textContent = cardData.brief;
descriptionElement.textContent = cardData.description;
artisteElement.textContent = cardData.artiste;
dateElement.textContent = cardData.année;
console.log(cardData);
const imageElement = document.getElementById("card-image");
imageElement.innerHTML = `<img class="imgcard" src="${cardData.imageCardUrl}" width="70%">`;

const charaElement = document.getElementById("CharaDesign");
let imagesHtmla = "";

if (cardData.charaUrl.length >= 1 && typeof cardData.charaUrl != "string") {
  for (let i = 0; i < cardData.charaUrl.length; i++) {
    const img = new Image();
    img.onload = () => {
      imagesHtmla += `<img src="${cardData.charaUrl[i]}" width="50%">`;
      charaElement.innerHTML = imagesHtmla;
    };
    img.src = cardData.charaUrl[i];
  }
} else {
  charaElement.innerHTML = "";
}

const inspirationElement = document.getElementById("Inspiration");
let imagesHtmlb = "";
if (cardData.inspiUrl.length >= 1 && typeof cardData.inspiUrl != "string") {
  for (let i = 0; i < cardData.inspiUrl.length; i++) {
    const img = new Image();
    img.onload = () => {
      imagesHtmlb += `<img src="${cardData.inspiUrl[i]}" width="50%">`;
      inspirationElement.innerHTML = imagesHtmlb;
    };
    img.src = cardData.inspiUrl[i];
  }
} else {
  inspirationElement.innerHTML = "";
}

const visualisationElement = document.getElementById("Visualisation");
let imagesHtmlc = "";
if (
  cardData.visualisationUrl.length >= 1 &&
  typeof cardData.visualisationUrl != "string"
) {
  for (let i = 0; i < cardData.visualisationUrl.length; i++) {
    const img = new Image();
    img.onload = () => {
      imagesHtmlc += `<img class="visu" src="${cardData.visualisationUrl[i]}" width="50%">`;
      visualisationElement.innerHTML = imagesHtmlc;
    };
    img.src = cardData.visualisationUrl[i];
  }
} else {
  visualisationElement.innerHTML = "";
}
