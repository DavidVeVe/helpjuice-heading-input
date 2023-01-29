import { clearInput, inputKeyUpEvent } from "./inputEvents.js";
import DropdownComponent from "../Dropdown/DropdownComponent.js";

//Input component with events
function InputComponent(placeHolder, DOMContent) {
  const inputWrapper = document.createElement('div')
  const inputElement = document.createElement("input");
  
  inputWrapper.appendChild(inputElement)
  inputWrapper.appendChild(DropdownComponent(DOMContent))
  inputWrapper.setAttribute('class','input-wrapper')
  inputElement.setAttribute('class','input-wrapper__input')
  inputElement.setAttribute("placeholder", placeHolder);

  inputElement.addEventListener("keyup", (e) =>
    inputKeyUpEvent(inputElement, e, DOMContent, inputWrapper)
  );

  inputElement.addEventListener("keydown", (e) => clearInput(inputElement, e));

  return inputWrapper;
}

export default InputComponent;
