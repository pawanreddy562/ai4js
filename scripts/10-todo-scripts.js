const Todo = [];
function addTodo(){
let input1= document.querySelector(".js-todo-input");
input1= input1.value;
console.log(input1);
Todo.push(input1);
console.log(Todo);
}