const headingPlaceholder = "Heading 1";
const normalTextPlaceholder = "Normal text";
const headingPlaceholderStylesConfig = [
  { height: "30px", fontSize: "30px", placeHolder: headingPlaceholder }
];
const normalTextPlaceholderStylesConfig = [
  { height: "20px", fontSize: "12px", placeHolder: normalTextPlaceholder }
];
const inputInitialPlaceholder = "Type / for blocks, @ to link docs or people";

let inputBuildElementState = false

const setInputConfig = (el, value, { height, fontSize, placeHolder }) => {
  el.style.height = height;
  el.style.fontSize = fontSize;
  el.setAttribute("placeholder", placeHolder);
  el.value = value.substring(2);
};

const resetInputConfig = (el) => {
  el.style.height = "20px";
  el.style.fontSize = "12px";
  el.value = "";
  el.setAttribute("placeholder", inputInitialPlaceholder);
};

const getHeadingElement = (value) => {
  const headingElement = document.createElement("h1");
  headingElement.appendChild(document.createTextNode(value));
  return headingElement;
};

const getNormalTextElement = (value) => {
  const normalTextElement = document.createElement("p");
  normalTextElement.appendChild(document.createTextNode(value));
  return normalTextElement;
};

//Sets input styles configurations
const setInputStylesConfig = (
  inputElement,
  DOMContentHasHeading,
  value,
) => {
    if (RegExp("^/1").test(value)) {
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

//Creates text elements when hitting enter/return
const createElements = (inputElement, DOMContentHasHeading, value, code, DOMContent, inputWrapper) => {
    if (code === "Enter" && value.length > 0 && inputBuildElementState) {
      if (DOMContentHasHeading) {
        DOMContent.insertBefore(getHeadingElement(value), inputWrapper);
        resetInputConfig(inputElement);
      } else {
        DOMContent.insertBefore(getNormalTextElement(value), inputWrapper);
        resetInputConfig(inputElement);
      }

    }
  };

  const clearInput = (inputElement, { code, target: { value } }) => {
    if (!value && code === "Backspace") {
      resetInputConfig(inputElement);
      inputBuildElementState = false;
    }
  };

export {
  setInputStylesConfig,
  createElements,
  getNormalTextElement,
  getHeadingElement,
  resetInputConfig,
  setInputConfig,
  clearInput
};
