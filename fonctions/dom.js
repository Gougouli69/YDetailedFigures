const data = Projet;
const cardContainer = document.querySelector(".card-container");

data.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = "#D9D9D9";
  card.style.textAlign = "center";
  card.style.width = "300px";

  const link = document.createElement("a");
  link.href = "#"; // utilisez "#" pour éviter que la page ne se recharge
  link.style.textDecoration = "none";
  link.style.color = "inherit";
  link.addEventListener("click", () => {
    // Lorsque la carte est cliquée, naviguer vers la page correspondante
    const cardName = encodeURIComponent(item.nom);
    window.location.href = `card.html?name=${cardName}`;
  });
  card.appendChild(link);

  const image = document.createElement("img");
  image.src = item.imageCardUrl;
  image.id = "card_image";
  link.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = item.nom;
  link.appendChild(title);

  const description = document.createElement("p");
  description.textContent = item.brief;
  link.appendChild(description);

  cardContainer.appendChild(card);
});

let compt = 0;
const lists = Projet;
const listContainer = document.querySelector("#list-container");
lists.forEach((list) => {
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
