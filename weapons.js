import CreateElement from "../components/CreateElement.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const RootWeapons = document.getElementById("root-weapons");

/* Url */
const weapons = `https://valorant-api.com/v1/weapons`;

const fetchMyWeapons = new Promise((resolve, reject) => {
    fetch(weapons)
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err);
        });
});

fetchMyWeapons
    .then((Data) => {
        console.log(Data);
        const weaponsHeader = CreateElement({
            elmt: "h1",
            content: "Choose your loadout",
            className: "weapons-header"
        });
        const weaponsHeaderDivider = CreateElement({
            elmt: "hr",
            content: "",
            className: "weapons-header-divider"
        });
        const weaponsCardContainer = CreateElement({
            elmt: "div",
            className: "weapons-card-container"
        });
        RootWeapons.appendChild(weaponsHeader);
        RootWeapons.appendChild(weaponsHeaderDivider);
        RootWeapons.appendChild(weaponsCardContainer);

    })
    .catch((error) => {
        console.log(error);
    });