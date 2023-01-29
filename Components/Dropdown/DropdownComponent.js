const documentBody = document.querySelector("body");

function createDropdownItems(data) {
  return data.map(({ title, shortcutText, isSelected }) => {
    return `<div
                      class="dropdown__item"
                       is-selected="${isSelected || false}"
                       <img src="">
                      <div class="dropdown__item__content"><h6 class="dropdown__item__title">${title}</h6>
                      <p class="dropdown__item__shortcut">Shortcut: ${shortcutText}</p></div>
                  </div>`;
  });
}

const createDropdown = (data) => {
    return `<div class="dropdown__header"><p class="dropdown__title"><strong>Add blocks</strong></p>
    <p class="dropdown__subtitle">Keep typing to filter, or escape to exit</p>
    <p class="dropdown__selection">Filtering keyword <span>1</span></p> </div>
    ${createDropdownItems(data).join("")}
    `
}

function DropdownComponent(dropdownMockedData) {
  const dropdown = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.classList.add("display-none");
  dropdown.innerHTML = createDropdown(dropdownMockedData);


  documentBody.addEventListener("click", () => {
    dropdown.classList.add("display-none");
  });

  return dropdown;
}
export default DropdownComponent;
