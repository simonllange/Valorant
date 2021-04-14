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
                src: `skins.html?id=${src.uuid}`,
                className: "weapon-link"
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
            if(src.shopData, src.weaponStats) {
            const weaponCategory = CreateElement({
                elmt: "h4",
                content: src.shopData.categoryText,
                className: "weapon-category"
            });
            const weaponCost = CreateElement({
                elmt: "h4",
                content: `<span class="red">Price:</span> ${src.shopData.cost}`,
                className: "weapon-cost"
            });
            const weaponFireRate = CreateElement({
                elmt: "p",
                content: `<span class="red">Fire Rate:</span> ${src.weaponStats.fireRate}`,
                className: "weapon-firerate"
            });
            const weaponFirstBulletAcc = CreateElement({
                elmt: "p",
                content: `<span class="red">First Bullet Accuracy:</span> ${src.weaponStats.firstBulletAccuracy}`,
                className: "first-bullet-accuracy"
            });
            const weaponMagazineSize = CreateElement({
                elmt: "p",
                content: `<span class="red">Magazine Size:</span> ${src.weaponStats.magazineSize}`,
                className: "weapon-magazinesize"
            });
            const weaponReloadTime = CreateElement({
                elmt: "p",
                content: `<span class="red">Reload Time in Seconds:</span> ${src.weaponStats.reloadTimeSeconds}`,
                className: "weapon-reloadtime"
            })
                    cardsWeapons.appendChild(weaponName);
                    cardsWeapons.appendChild(weaponCategory);
                    cardsWeapons.appendChild(weaponCost);
                    cardsWeapons.appendChild(weaponFireRate);
                    cardsWeapons.appendChild(weaponFirstBulletAcc);
                    cardsWeapons.appendChild(weaponMagazineSize);
                    cardsWeapons.appendChild(weaponReloadTime);
            }
            cardsWeapons.appendChild(weaponImage);
            weaponsCardContainer.appendChild(aTagWeapon);
                aTagWeapon.appendChild(cardsWeapons);
                

        })
        RootWeapons.appendChild(weaponsHeader);
        RootWeapons.appendChild(weaponsHeaderDivider);
        RootWeapons.appendChild(weaponsCardContainer);

    })
    .catch((error) => {
        console.log(error);
    });