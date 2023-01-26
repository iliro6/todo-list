const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const warn = document.querySelector(".warning");
const filterTodo = document.querySelector(".filter-todo");
    

todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , DeleteOrCheck)
filterTodo.addEventListener("click" , filteringBY);
document.addEventListener("DOMContentLoaded" , getTodosFromLocal);


function addTodo (event) {
    event.preventDefault();
    
    const TodoDiv = document.createElement("div");
    TodoDiv.classList.add("todo");
   
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value ;
    setLocalItems(todoInput.value);
    newTodo.classList.add("todo-item");
    TodoDiv.appendChild(newTodo);
    todoInput.value="";
    

    const trash = document.createElement("button") ; 
    trash.innerHTML = '<i class="fas fa-check"><i>';
    trash.classList.add("complete-btn");
    TodoDiv.appendChild(trash);

    const done = document.createElement("button");
    done.innerHTML = "<i class='fas fa-trash'></i>";
    done.classList.add("trash-btn");
    TodoDiv.appendChild(done);
    
    todoList.appendChild(TodoDiv)
    
    function checkBlankInput () {
        
        if(newTodo.innerText == ""){
           
            TodoDiv.style.display = "none"
         
        }else{
            null;
    
        }
       
    
    }checkBlankInput();
    
    
     
   
}

function setLocalItems(todo){
    let todos ;
   
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
        
    }
  
   
        todos.push(todo)
        localStorage.setItem("todos" , JSON.stringify(todos))
    
    
   

   }

  
   function DeleteOrCheck(event){
   let items = event.target ;
   if(items.classList[0] == "trash-btn"){
    let todos = items.parentElement ;
    RemoveLocalTodoByButton(todos);
    todos.remove();
  
   }
    else if(items.classList[0] == "complete-btn"){
        let todos = items.parentElement ;
        todos.classList.toggle ("completed");
       
    }
    

    
   }

   function RemoveLocalTodoByButton (todo) {
    let todos ;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex), 1)
    localStorage.setItem("todos" , JSON.stringify(todos))
   }
   //this part contains too many loops so be careful D:
   function filteringBY(event){
    const todos = todoList.childNodes;
    todos.forEach((todo => {
        if(event.target.value == "all"){
            todo.style.display = "flex";
        }
        else if (event.target.value == "completed"){
            if(todo.classList.contains("completed")){
                todo.style.display= "flex"
            }else{
                todo.style.display = "none"
            }
        }
        else if(event.target.value == "uncompleted"){
            if(todo.classList.contains("completed")){
                todo.style.display= "none"
            }else{
                todo.style.display = "flex"
            }
        }
        else{
            null
        }
        
    })
    )

   }

   function getTodosFromLocal(){
    let todos ;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo=>{
        const TodoDiv = document.createElement("div");
        TodoDiv.classList.add("todo");
       
        let newTodo = document.createElement("li");
        newTodo.innerText = todo ;
        
        newTodo.classList.add("todo-item");
        TodoDiv.appendChild(newTodo);
       
        
    
        const trash = document.createElement("button") ; 
        trash.innerHTML = '<i class="fas fa-check"><i>';
        trash.classList.add("complete-btn");
        TodoDiv.appendChild(trash);
    
        const done = document.createElement("button");
        done.innerHTML = "<i class='fas fa-trash'></i>";
        done.classList.add("trash-btn");
        TodoDiv.appendChild(done);
        
        todoList.appendChild(TodoDiv)
         
       
        


    }
        
        )
   }








