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
                    url && `<img src=${url} alt="card image top" class="card-image-top md-3 rounded-lg" />`
                }
                <h4 class="card-title">${title}</h4>
                <p class="description trim-3-lines text-muted card-text">${description}</p>
                <div class="tags text-white d-flex flex-wrap">
                    <span class="badge bg-primary m-1">${type}</span>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-primary float-right"  data-bs-toggle="modal" data-bs-target="#showTask">
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
                    url && `<img src=${url} alt="card image cap" class="image-fluid mb-3" />`
        }
        <strong class="text-sm text-muted">Created On ${date.toDateString()}</strong>
        <h2 class="my-3">${title}</h2>
        <p class="lead">${description}</p>
    </div>
    `
}


const updateLocalStorage = () => {}