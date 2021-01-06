const body = document.body;

const YELLOW = "yellow";
const PURPLE = "purple";
const BLUE = "blue";

function resizeHandler() {
  const width = window.innerWidth;
  if (width > 900) {
    body.classList.add(YELLOW);
    body.classList.remove(PURPLE);
  } else if (500 <= width && width < 900) {
    body.classList.add(PURPLE);
    body.classList.remove(YELLOW, BLUE);
  } else {
    body.classList.remove(PURPLE);
    body.classList.add(BLUE);
  }
}

function init() {
  window.addEventListener("resize", resizeHandler);
}

init();
