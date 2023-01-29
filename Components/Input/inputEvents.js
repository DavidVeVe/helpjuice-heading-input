import {
  setInputStylesConfig,
  createElements,
  clearInput,
  toogleDropdown
} from "../helper.js";

/**
 * @description Selects item from dropdown
 * @param {array} data
 */
const setSelectedElement = (data) => {
  if (data.length > 0) data[0].isSelected = true;
};

/**
 * @description Keyup event from input
 * @param {node} inputElement
 * @param {object} event
 * @param {node} DOMContent
 * @param {node} inputWrapper
 * @param {node} dropdownElement
 * @param {array} dropdownData
 */
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

  toogleDropdown(value, dropdownElement);
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
