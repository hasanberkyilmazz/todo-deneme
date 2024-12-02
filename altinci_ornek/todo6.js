const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackbackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackbackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active")
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackbackdrop.addEventListener("click", toggleAddTaskForm);



// lets add categories and tasks with js 

let categories = [
    {
        title:"Personal",
        img:"boy.png",
    },
    {
        title:"Work",
        img:"briefcase.png",
    },
    {
        title:"Shopping",
        img:"shopping.png",
    },
    {
        title:"Coding",
        img:"web-desing.png",
    },
    {
        title:"Health",
        img:"healthcare.png",
    },
    {
        title:"Fitness",
        img:"dumbbell.png",
    },
    {
        title:"Education",
        img:"education.png",
    },
    {
        title:"Finance",
        img:"saving.png",
    },
];

let tasks = [
    {
        id : 1,
        tasks : "Go To Market",
        category : "Shopping",
        completed : false,
    },
    {
        id : 2,
        tasks : "Read a chapter of a book",
        category : "Personal",
        complated : false,
    },
    {
        id : 3,
        tasks : "Prepare presentation for meeting",
        category : "Work",
        complated : false,
    },
    {
        id : 4,
        tasks : "Complate coding challenge",
        category : "Coding",
        complated : false,
    },
    {
        id : 5,
        tasks : "Take a 30-minute walk",
        category : "Health",
        complated : false,
    },
    {
        id : 6,
        tasks : "Do a 20-minute HIIT workout",
        category : "Fitness",
        complated : false,
    },
    {
        id : 7,
        tasks : "Watch an educational video online",
        category : "Education",
        complated : false,
    },
    {
        id : 8,
        tasks : "Review monthly budget",
        category : "Finance",
        complated : false,
    },
    {
        id : 9,
        tasks : "Buy groceries for the week",
        category : "Shopping",
        complated : false,
    },
    {
        id : 10,
        tasks : "Write in a journal",
        category : "Personal",
        complated : false,
    },
    {
        id : 11,
        tasks : "Send follow-up emails",
        category : "Work",
        complated : false,
    },
    {
        id : 12,
        tasks : "Work on a coding side project",
        category : "Coding",
        complated : false,
    },
    {
        id : 13,
        tasks : "Try a new healthy repice",
        category : "Health",
        complated : false,
    },
    {
      id : 14,
      tasks : "Attend  a yoga class",
      category : "Fitness",
      complated : false,  
    },
    {
        id : 15,
        tasks : "Rean an article about a new topic",
        category : "Education",
        complated : false,
    },
    {
        id : 16,
        tasks : "Set up automatic bill payments",
        category :  "Finance",
        completed: false,
      },
      // Additional tasks for each category
      {
        id: 17,
        task: "Buy new clothes",
        category: "Shopping",
        completed: false,
      },
      {
        id: 18,
        task: "Meditate for 10 minutes",
        category: "Personal",
        completed: false,
      },
      {
        id: 19,
        task: "Prepare agenda for team meeting",
        category: "Work",
        completed: false,
      },
      {
        id: 20,
        task: "Debug a software issue",
        category: "Coding",
        completed: false,
      },
      {
        id: 21,
        task: "Try a new recipe for lunch",
        category: "Health",
        completed: false,
      },
      {
        id: 22,
        task: "Go for a run",
        category: "Fitness",
        completed: false,
      },
      {
        id: 23,
        task: "Learn a new language online",
        category: "Education",
        completed: false,
      },
      {
        id: 24,
        task: "Read about history",
        category: "Education",
        completed: false,
      },
      {
        id: 25,
        task: "Review investment portfolio",
        category: "Finance",
        completed: false,
      },
      // Add more tasks for each category as desired
    ]

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalCategoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTaks = document.querySelector(".totalTasks");


const calculateTotal = () => {
     const categoryTasks = tasks.filter(
            (task) =>
             task.category.toLowerCase() === category.title.
            toLowerCase()
        );
        totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
        totalTaks.innerHTML = tasks.length;
};
const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        // mevcut kategorinin tüm görevlerini al
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === category.title.toLowerCase()
        );


        // kategoriyi işlemek için bir div oluşturun
        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () => {
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `images/${category.img}`;
            calculateTotal();
        })
        div.innerHTML = `  <div class="left">
                  <img src="images/${category.img}" alt="" />
                  <div class="content">
                    <h1>${category.title}</h1>
                    <p>${categoryTasks.length} Tasks</p>
                  </div>
                </div>
                <div class="options">
                  <div class="toggle-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </div>
                </div>`;

                categoriesContainer.appendChild(div);
    })
};


const tasksContainer = document.querySelector(".tasks");
const renderTasks = () =>{
    tasksContainer.innerHTML ="";
    const categoryTasks = tasks.filter(
        (task) =>
         task.category.toLowerCase() === category.title.
        toLowerCase()
    );



    // seçili kategori için görev yoksa
    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = `
        <p class="no-task"> No tasks for this category </p>
        `;
    } else{
        // seçili kategori için görevler varsa bunları işle
        categoryTasks.forEach((task) => {
            const div = document.createElement("div");
            div.classList.add("tasks-wrapper");
            const label = document.createElement("label");
            label.classList.add("tasks");
            label.setAttribute("for",task.id);const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = task.id;
            checkbox.checked = task.complated;
            div.innerHTML = `
               <div class="delete">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
            `;

            label.innerHTML`
                <span class="checkmark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${task.task}</p>
            `;

            label.prepend(checkbox);
            div.prepend(label);
            tasksContainer.appendChild(div);
        });
    }
};





calculateTotal();
renderCategories();
renderTasks();