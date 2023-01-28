const DOMContent = document.querySelector(".content");
const inputInitialPlaceholder = "Type / for blocks, @ to link docs or people";
const headingPlaceholder = "Heading 1"
const normalTextPlaceholder = "Normal text"
const headingPlaceholderStylesConfig = [
  { height: "30px", fontSize: "30px", placeHolder: headingPlaceholder }
];
const normalTextPlaceholderStylesConfig = [
  { height: "20px", fontSize: "12px", placeHolder: normalTextPlaceholder }
];

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
    const normalTextElement = document.createElement('p')
    normalTextElement.appendChild(document.createTextNode(value))
    return normalTextElement
}

function inputComponent() {
  const inputElement = document.createElement("input");

  inputElement.setAttribute("placeholder", inputInitialPlaceholder);

  inputElement.addEventListener("keyup", ({ code, target: { value } }) => {
    const DOMContentOnlyChild = DOMContent.children.length === 1;

    //Sets input styles for heading
    if (RegExp("^/1").test(value)) {
      if (DOMContentOnlyChild) {
        headingPlaceholderStylesConfig.forEach((itemConfig) => {
          setInputConfig(inputElement, value, itemConfig);
        });
      } else {
        normalTextPlaceholderStylesConfig.forEach((itemConfig) => {
          setInputConfig(inputElement, value, itemConfig);
        });
      }
    }

    //Resets input styles
    if (code === "Backspace" && value === "" && inputElement.getAttribute('placeholder') === (headingPlaceholder || normalTextPlaceholder) ) {
      resetInputConfig(inputElement);
    }

    //Creates text elements when hitting enter/return
    if (code === "Enter" && value.length > 0) {
        if(DOMContentOnlyChild) {
            DOMContent.insertBefore(getHeadingElement(value), inputElement);
            resetInputConfig(inputElement);
        } else {
            DOMContent.insertBefore(getNormalTextElement(value), inputElement);
            resetInputConfig(inputElement);
        }
    }
  });

  return inputElement;
}

DOMContent.appendChild(inputComponent());
