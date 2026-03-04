
var todoList = document.getElementById("todo-list")

var todos = {
items: []
}

function addTodo(){

var input = document.getElementById("todo-input")

if(input.value === ""){
alert("Enter todo")
return
}

var todoObj = {
text: input.value
}

todos.items.push(todoObj)

renderTodos()

input.value = ""

}

function renderTodos(){

todoList.innerHTML = ""

for(var i = 0; i < todos.items.length; i++){

var li = document.createElement("li")

li.innerText = todos.items[i].text

var actions = document.createElement("div")
actions.className = "actions"

var editBtn = document.createElement("button")
editBtn.innerText = "Edit"
editBtn.className = "edit"
editBtn.onclick = editTodo
editBtn.setAttribute("data-index", i)

var delBtn = document.createElement("button")
delBtn.innerText = "Delete"
delBtn.className = "delete"
delBtn.onclick = deleteTodo
delBtn.setAttribute("data-index", i)

actions.appendChild(editBtn)
actions.appendChild(delBtn)

li.appendChild(actions)

todoList.appendChild(li)

}

}

function deleteTodo(){

var index = this.getAttribute("data-index")

todos.items.splice(index,1)

renderTodos()

}

function editTodo(){

var index = this.getAttribute("data-index")

var newValue = prompt("Edit Todo", todos.items[index].text)

todos.items[index].text = newValue

renderTodos()

}

function deleteAll(){

todos.items = []

renderTodos()

}