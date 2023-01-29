import { setInputStylesConfig, createElements, clearInput } from "./helper.js";


const inputKeyUpEvent = (inputElement, event, DOMContent) => {
  const {
    code,
    target: { value }
  } = event;
  const DOMContentHasHeading = DOMContent.children.length === 1;

  setInputStylesConfig(inputElement, DOMContentHasHeading, value);
  createElements(inputElement, DOMContentHasHeading, value, code, DOMContent);
};

export { inputKeyUpEvent, clearInput };
