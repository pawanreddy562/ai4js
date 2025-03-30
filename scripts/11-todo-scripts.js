const Todo = [];
function addTodo(){
    
    let input1= document.querySelector(".js-todo-input");
    const inputduedate = document.querySelector(".js-todo-duedate");
    ;
    const name = input1.value;
    const duedate=inputduedate.value;
    Todo.push({name,duedate});
    input1.value = '';
    inputduedate.value='';
    console.log(Todo);
    todoListHtmldsiplay();
}
function todoListHtmldsiplay(){
    
    let listTodo='';
        for(let i=0;i<Todo.length;i++){
            const todoObj= Todo[i];
            const {name,duedate}=todoObj;
            let a = `
                <div>${name}</div>  <div> ${duedate}</div>
                <button class="delete-button" onclick="
                   Todo.splice(${i},1);
                   todoListHtmldsiplay();
                ">Delete</button>
               `;
            listTodo += a; 
        }
        //console.log(listTodo);
        
        document.querySelector(".js-todo-display").innerHTML= listTodo;
}


