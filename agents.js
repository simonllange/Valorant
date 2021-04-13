import CreateElement from "../components/CreateElement.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const RootAgents = document.getElementById("root-agents");

/* Url */
const agents = `https://valorant-api.com/v1/agents`;

const fetchMyAgents = new Promise((resolve, reject) => {
    fetch(agents)
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err);
        });
});

fetchMyAgents
    .then((Data) => {

        const agentsHeader = CreateElement({
            elmt: "h1",
            content: "Meet your agents",
            className: "agents-header"
        });
        const agentsHeaderDivider = CreateElement({
            elmt: "hr",
            content: "",
            className: "agents-header-divider"
        });
        const agentsCardContainer = CreateElement({
            elmt: "div",
            className: "agents-card-container"
        });

        Data.data.map((src) => {
            if (src.fullPortrait) {
            const cards = CreateElement({
                elmt: "div",
                content: "",
                className: "agent-card"
            });
            const cardIcon = CreateElement({
                elmt: "img",
                src: src.displayIcon,
                className: "agent-card-icon"
            });
            const cardImage = CreateElement({
                elmt: "img",
                src: src.fullPortrait,
                className: "agent-card-image"
            });
            const cardAgentName = CreateElement({
                elmt: "h2",
                content: `${src.displayName}`,
                className: "card-agent-name"
            });
            const cardAgentDescription = CreateElement({
                elmt: "p",
                content: src.description,
                className: "card-agent-description"
            });
            agentsCardContainer.appendChild(cards);
            cards.appendChild(cardIcon);
            cards.appendChild(cardImage);
            cards.appendChild(cardAgentName);
            cards.appendChild(cardAgentDescription);
        }
        })
        RootAgents.appendChild(agentsHeader);
        RootAgents.appendChild(agentsHeaderDivider);
        RootAgents.appendChild(agentsCardContainer);

    })
    .catch((error) => {
        console.log(error);
    });