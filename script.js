//task1
let userInputsTaskOne = [...document.querySelectorAll('.user-input')];
let btnTaskOne = document.getElementById('btn-task-one');
let resultTaskOne = document.getElementById('result-task-one');

btnTaskOne.addEventListener('click', () => {
    let summary = 0;
    userInputsTaskOne.forEach((input) => {
        summary += +input.value;
        resultTaskOne.value = summary;
    })
});


//task2
let userInputsTaskTwo = [...document.querySelectorAll('.num')];
let btnTaskTwo = document.getElementById('btn-task-two');
let resultTaskTwo = document.getElementById('result-task-two');

btnTaskTwo.addEventListener('click', () => {
    let summary = 0;
    userInputsTaskTwo.forEach((input) => {
        summary += +input.value;
    })
    resultTaskTwo.textContent = summary;
});


//task 3
let inputTaskThree = document.getElementById('input-task-3');
let resultTaskThree = document.getElementById('result-task-three');

inputTaskThree.onblur = () => {
    let stringValue = Array.from(String(inputTaskThree.value));
    let arrayValue = stringValue.map(Number);
    let sum = arrayValue.reduce((prev, current) => prev + current, 0);
    resultTaskThree.textContent = sum;
};


// task4
let inputTaskFour = document.getElementById('input-task-four');
let resultTaskFour = document.getElementById('result-task-four');
let container = document.querySelector('.container');

inputTaskFour.onblur = () => {
    let inputValue = inputTaskFour.value;
    let arr = (inputValue.split(',')).map(Number);

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return container.textContent = 'Пожалуйста, введите числа через запятую';
        }
        let sum = arr.reduce((prev, current) => prev + current, 0);
        let average = sum / arr.length;
        resultTaskFour.textContent = average;
    }
};

inputTaskFour.addEventListener('focus', () => {
    container.textContent = '';
});


//task5
let fullname = document.getElementById('fullname');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let patronymic = document.getElementById('patronymic')

fullname.addEventListener('blur', () => {
    let splittedNameArr = (fullname.value).split(' ');
    for (let i = 0; i < splittedNameArr.length; i++) {
        if (splittedNameArr[i] === undefined) {
            splittedNameArr[i] = '';
        }
    }
    if (splittedNameArr.length === 3) {
        surname.value = splittedNameArr[0];
        name.value = splittedNameArr[1];
        patronymic.value = splittedNameArr[2];
    }
});


//task6
let inputTaskSix = document.getElementById('input-task-six');

inputTaskSix.addEventListener('blur', () => {
    let splittedValue = (inputTaskSix.value).split(' ');
    inputTaskSix.value = '';
    for (let i = 0; i < splittedValue.length; i++) {
        let capitalLetter = (splittedValue[i])[0].toUpperCase();
        let slicedString = splittedValue[i].slice(1);
        splittedValue[i] = capitalLetter + slicedString;
        inputTaskSix.value += splittedValue[i] + ' ';
    }
});

//task7

let inputTaskSeven = document.getElementById('input-task-seven');
let resultTaskSeven = document.getElementById('result-task-seven');

inputTaskSeven.addEventListener('blur', () => {
    let splittedValue = (inputTaskSeven.value).split(' ');
    let splittedValueLength = splittedValue.length;
    resultTaskSeven.innerText = splittedValueLength;
});

// task8

let inputTaskEight = document.getElementById('input-task-eight');
let resultTaskEight = document.getElementById('result-task-eight');

inputTaskEight.addEventListener('blur', () => {
    let splittedValue = (inputTaskEight.value).split(' ');

    function findLongestElement () {
        splittedValue.sort((a, b) => a.length - b.length);   
        return splittedValue[splittedValue.length - 1].length;
    }
    
    resultTaskEight.innerText = findLongestElement();
});

//task 9

let inputTaskNine = document.getElementById('input-task-nine');

inputTaskNine.addEventListener('blur', () => {
    let splittedValue = (inputTaskNine.value).split('.');
    splittedValue.reverse();
    let newValue = splittedValue.join('-');
    inputTaskNine.value = newValue;
});

//task 10

let inputTaskTen = document.getElementById('input-task-ten');
let buttonTaskTen = document.getElementById('button-task-ten');
let resultTaskTen = document.getElementById('result-task-ten');

buttonTaskTen.addEventListener('click', () => {
    resultTaskTen.value = '';
    resultTaskTen.removeAttribute('style', 'color:red');
    let currentYear = new Date().getFullYear();
    if(inputTaskTen.value > currentYear) {
        resultTaskTen.setAttribute('style', 'color:red');
        resultTaskTen.innerText = 'Пожалуйста, введите корректный год';
    } else {
        resultTaskTen.innerText = currentYear - inputTaskTen.value;
    }
});

//task11

let inputTaskEleven = document.getElementById('input-task-eleven');
let resultTaskEleven = document.getElementById('result-task-eleven');
const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

inputTaskEleven.addEventListener('blur', () => {
    let splittedValue = (inputTaskEleven.value).split('.');
    splittedValue.reverse();
    let newValue = splittedValue.join('-');
    let userDate = new Date(newValue);
    resultTaskEleven.innerText = weekdays[userDate.getDay()];
});