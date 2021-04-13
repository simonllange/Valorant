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

        Data.data.map((src) => {
            const aTagWeapon = CreateElement({
                elmt: "a",
                src: `skins.html?id=${src.uuid}`
            });
            const cardsWeapons = CreateElement({
                elmt: "div",
                content: "",
                className: "weapon-card"
            });

            const weaponImage = CreateElement({
                elmt: "img",
                src: src.displayIcon,
                className: "weapon-card-image"
            });
            
            const weaponName = CreateElement({
                elmt: "h1",
                content: src.displayName,
                className: "weapon-card-name"
            });
            if(src.shopData) {
            const weaponCategory = CreateElement({
                elmt: "h4",
                content: src.shopData.categoryText,
                className: "weapon-category"
            });
        

            
                    cardsWeapons.appendChild(weaponCategory);
            }
            weaponsCardContainer.appendChild(aTagWeapon);
                aTagWeapon.appendChild(cardsWeapons);
                    cardsWeapons.appendChild(weaponImage)
                    cardsWeapons.appendChild(weaponName);
        })
        RootWeapons.appendChild(weaponsHeader);
        RootWeapons.appendChild(weaponsHeaderDivider);
        RootWeapons.appendChild(weaponsCardContainer);

    })
    .catch((error) => {
        console.log(error);
    });