// console.log("Hello world!")

// var state = {
//     taskList: [
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             tags: "",
//             taskDescription: ""
//         }
//     ]
// }


var state = {
    taskList: []
};


// DOM Operations

var taskContents = document.querySelector(".task__contents");
var taskModal = document.querySelector(".task__modal__body")

// console.log(taskContents)
// console.log(taskModal)


const htmlTaskContent = ({id, title, description, type, url}) => `
    <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card shadow-sm task__card">
            <div class="card-header d-flex justify-content-end task__card__header gap-2">
                <button type="button" class="btn btn-outline-info mr-2" name=${id}>
                    <i class="fas fa-pencil-alt" name=${id}></i>
                </button>
                <button type="button" class="btn btn-outline-danger mr-2 name=${id}">
                    <i class="fas fa-trash-alt" name=${id}></i>
                </button>
            </div>
            <div class="card-body">
                ${
                    url ? `<img width="100%" src=${url} alt="card image top" class="card-image-top md-3 rounded-lg" />`
                    : `<img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScujirQqIFjN5GuM1565_-DIX6OyU_96HzNBl_BAX8GL0JzMs8&s" alt="card image top" class="card-image-top md-3 rounded-lg" />`
                }
                <h4 class="card-title">${title}</h4>
                <p class="description trim-3-lines text-muted card-text">${description}</p>
                <div class="tags text-white d-flex flex-wrap">
                    <span class="badge bg-primary m-1">${type}</span>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-primary float-right"  data-bs-toggle="modal" data-bs-target="#showTask" id=${id} onclick='openTask.apply(this, arguments)'>
                Open Task</button>
            </div>
        </div>
    </div>
`


const htmlModalContent = ({id, title, description, url}) => {
    const date = new Date(parseInt(id));
    return `
    <div id=${id}>
        ${
                    url ? `<img width="100%" src=${url} alt="card image cap" class="image-fluid mb-3" />`
                    : `<img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScujirQqIFjN5GuM1565_-DIX6OyU_96HzNBl_BAX8GL0JzMs8&s" alt="card image cap" class="image-fluid mb-3" />`
        }
        <strong class="text-sm text-muted">Created On ${date.toDateString()}</strong>
        <h2 class="my-3">${title}</h2>
        <p class="lead">${description}</p>
    </div>
    `
}


const updateLocalStorage = () => {
    localStorage.setItem('task', JSON.stringify({
        tasks: state.taskList,
    }))
}

const loadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.task);

    if(localStorageCopy) state.taskList = localStorageCopy.tasks;

    state.taskList.map((cardDate)=>{
        taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate))
    })
}

const handleSubmit = (event) => {
    const id = `${Date.now()}`
    const input = {
        url: document.getElementById('imageUrl').value,
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDescription').value,
        type: document.getElementById('tags').value,
    };

    if(input.title === "" || input.description === "" || input.type === ""){
        return alert("Please fill all the mandatory fields!")
    }

    taskContents.insertAdjacentHTML("beforeend", htmlTaskContent({...input, id }));

    state.taskList.push({...input,id});
    updateLocalStorage();
}

const openTask = (e) => {
    if(!e) e = window.event;

    const getTask = state.taskList.find(({id})=> id === e.target.id);
    taskModal.innerHTML = htmlModalContent(getTask);
}