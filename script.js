const list = document.getElementById("list");


function loadTasks() {
list.innerHTML = localStorage.getItem("tasks") || "";
}


function addTask() {
const task = document.getElementById("task").value;
if (task === "") return;


list.innerHTML += `<li>${task} <button onclick="remove(this)">❌</button></li>`;
document.getElementById("task").value = "";
saveTasks();
}


function remove(btn) {
btn.parentElement.remove();
saveTasks();
}


function saveTasks() {
localStorage.setItem("tasks", list.innerHTML);
}


loadTasks();
