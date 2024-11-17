const input = document.querySelector('#input');
const button = document.querySelector('#create_button');
const list = document.querySelector('#todo_list');




const createTodo = () =>{

    if(!input.value.trim()) return alert('input is empty')

    const div = document.createElement('div');
    const text = document.createElement('h3');
    const buttons = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    div.setAttribute('class', "block_text")
    buttons.setAttribute('class', "buttons_div");
    deleteBtn.setAttribute('class', 'delete_button');
    editBtn.setAttribute('class', 'edit_button');

    text.innerHTML = input.value;
    deleteBtn.innerHTML = 'Delete';
    editBtn.innerHTML = 'Edit'

    div.append(text)
    list.append(div)
    div.append(buttons)
    buttons.append(editBtn)
    buttons.append(deleteBtn)


    input.value = ""

    deleteBtn.onclick = () =>{
        list.removeChild(div)
    }
    editBtn.onclick = () =>{
        const edited = prompt('Input edited sentence:')
        text.innerHTML = edited
    }
}


input.onkeydown = (key) =>{
    if (key.key === "Enter") createTodo()
}

button.addEventListener('click',createTodo)