const documentBody = document.querySelector("body");

function createDropdownElements(data) {
  return data.map(({ title, shortcutText, isSelected }) => {
    return `<div
                      class="dropdown__item"
                       is-selected="${isSelected || false}"
                      <h6>${title}</h6>
                      <p>Shortcut: ${shortcutText}</p>
                  </div>`;
  });
}

function DropdownComponent(dropdownMockedData) {
  const dropdown = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.classList.add("display-none");
  dropdown.innerHTML = createDropdownElements(dropdownMockedData).join("");


  documentBody.addEventListener("click", () => {
    dropdown.classList.add("display-none");
  });

  return dropdown;
}
export default DropdownComponent;