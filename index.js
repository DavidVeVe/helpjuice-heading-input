const DOMContent = document.querySelector(".content");
const inputInitialPlaceholder = "Type / for blocks, @ to link docs or people";
const headingPlaceholder = "Heading 1";
const normalTextPlaceholder = "Normal text";
const headingPlaceholderStylesConfig = [
  { height: "30px", fontSize: "30px", placeHolder: headingPlaceholder }
];
const normalTextPlaceholderStylesConfig = [
  { height: "20px", fontSize: "12px", placeHolder: normalTextPlaceholder }
];

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

const inputKeyUpEvent = (inputElement, event) => {
  const {
    code,
    target: { value }
  } = event;
  const DOMContentHasHeading = DOMContent.children.length === 1;

  //Sets input configurations
  if (RegExp("^/1").test(value)) {
    inputBuildElementState = true
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

  //Resets input config
  if (!value && code === "Backspace") {
    inputBuildElementState = false
    resetInputConfig(inputElement);
  }

  //Creates text elements when hitting enter/return
  if (code === "Enter" && value.length > 0 && inputBuildElementState) {
    if (DOMContentHasHeading) {
      DOMContent.insertBefore(getHeadingElement(value), inputElement);
      resetInputConfig(inputElement);
    } else {
      DOMContent.insertBefore(getNormalTextElement(value), inputElement);
      resetInputConfig(inputElement);
    }
    inputBuildElementState = false
  }
};

function inputComponent() {
  const inputElement = document.createElement("input");

  inputElement.setAttribute("placeholder", inputInitialPlaceholder);

  inputElement.addEventListener("keyup", (e) => {
    inputKeyUpEvent(inputElement, e);
  });

  return inputElement;
}

DOMContent.appendChild(inputComponent());
