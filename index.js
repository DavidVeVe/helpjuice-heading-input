import InputComponent from "./Components/Input/InputComponent.js";

const DOMContent = document.querySelector(".content");
const inputInitialPlaceholder = "Type / for blocks, @ to link docs or people";

DOMContent.appendChild(InputComponent(inputInitialPlaceholder, DOMContent));
