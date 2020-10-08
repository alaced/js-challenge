const colors = ["#2b8cd2", "#914ead", "#eebc10"];
const body = document.querySelector("body");

function colorhandler() {
  const width = window.innerWidth;
  if (width < 500) {
    body.style.backgroundColor = colors[0];
  } else if (500 <= width && width < 900) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

function init() {
  window.addEventListener("resize", colorhandler);
}

init();
