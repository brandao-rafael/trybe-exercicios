function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.getElementById('days');
    for (let i = 0; i < dezDaysList.length; i += 1) {
        newLI = document.createElement('li');
        newLI.className = "day";
        newLI.innerText = dezDaysList[i];
        days.appendChild(newLI);
        if (dezDaysList[i] == '4' || dezDaysList[i] == '11' || dezDaysList[i] == '18' || dezDaysList[i] == '25') {
            newLI.className += ' friday';
        }
        if (dezDaysList[i] == '24' || dezDaysList[i] == '25' || dezDaysList[i] == '31') {
            newLI.classList.add('holiday')
        }
    }
}
createDays();

function adcButton(param) {
    const buttonContainer = document.querySelector('.buttons-container');
    holidayButton = document.createElement('button');
    holidayButton.innerText = param;
    holidayButton.setAttribute('id', 'btn-holiday');
    buttonContainer.appendChild(holidayButton)
}
adcButton('Feriados');

function buttonEvent() {
    const holidayBtn = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.holiday');
    let originColor = 'rgb(119, 119, 119)';
    let red = "red";

    holidayBtn.addEventListener('click', function () {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.color === red) {
                holidays[i].style.color = originColor;
            } else {
                holidays[i].style.color = red;
            }

        }
    });
}
buttonEvent();

function adcFridayButton(param) {
    const buttonContainer = document.querySelector('.buttons-container');
    fridayButton = document.createElement('button');
    fridayButton.innerText = param;
    fridayButton.setAttribute('id', 'btn-friday');
    buttonContainer.appendChild(fridayButton)
}
adcFridayButton('Sexta-feira');

function buttonFridayEvent() {
    const fridayBtn = document.querySelector('#btn-friday');
    const fridays = document.querySelectorAll('.friday');
    let originText = [4, 11, 18, 25];
    let newText = "Sextou";

    fridayBtn.addEventListener('click', function () {
        for (let i = 0; i < fridays.length; i += 1) {
            if (fridays[i].innerHTML !== newText) {
                fridays[i].innerHTML = newText;
                fridays[i].style.color = "blue";
            } else {
                fridays[i].innerHTML = originText[i];
                fridays[i].style.color = 'rgb(119, 119, 119)';
            }

        }
    });
}
buttonFridayEvent();

function daysMouseIn() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function (param) {
        param.target.style.fontSize = '50px';
        param.target.style.transition = '200ms';
    })
}
daysMouseIn();
function daysMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function (param) {
        param.target.style.fontSize = '20px';
        param.target.style.transition = '200ms';
    })
}
daysMouseOut();

function createTask(param) {
    const taskscontainer = document.querySelector('.my-tasks');
    const task = document.createElement('span');
    task.innerText = param;
    taskscontainer.appendChild(task);
}
createTask('Beber água');

function taskColor(color) {
    const taskscontainer = document.querySelector('.my-tasks');
    const colorTask = document.createElement('div');
    colorTask.style.backgroundColor = color;
    colorTask.style.border = 'none';
    colorTask.style.transition = '200ms';
    colorTask.setAttribute('class', 'task');
    taskscontainer.appendChild(colorTask);
}
taskColor('green');

function selectedTasks() {
    const task = document.querySelector('.task');
    let counter = 0;
    task.addEventListener('click', function () {
        if (counter === 0) {
            task.className = 'task selected';
            counter += 1;
        } else {
            task.classList.remove('selected');
            counter = 0;
        }
    })
}
selectedTasks();

function adcColorTask (){
    let taskSelected = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let task = document.querySelector('.task');
    let taskColor = task.style.backgroundColor;

    days.addEventListener('click', function(param){
        let colorTask = param.target.style.color;
        if (taskSelected.length > 0 && taskColor !== colorTask){
            let newColor = taskSelected[0].style.backgroundColor;
            param.target.style.color = newColor;
        } else if (taskSelected.length !== 0 && taskColor === colorTask){
            param.target.style.color = 'rgb(119, 119, 119)';
        }
    })
}
adcColorTask();

function adcNewTask() {
    const taskImput = document.querySelector('#task-input');
    const btnAdd = document.querySelector('#btn-add');
    const taskList = document.querySelector('.task-list');

    btnAdd.addEventListener('click', function () {
        if (taskImput.value.length > 0) {
            let newListItem = document.createElement('li');
            newListItem.innerText = taskImput.value;
            taskList.appendChild(newListItem);
            taskImput.value = '';
        } else {
            alert('Por favor insira um valor Válido')
        }
    })
    taskImput.addEventListener('keypress', function (param) {
        if (param.keyCode === 13 && taskImput.value.length > 0) {
            let newListItem = document.createElement('li');
            newListItem.innerText = taskImput.value;
            taskList.appendChild(newListItem);
            taskImput.value = '';
        }
    })
}
adcNewTask();