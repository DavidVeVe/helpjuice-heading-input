import { clearInput, inputKeyUpEvent } from "./inputEvents.js";

//Input component with events
function InputComponent(placeHolder, DOMContent) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("placeholder", placeHolder);

  inputElement.addEventListener("keyup", (e) =>
    inputKeyUpEvent(inputElement, e, DOMContent)
  );

  inputElement.addEventListener("keydown", (e) => clearInput(inputElement, e));

  return inputElement;
}

export default InputComponent;
