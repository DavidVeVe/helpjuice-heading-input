import { createDropdown } from "./helper.js";
const documentBody = document.querySelector("body");

/**
 * @description Dropdown Component
 * @param {array} data
 * @returns Dropdown node for HTML
 */
function DropdownComponent(data) {
  const dropdown = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.classList.add("display-none");
  dropdown.innerHTML = createDropdown(data);

  documentBody.addEventListener("click", () => {
    dropdown.classList.add("display-none");
  });

  return dropdown;
}

export default DropdownComponent;
