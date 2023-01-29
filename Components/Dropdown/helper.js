/**
 * @description Creates items to feed dropdown
 * @param {array} data
 * @returns String with to be inserted in HTML node
 */
function createDropdownItems(data) {
  return data.map(({ title, shortcutText, isSelected }) => {
    return `<div
                        class="dropdown__item"
                         is-selected="${isSelected || false}"
                         >
                         <img class="dropdown__item__icon" src="../../assets/letter-t.png">
                        <div class="dropdown__item__content">
                          <h6 class="dropdown__item__title">${title}</h6>
                          <p class="dropdown__item__shortcut">Shortcut: ${shortcutText}</p>
                        </div>
                    </div>`;
  });
}

/**
 * @description Creates the dropdown
 * @param {array} data
 * @returns Dropdown wrapper with items
 */
const createDropdown = (data) => {
  return `<div class="dropdown__header"><p class="dropdown__title"><strong>Add blocks</strong></p>
      <p class="dropdown__subtitle">Keep typing to filter, or escape to exit</p>
      <p class="dropdown__selection">Filtering keyword <span>1</span></p> </div>
      ${createDropdownItems(data).join("")}
      `;
};

export { createDropdownItems, createDropdown };
