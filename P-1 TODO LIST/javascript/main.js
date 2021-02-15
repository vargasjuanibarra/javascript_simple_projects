
// select the elements
const clearList = document.querySelector(".clear-icon");
const date = document.querySelector(".date");
const list = document.querySelector(".list");
const inputText = document.querySelector(".input-text");

// button toggle

const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "lineThrough";

// create a variable for LIST (array)

let LIST = [];
let id = 0;

//shows todays date

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);

//add todo function

function addToDo(toDo, id, done, trash) {

    if(trash){return;}
    const DONE = done ? check : uncheck;
    const LINE = done ? lineThrough: "";

    const item = `<li class="item">
                    <i class="fa ${DONE}" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="far fa-trash-alt" job="delete" id="${id}"></i>
                </li>`

    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
    
};


    
//add an item to the list using the enter key

document.addEventListener("keyup",function (enterkey) {
    if(enterkey.keyCode ==13){
        const toDo = inputText.value;
        if(toDo){ //if the input isn't empty
            addToDo(toDo, id, false, false); // runs the function addToDo.

            LIST.push({
                name: toDo,
                id: id,
                done:false,
                trash:false
            });
            id++;
        }
        inputText.value = "";
    }
});


// complete to do
function completeToDo(element){
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(lineThrough);

    LIST[element.id].done = LIST[element.id].done ? false :true;
}

//remove to do

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
    
}

//target the items created dunamically

list.addEventListener("click", function (event) {
    const element = event.target; // return the clicked element inside the list
    const elementJob = element.attributes.job.value; //returns complete or delete
    
    if(elementJob == "complete"){
        completeToDo(element);
    } else if (elementJob == "delete"){
        removeToDo(element);
    }

})