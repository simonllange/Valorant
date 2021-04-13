const CreateElement = ({
    elmt = "div",
    content = "",
    className,
    extraClass,
    thirdClass,
    src = "",
}) => {
    const Imageurl = "";
    let CreateElmt = document.createElement(elmt);

    if (elmt === "img") {
        CreateElmt.src = Imageurl + src;
    }
    if (elmt === "a") {
        CreateElmt.href = src;
    }
    if (elmt === "button") {
        CreateElmt.href = src;
    }

    CreateElmt.innerHTML = content;

    if (className) {
        CreateElmt.classList.add(className);
    }

    if (extraClass) {
        CreateElmt.classList.add(extraClass);
    }

    if (thirdClass) {
        CreateElmt.classList.add(thirdClass);
    }

    return CreateElmt;
};

export default CreateElement;