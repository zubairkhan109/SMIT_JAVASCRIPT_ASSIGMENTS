
var todolist = document.getElementById("todo-list")

function todoadd() {

    var todoinput = document.getElementById("todo-input")
    var todotext = todoinput.value;

    if (todotext === '') {
        alert("please enter todo")
        return;
    }

    var todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todo-list");

    var todoTextEle = document.createElement("p");
    todoTextEle.setAttribute("class", "todo-text");
    todoTextEle.innerText = todotext;

    var editbtn = document.createElement("button");
    editbtn.setAttribute("class", "edit-btn");
    editbtn.innerText = "Edit";
    editbtn.setAttribute("onclick", "editTodo(this)");

    var deletebtn = document.createElement("button");
    deletebtn.setAttribute("class", "delete-btn");
    deletebtn.innerText = "Delete";
    deletebtn.setAttribute("onclick", "deleteTodo(this)");

    todoItem.appendChild(todoTextEle);
    todoItem.appendChild(editbtn);
    todoItem.appendChild(deletebtn);

    todolist.appendChild(todoItem);  

    todoinput.value = '';
}

function editTodo(button) {

    var todoItem = button.parentNode;

    var todoTextEle = todoItem.querySelector(".todo-text");

    var todoinput = document.getElementById("todo-input");
    todoinput.value =todoTextEle.innerText;

    todoItem = todoTextEle;
    

    if (todotext === '') {
        alert("please enter your todo")
        return;
    }

    todoTextEle.innerText = todotext;
    todoinput.value = '';
}

function deleteTodo(button) {
    var todoItem = button.parentNode;
    todoItem.remove();
}