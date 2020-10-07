const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const hello = document.querySelector("h2");

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = {
  mouseover: function onMouseOver() {
    hello.style.color = colors[0];
    hello.innerText = "The mouse is here!";
  },

  mouseout: function onMouseOut() {
    hello.style.color = colors[1];
    hello.innerText = "The mouse is gone!";
  },

  resize: function resizeWindow() {
    hello.style.color = colors[2];
    hello.innerText = "You just resized!";
  },

  rightClick: function rightClick() {
    hello.style.color = colors[4];
    hello.innerText = "That was a right click!";
  },
};

hello.addEventListener("mouseover", superEventHandler.mouseover);
hello.addEventListener("mouseout", superEventHandler.mouseout);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
