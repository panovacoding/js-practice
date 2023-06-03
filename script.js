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
})