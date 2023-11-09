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

    function findLongestElement() {
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
    if (inputTaskTen.value > currentYear) {
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

//task 12

const inputTaskTwelve = document.getElementById('input-task-twelve');
const resultTaskTwevle = document.getElementById('result-task-twelve');
const btnTaskTwelve = document.getElementById('btn-task-twevle');

btnTaskTwelve.addEventListener('click', () => {
    if (inputTaskTwelve.value) {
        let inputValue = inputTaskTwelve.value;
        let reversedValue = inputTaskTwelve.value.split('').reverse();

        inputValue === reversedValue.join('') ? resultTaskTwevle.textContent = 'ДА' : resultTaskTwevle.textContent = 'НЕТ'
    }
});

// task 13

const inputTask13 = document.getElementById('input-task-13');
const resultTask13 = document.getElementById('result-task-13');

inputTask13.addEventListener('blur', () => {
    if (inputTask13.value) {
        let inputValue = inputTask13.value;
        inputValue.includes('3') ? resultTask13.textContent = 'ДА' : resultTask13.textContent = 'НЕТ'
    }
});

// task14

const btnTask14 = document.getElementById('btn-task-14');
const paragraphs = [...document.querySelectorAll('.task14-p')];

btnTask14.addEventListener('click', () => {
    for (let i = 0; i < paragraphs.length; i++) {
        let result14 = paragraphs[i].querySelector('span');
        console.log(result14)
        result14.textContent = i + 1;
    }
});

// task15
const btnTask15 = document.getElementById('btn-task-15');
const inputTask15 = document.getElementById('input-task-15');
const paragraphs15 = [...document.querySelectorAll('.task15-p')];
let paragraphs15Values = [];
paragraphs15.forEach(paragraph => paragraphs15Values.push(paragraph.innerText));

btnTask15.addEventListener('click', () => {
    paragraphs15Values.sort((a, b) => a - b);
    inputTask15.value = paragraphs15Values.join(', ')
});

// task16
const links16 = [...document.querySelectorAll('.task16-link')];

links16.forEach(link => {
    let startSlice = link.innerText.indexOf('(');
    let endSlice = link.innerText.indexOf(')');
    let generatedLink = link.innerText.slice(startSlice + 1, endSlice);
    link.setAttribute('href', generatedLink);
});

// task17
const links17 = [...document.querySelectorAll('.task17-link')];

links17.forEach(link => {
    let linkHref = link.getAttribute('href');
    if (linkHref.startsWith('http://')) {
        link.insertAdjacentText('beforeend', '→')
    }
});

// task18

const links18 = [...document.querySelectorAll('.task18-p')];

links18.forEach(link => {
    link.addEventListener('click', () => {
        link.textContent = link.innerText ** 2;
    })
});

// task19
const img19 = [...document.querySelectorAll('.task19-img')];

img19.forEach(img => {
    img.addEventListener('click', () => {
        img.style.transform = 'scale(2)';
        img.style.margin = '50px';
    })
});

// task20

const img20 = [...document.querySelectorAll('.task20-img')];

img20.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('scale-img')
    })
});

// task21
const img21 = [...document.querySelectorAll('.task21-img')];
const result21 = document.getElementById('task21-big');

img21.forEach(img => {
    img.addEventListener('click', () => {
        let imgPath = img.getAttribute('src');
        result21.removeAttribute('hidden');
        result21.setAttribute('src', imgPath)
    })
});

// task22
const input22 = document.getElementById('task22-input');
const increaseInput22 = document.getElementById('task22-increase');
const decreaseInput22 = document.getElementById('task22-decrease');

increaseInput22.addEventListener('click', () => {
    input22.value = +input22.value + 1;
});

decreaseInput22.addEventListener('click', () => {
    if (+input22.value <= 0) return;
    input22.value = +input22.value - 1;
});

// task23
const input23 = document.getElementById('task23-input');

input23.addEventListener('blur', () => {
    if (input23.value >= 1 && input23.value <= 100) {
        input23.style.border = '2px solid green';
        return;
    }
    input23.style.border = '2px solid red';
});

// task24
const input24 = document.getElementById('task24-input');
document.addEventListener('mouseup', () => {
    input24.value = document.getSelection();
});

// task25
const task25parent = document.getElementById('task25-parent');
const paragraphs25 = [...task25parent.querySelectorAll('p')];
const task25btn = document.getElementById('task25-btn');

let task25values = [];

task25btn.addEventListener('click', () => {
    paragraphs25.forEach(paragraph => {
        task25values.push(Number(paragraph.textContent));
        console.log(+paragraph.textContent)
        task25values.sort((a, b) => a - b);

        if (Number(paragraph.textContent) === task25values[task25values.length - 1]) {
            paragraph.style.color = 'red';
        }
    });

});

// task26
const task26parent = document.getElementById('task26-parent');
const paragraphs26 = [...task26parent.querySelectorAll('p')];
const task26result = document.getElementById('task26-result');

let counter26 = 0;

paragraphs26.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        counter26++;
        task26result.value = counter26;
    })
});

// task27
const task27input = document.getElementById('task27-input');
setInterval(() => {
    task27input.value = Number(task27input.value ** 2);
}, 1000);

// task28
const task28input = document.getElementById('task28-input');
const task28btn = document.getElementById('task28-btn');

const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomArray = [];

task28btn.addEventListener('click', () => {
    while (randomArray.length < 8) {
        let randomSymbol = symbols[Math.floor(Math.random() * (symbols.length - 1))];
        randomArray.push(randomSymbol);
    }

    let randomString = randomArray.join('');

    task28input.value = randomString;
    randomArray = [];
});

// task29
const task29lenght = document.getElementById('task29-length');
const task29btn = document.getElementById('task29-btn');
const task29result = document.getElementById('task29-result');

const symbols29 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomArray29 = [];

task29btn.addEventListener('click', () => {
    if (!task29lenght.value) return;

    let maxLenght = task29lenght.value;

    while (randomArray29.length < maxLenght) {
        let randomSymbol = symbols29[Math.floor(Math.random() * (symbols29.length - 1))];
        randomArray29.push(randomSymbol);
    }

    let randomString = randomArray29.join('');

    task29result.value = randomString;

    randomArray29 = [];
});

// task30
const task30btn = document.getElementById('task30-btn');
const task30lenght = document.getElementById('task30-length');
const task30symbols = document.getElementById('task30-symbols');
const task30result = document.getElementById('task30-result');

let randomArray30 = [];

task30btn.addEventListener('click', () => {
    if (!task30lenght.value || !task30symbols.value) return;

    let symbols = task30symbols.value;

    if (task30lenght.value <= 0) return;

    let maxLenght = task30lenght.value;

    while (randomArray30.length < maxLenght) {
        let randomSymbol = symbols[Math.floor(Math.random() * (symbols.length - 1))];
        randomArray30.push(randomSymbol);
    }

    let randomString = randomArray30.join('');

    task30result.value = randomString;

    randomArray30 = [];
});

// task31
const task31p = document.getElementById('task31');

setInterval(() => {
    task31p.classList.toggle('green-text');
}, 1000);

// task32
const task32input = document.getElementById('task32-input');
const task32result = document.getElementById('task32-result');

task32input.addEventListener('blur', () => {
    let inputValue = task32input.value;

    const decreaseNumber = setInterval(() => {
        task32result.textContent = inputValue--;
        if (+task32result.textContent === 0) clearInterval(decreaseNumber);
    }, 1000);

});

// task33
const task33p = document.getElementById('task33');
const task33colors = [
    'red',
    'green',
    'blue',
    'purple',
    'gray',
];
let i = 0;

setInterval(() => {
    task33p.style.color = task33colors[i];
    i++;
    if(i >= task33colors.length) i = 0;
}, 1000);

// task34
const task34link = document.getElementById('task34-link');
const task34result = document.getElementById('task34-result');
const strings = [
    'один',
    'два',
    'три',
    'четыре',
    'пять',
];

task34result.textContent = strings[0];

task34link.addEventListener('click', (e) => {
    e.preventDefault();

    let currentValue = task34result.textContent;

    console.log(currentValue);
    let currentValueIndex = strings.findIndex((el) => el === currentValue);

    if(currentValueIndex === (strings.length - 1)) {
        task34result.textContent = strings[0];
        return;
    };

    task34result.textContent = strings[currentValueIndex + 1];
});

// task35
const firstInput = document.getElementById('task35-first');
const secondInput = document.getElementById('task35-second');
const thirdInput = document.getElementById('task35-third');

let count = 1;

setTimeout(() => {
    firstInput.value = count;

    setInterval(() => {
        count++;
        firstInput.value = count;
    }, 3000);

}, 1000);

setTimeout(() => {
    count++;
    secondInput.value = count;

    setInterval(() => {
        count++;
        secondInput.value = count;
    }, 3000);

}, 2000);

setTimeout(() => {
    count++;
    thirdInput.value = count;

    setInterval(() => {
        count++;
        thirdInput.value = count;
    }, 3000);

}, 3000);

// task36
const task36link = document.getElementById('task36-link');
const task36cb = document.getElementById('task36-cb');

task36link.addEventListener('click', (e) => {
    e.preventDefault();

    if(task36cb.checked) {
        task36cb.checked = false;
    } else {
        task36cb.checked = true;
    }
});

// task37
const task37parent = document.getElementById('task37-parent');
const checkboxes = [...task37parent.querySelectorAll('input[type="checkbox"]')];
const task37btn = task37parent.querySelector('[id="task37-btn"]');

task37btn.addEventListener('click', () => {
    checkboxes.forEach(cb => {
        cb.checked = true;
    })
});

// task38
const radioButtons = [...document.querySelectorAll('[name="programming-language"]')];
const task38result = document.getElementById('task38-result');
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if(radio.checked) {
            task38result.textContent = radio.id.toUpperCase();
        }
    })
})