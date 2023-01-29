import {
  INPUT_INITIAL_PLACEHOLDER,
  headingPlaceholderStylesConfig,
  normalTextPlaceholderStylesConfig
} from "../constants.js";

let inputBuildElementState = false;

/**
 * @description Sets input styles and config
 * @param {node} el
 * @param {string} value
 * @param {object} config
 * @param {string} config.height
 * @param {string} config.fontSize
 * @param {string} config.placeHolder
 */
const setInputConfig = (el, value, { height, fontSize, placeHolder }) => {
  el.style.height = height;
  el.style.fontSize = fontSize;
  el.setAttribute("placeholder", placeHolder);
  el.value = value.substring(2);
};

/**
 * @description Resets input styles and config
 * @param {node} el
 */
const resetInputConfig = (el) => {
  el.style.height = "20px";
  el.style.fontSize = "12px";
  el.value = "";
  el.setAttribute("placeholder", INPUT_INITIAL_PLACEHOLDER);
};

/**
 * @description Creates h1 tag element with value for the heading
 * @param {string} value
 * @returns H1 element with value
 */
const getHeadingElement = (value) => {
  const headingElement = document.createElement("h1");
  headingElement.appendChild(document.createTextNode(value));
  return headingElement;
};

/**
 * @description Creates p tag element with value for normal text
 * @param {string} value
 * @returns P element with value
 */
const getNormalTextElement = (value) => {
  const normalTextElement = document.createElement("p");
  normalTextElement.appendChild(document.createTextNode(value));
  return normalTextElement;
};

/**
 * @description Manages input state, styles and config depending on the input value and state
 * @param {node} inputElement
 * @param {boolean} DOMContentHasHeading
 * @param {string} value
 */
const setInputStylesConfig = (inputElement, DOMContentHasHeading, value) => {
  if (RegExp("^/1.+").test(value)) {
    inputBuildElementState = true;
    if (DOMContentHasHeading) {
      headingPlaceholderStylesConfig.forEach((itemConfig) => {
        setInputConfig(inputElement, value, itemConfig);
      });
    } else {
      normalTextPlaceholderStylesConfig.forEach((itemConfig) => {
        setInputConfig(inputElement, value, itemConfig);
      });
    }
  }
};

/**
 * @description Inserts previously created elements into the content node from the DOM
 * @param {node} inputElement
 * @param {boolean} DOMContentHasHeading
 * @param {string} value
 * @param {string} code
 * @param {node} DOMContent
 * @param {node} inputWrapper
 */
const createElements = (
  inputElement,
  DOMContentHasHeading,
  value,
  code,
  DOMContent,
  inputWrapper
) => {
  if (code === "Enter" && value.length > 0 && inputBuildElementState) {
    if (DOMContentHasHeading) {
      DOMContent.insertBefore(getHeadingElement(value), inputWrapper);
      resetInputConfig(inputElement);
    } else {
      DOMContent.insertBefore(getNormalTextElement(value), inputWrapper);
      resetInputConfig(inputElement);
    }
    inputBuildElementState = false;
  }
};

/**
 * @description Manages input value clearance
 * @param {node} inputElement
 * @param {object} event
 * @param {string} event.code
 * @param {string} event.target.value
 */
const clearInput = (inputElement, { code, target: { value } }) => {
  if (!value && code === "Backspace") {
    resetInputConfig(inputElement);
    inputBuildElementState = false;
  }
};

/**
 * @description Shows or hides dropdown by adding or removing "display-none" class
 * @param {string} value
 * @param {node} dropdownElement
 */
const toogleDropdown = (value, dropdownElement) => {
  if (value === "/1") {
    dropdownElement.classList.remove("display-none");
  } else {
    dropdownElement.classList.add("display-none");
  }
};

export {
  setInputStylesConfig,
  createElements,
  getNormalTextElement,
  getHeadingElement,
  resetInputConfig,
  setInputConfig,
  clearInput,
  toogleDropdown
};
