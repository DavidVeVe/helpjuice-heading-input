import { setInputStylesConfig, createElements, clearInput } from "./helper.js";

const toogleDropdown = (DOMContent, value, dropdownElement) => {
  if (value === "/" && DOMContent.children.length === 1) {
    dropdownElement.classList.remove("display-none");
  } else {
    dropdownElement.classList.add("display-none");
  }
};

const inputKeyUpEvent = (
  inputElement,
  event,
  DOMContent,
  inputWrapper,
  dropdownElement
) => {
  const {
    code,
    target: { value }
  } = event;
  const DOMContentHasHeading = DOMContent.children.length === 1;

  toogleDropdown(DOMContent, value, dropdownElement);

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
