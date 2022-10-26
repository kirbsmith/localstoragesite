document.querySelector('#taskButton').addEventListener('click', setTask);
document.querySelector('#taskButton').addEventListener('click', getTask);
document.querySelector('#taskButton').addEventListener('click', showTasks);
document.querySelector('#clearButton').addEventListener('click', clearTasks);

window.onload = function() {
  showTasks();
};

let taskArray = JSON.parse(localStorage.tasks || '[]');
let allTaskSection = document.getElementById('taskSection');
let taskSection = document.createElement('section');
let taskParagraph = document.createElement("p");

function setTask(){
  const task = document.getElementById('task').value;
  if (task !== ""){
    taskArray.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }
}

function getTask(){
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  console.log(taskList);
}

function clearTasks(){
  localStorage.clear();
  taskArray = [];
  taskSection.innerHTML = '';
}

function showTasks(){
  taskSection.innerHTML = "";
  if (taskArray.length > 0){
    taskSection.style.display = "block";
    taskArray.forEach((element) => {
      let taskParagraph = document.createElement("p");
      taskParagraph.innerText = element;
      taskSection.appendChild(taskParagraph)
    })
    allTaskSection.appendChild(taskSection)
  }
}
