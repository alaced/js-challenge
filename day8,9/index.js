const toDoForm = document.querySelector(".js-todoForm"),
  toDoInput = toDoForm.querySelector(".js-todoInput"),
  pendingList = document.querySelector(".js-pending"),
  finishedList = document.querySelector(".js-finished");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pending = [];
let finished = [];

function returnToDos(event) {
  const returnBtn = event.target;
  const li = returnBtn.parentNode;
  finishedList.removeChild(li);
  const cleanFinished = finished.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finished = cleanFinished;
  saveFinished(finished);
  paintToDos(li.innerText);
}

function deleteFininshed(event) {
  const delBtn = event.target;
  const li = delBtn.parentNode;
  finishedList.removeChild(li);
  const cleanFinished = finished.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finished = cleanFinished;
  saveFinished(finished);
}

function deletePending(event) {
  const delBtn = event.target;
  const li = delBtn.parentNode;
  pendingList.removeChild(li);
  const cleanPending = pending.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pending = cleanPending;
  saveToDos(pending);
}

function saveToDos(todo) {
  localStorage.setItem(PENDING_LS, JSON.stringify(todo));
}

function saveFinished(todo) {
  localStorage.setItem(FINISHED_LS, JSON.stringify(todo));
}

function finishedToDos(event) {
  const checkBtn = event.target;
  const li = checkBtn.parentNode;
  let newId = parseInt(li.id);
  pendingList.removeChild(li);
  const finishedPending = pending.filter(function (toDo) {
    return toDo.id !== newId;
  });
  pending = finishedPending;
  saveToDos(pending);
  paintFinished(li.innerText);
}

function paintFinished(text) {
  const li = document.createElement("li");
  const returnBtn = document.createElement("button");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = finished.length + 1;
  returnBtn.classList.add("fas", "fa-undo-alt");
  returnBtn.addEventListener("click", returnToDos);
  span.innerText = text;
  delBtn.classList.add("fas", "fa-times");
  delBtn.addEventListener("click", deleteFininshed);
  li.appendChild(returnBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  finishedList.appendChild(li);
  const finishedObj = {
    text: text,
    id: newId,
  };
  finished.push(finishedObj);
  saveFinished(finished);
}

function paintToDos(text) {
  const li = document.createElement("li");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = pending.length + 1;
  checkBtn.classList.add("fas", "fa-check");
  checkBtn.addEventListener("click", finishedToDos);
  span.innerText = text;
  delBtn.classList.add("fas", "fa-times");
  delBtn.addEventListener("click", deletePending);
  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const pendingObj = {
    text: text,
    id: newId,
  };
  pending.push(pendingObj);
  saveToDos(pending);
}

function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (pending) {
      paintToDos(pending.text);
    });
  }
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (finished) {
      paintFinished(finished.text);
    });
  }
}

function submitHandler(event) {
  event.preventDefault();
  const pendingItem = toDoInput.value;
  paintToDos(pendingItem);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", submitHandler);
}

init();
