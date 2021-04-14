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
    //console.log(Data);

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

    const originalImage = Data.data.displayIcon;
    heroTekst.appendChild(weaponSkinName);
    weaponSkinFeaturedImage.setAttribute("id", "mainImage");
    if (Data.data.shopData) {
      const weaponCategory = CreateElement({
        elmt: "h3",
        content: Data.data.shopData.category,
        className: "weapons-skins-category",
      });
      heroTekst.appendChild(weaponCategory);
    }

    Data.data.skins.map((src) => {
      console.log(src);
      const weaponSkinsContainer = CreateElement({
        elmt: "div",
        content: "",
        className: "weapons-skins-container",
      });

      weaponSkinsContainer.addEventListener("click", changeImage);

      const weaponSkinsName = CreateElement({
        elmt: "h2",
        content: src.displayName,
        className: "weapons-skins-name",
      });

      skinsDiv.appendChild(weaponSkinsContainer);
      weaponSkinsContainer.appendChild(weaponSkinsName);

      if (src.displayIcon) {
        const weaponSkinsImage = CreateElement({
          elmt: "img",
          src: src.displayIcon,
          className: "weapons-skins-image",
        });
        weaponSkinsContainer.appendChild(weaponSkinsImage);
      }
    });

    weaponImage.appendChild(weaponSkinFeaturedImage);
  })
  .catch((error) => {
    console.log(error);
  });

var changeImage = function () {
  //var attribute = this.getAttribute("data-myattribute");
  const image = this.children[1];
  if (
    image.src ==
    "https://media.valorant-api.com/weaponskins/724a7f42-4315-eccf-0e76-77bdd3ec2e09/displayicon.png"
  ) {
    image.src =
      "https://media.valorant-api.com/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7/displayicon.png";
  }
  mainImage.src = image.src;
};

console.log(originalImage);
