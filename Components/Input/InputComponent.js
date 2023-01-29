import { dropdownMockedData } from "../../mockData.js";
import { clearInput, inputKeyUpEvent } from "./inputEvents.js";
import DropdownComponent from "../Dropdown/DropdownComponent.js";

//Input component with events
function InputComponent(placeHolder, DOMContent) {
  const inputWrapper = document.createElement("div");
  const inputElement = document.createElement("input");
  const dropdownDataCopy = [...dropdownMockedData]

  inputWrapper.appendChild(inputElement);
  inputWrapper.setAttribute("class", "input-wrapper");
  inputElement.setAttribute("class", "input-wrapper__input");
  inputElement.setAttribute("placeholder", placeHolder);
  
  inputElement.addEventListener("keyup", (e) =>{
    const dropdownElement = DropdownComponent(dropdownDataCopy);
    inputWrapper.children.length === 1 && inputWrapper.appendChild(dropdownElement);
    inputKeyUpEvent(inputElement, e, DOMContent, inputWrapper, dropdownElement, dropdownDataCopy)
  });

  inputElement.addEventListener("keydown", (e) => clearInput(inputElement, e));

  return inputWrapper;
}

export default InputComponent;
