import { setInputStylesConfig, createElements, clearInput, toogleDropdown } from "../helper.js";

const setSelectedElement = (data) => {
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
