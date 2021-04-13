import CreateElement from "../components/CreateElement.js";
const skinsDiv = document.getElementById("Skins");
const heroTekst = document.getElementById("hero-tekst");
const weaponImage = document.getElementById("hero-api-logo");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

/* Url */
const skins = `https://valorant-api.com/v1/weapons/${id}`;

const fetchMySkins = new Promise((resolve, reject) => {
  fetch(skins)
    .then((response) => response.json())
    .then((result) => resolve(result))
    .catch((err) => {
      reject(err);
    });
});

fetchMySkins
  .then((Data) => {
    console.log(Data);

    const weaponSkinName = CreateElement({
      elmt: "h1",
      content: Data.data.displayName,
      className: "weapons-skins-name",
    });

    const weaponSkinFeaturedImage = CreateElement({
      elmt: "img",
      src: Data.data.displayIcon,
      className: "weapons-featured-image",
    });
    weaponImage.appendChild(weaponSkinFeaturedImage);
    heroTekst.appendChild(weaponSkinName);
  })
  .catch((error) => {
    console.log(error);
  });
