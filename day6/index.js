const select = document.querySelector(".select-input__js");

const COUNTRY_LS = "country";

function handleSelect(event) {
  const selectOption = event.target;
  const value = selectOption.value;
  saveCountry(value);
}

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function retainSelect() {
  const selected = localStorage.getItem(COUNTRY_LS);
  const selectedItem = document.querySelector(`option[value = ${selected}]`);
  if (selected !== null) {
    selectedItem.selected = true;
  }
}

function init() {
  select.addEventListener("change", handleSelect);
  retainSelect();
}

init();
