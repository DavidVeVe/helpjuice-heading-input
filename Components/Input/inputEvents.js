import { setInputStylesConfig, createElements, clearInput } from "./helper.js";

const toogleDropdown = (DOMContent, value, dropdownElement) => {
  if (value === "/" && DOMContent.children.length === 1) {
    dropdownElement.classList.remove("display-none");
  } else {
    dropdownElement.classList.add("display-none");
  }
};


const setSelectedElement = (data) => {
    console.log(data)
    if (data.length > 0) data[0].isSelected = true;
  };

const inputKeyUpEvent = (
  inputElement,
  event,
  DOMContent,
  inputWrapper,
  dropdownElement,
  dropdownData
) => {
  const {
    code,
    target: { value }
  } = event;

  const DOMContentHasHeading = DOMContent.children.length === 1;

  toogleDropdown(DOMContent, value, dropdownElement);
  setSelectedElement(dropdownData);

  setInputStylesConfig(inputElement, DOMContentHasHeading, value);
  createElements(
    inputElement,
    DOMContentHasHeading,
    value,
    code,
    DOMContent,
    inputWrapper
  );
};

export { inputKeyUpEvent, clearInput };
