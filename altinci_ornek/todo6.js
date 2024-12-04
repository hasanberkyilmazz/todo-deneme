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
    if (addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {


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
        deleteLocalTodos(e.target.parentElement);
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}

// yerel yapılacakları kaydetme fonksiyonu
const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}
// yerel todo'yu alma işlevi
const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {


            // P etiketi oluştur ve metni ekle
            const p = document.createElement("p");
            p.innerHTML = todo;
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
        });
    }
}
// yerel yapılacakları silme fonksiyonu
const deleteLocal = () =>{
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    
    console.log(todoText.children[0].innerHTML);
    let todoText = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    // Array function : slice / splice 
    console.log(todoIndex);

}
document.addEventListener(`DOMContentloaded` , getLocalTodos);
addBtn.addEventListener(`click`, addTodo);
todoList.addEventListener(`click`, updateTodo);
