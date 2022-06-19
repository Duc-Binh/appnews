'use strict'
var user = getToLocalStorage("user");
var arrTasks = getToLocalStorage("arrTasks") || [];
const inputTodo = $("#input-task");
const btnAdd = $("#btn-add");

if (!user) {
    window.location.href = "../pages/login.html";
};
loadTodoList();

function loadTodoList() {
    $("#todo-list").empty();
    
    arrTasks.map(function(task, index) {
        $("#todo-list").append(`
            <li id=${index} class=${task.isDone}>${task.task}<span id=${index} class="close">×</span></li>
        `)
        if ($(`#${index}`).hasClass("true")) {
            $(`#${index}`).addClass("checked");
        } else {
            $(`#${index}`).removeClass("checked");
        }
       
    });
};



class Task {
    constructor (task, owner, isDone) {
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
};

btnAdd.click(function() {
    let task = new Task();
    task.task = inputTodo.val();
    task.owner = user.username;
    task.isDone = false;
    arrTasks.push(task);
    setToLocalStorage("arrTasks", arrTasks);
    loadTodoList();
});

$("#todo-list").on("click", "li", function() {
    let toggle = arrTasks[this.id];
    toggle.isDone = true;
    arrTasks[this.id] = toggle;
    setToLocalStorage("arrTasks", arrTasks);
    loadTodoList();
});

$("#todo-list").on("click", "span", function() {
    arrTasks.splice(this.id, 1)
    setToLocalStorage("arrTasks", arrTasks);
    loadTodoList();
});

function setToLocalStorage(value, data) {
    localStorage.setItem(value, JSON.stringify(data));
}

function getToLocalStorage(arrUser) {
    let arr = localStorage.getItem(arrUser);
    console.log(arr);
    if (arr) {
        return JSON.parse(arr);
    }
    return null;
}
