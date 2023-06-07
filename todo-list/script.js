const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => {
        addTodo(todo)
    })
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    addTodo();
})

function addTodo(todos){
    let todoText = input.value;

    if(todos){
        todoText = todos.text;
    }

    if(todoText){
    const todoEls = document.createElement('li');

    if(todos && todos.completed){
        todoEls.classList.add('completed');
    }

    todoEls.innerText = todoText;

    todoEls.addEventListener('click', () => {
        todoEls.classList.toggle('completed');
        updateLS();
    })

    todoEls.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        
        todoEls.remove();

        updateLS();
    })

    todosUl.appendChild(todoEls);
    input.value = '';
    updateLS();
    }

}


function updateLS(){
    const todoEls = document.querySelectorAll('li');
    const todos = [];

    todoEls.forEach(todoEl => {
        todos.push({
            text: todoEl.text,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos));
}