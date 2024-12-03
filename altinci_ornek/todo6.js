const inputBox = document.getElementById(`inputBox`);
const addBtn = document.getElementById(`addBtn`);
const todoList = document.getElementById(`todoList`);

let editTodo = null;

// yapılacak fonksiyon eklemek
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("Yapılacaklar listenize bir şeyler yazmalısınız");
        return false;
    }
    if(addBtn.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else{

  
    // Yeni bir liste öğesi oluştur
    const li = document.createElement("li");

    // P etiketi oluştur ve metni ekle
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    // Düzenle butonu oluştur
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    // Silme butonu oluştur
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);
    
    todoList.appendChild(li);
    inputBox.value = '';

    saveLocalTodos(inputText);
}
}

// güncellemek için yapılacak :(Edit/Delete) işlev
const updateTodo = (e) => {
    // Eğer tıklanan eleman silme butonuysa
    if (e.target.classList.contains("deleteBtn")) {
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}


const saveLocalTodos = (todo) =>{
    let todos = [];
    todos = localStorage.getItem("todos");
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    // console.log(todos);
}
addBtn.addEventListener(`click`, addTodo);
todoList.addEventListener(`click`, updateTodo);
