const data = Projet;
const url = window.location.href;
console.log("URL complète : " + url);
var parametres = window.location.search;
console.log("Paramètres : " + parametres);
const annee = url.split("annee=")[1];
console.log(annee);

const cardContainer = document.querySelector(".card-container");

const dataFilter = data.filter((el) => el.année === annee);

const dataProjet = annee ? dataFilter : data;

// Créer une carte pour chaque objet de données
dataProjet.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = "#D9D9D9";
  card.style.textAlign = "center";
  card.style.width = "300px";
  card.innerHTML = `<img src="${item.imageCardUrl}"id="card_image"><h2>${item.nom}</h2><p>${item.brief}</p>`;
  cardContainer.appendChild(card);
});

let compt = 0;
const listContainer = document.querySelector("#list-container");
dataProjet.forEach((list) => {
  if (compt % 2 == 0) {
    listContainer.innerHTML += `
          <div class="lists_item_left">
              <div class="list"><img src="${list.imageCardUrl}" alt="${list.imageCardUrl}"class="list_image"></div>
              <div class="list_content_left">
              <h2 class="list_title">${list.nom}</h2>
              <p class="list_text">${list.brief}</p>
              <p class="list_year">${list.année}</p>
              <p class="list_artist">${list.artiste}</p>
              <p class="list_description_left">${list.description}</p>
              </div>
          </div>
      `;
  } else {
    listContainer.innerHTML += `
          <div class="lists_item_1">
          <div class="list_content_right">
              <h2 class="list_title">${list.nom}</h2>
              <p class="list_text">${list.brief}</p>
              <p class="list_year">${list.année}</p>
              <p class="list_artist">${list.artiste}</p>
              <p class="list_description_right">${list.description}</p>
              </div>
              <div class="list"><img src="${list.imageCardUrl}" alt="${list.imageCardUrl}"class="list_image"></div>
          </div>
      `;
  }
  compt++;
});

let ProjectFilter = Projet.filter((el) => el.telechargementDispo === true);
const listModele = document.querySelector("#list-modele");
ProjectFilter.forEach((list) => {
  if (compt % 2 == 0) {
    listModele.innerHTML += `
          <div class="lists_item_left">
              <div class="list"><img src="${list.imageCardUrl}" alt="${list.imageCardUrl}"class="list_image"></div>
              <div class="list_content_left">
              <h2 class="list_title">${list.nom}</h2>
              <p class="list_text">${list.brief}</p>
              <p class="list_year">${list.année}</p>
              <p class="list_artist">${list.artiste}</p>
              <p class="list_description_left">${list.description}</p>
              </div>
          </div>
      `;
  } else {
    listModele.innerHTML += `
          <div class="lists_item_1">
          <div class="list_content_right">
              <h2 class="list_title">${list.nom}</h2>
              <p class="list_text">${list.brief}</p>
              <p class="list_year">${list.année}</p>
              <p class="list_artist">${list.artiste}</p>
              <p class="list_description_right">${list.description}</p>
              </div>
              <div class="list"><img src="${list.imageCardUrl}" alt="${list.imageCardUrl}"class="list_image"></div>
          </div>
      `;
  }
  compt++;
});
