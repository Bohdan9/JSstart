
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

function getRandomEmail() {
    const domain = '@email.com';
    const rand = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    return rand + domain;
}

function getRandomID(min, max) {
    let randomId = Math.random() * (max - min) + min;
    randomId = Math.round(randomId);
    return randomId;
}

function getRandomStudent() {
    return ({
        id: getRandomID(0, 100),
        emailTo: getRandomEmail(),
        emailFrom: getRandomEmail(),
        month: month[getRandomMonth()]
    })
}


function getRandomMonth() {
    return Math.floor(Math.random() * month.length)
}

function getEmailArray() {
    let studentList = [];
    const studentCount = Math.random() * (30 - 1) + 1;
    for (let i = 0; i < studentCount; i++) {
        studentList.push(getRandomStudent())
    }
    return studentList
}

function getArrayByMonth() {

    return getEmailArray().reduce(function (map, obj) {
        if (!map.hasOwnProperty(obj.month)) {
            map[obj.month] = []
        }
        map[obj.month].push(obj);
        return map;
    }, {})
}
let monthSelector = 0;

function getCurrentMonth() {
     let  currentMonth = month[monthSelector];
     let objectArray = getArrayByMonth();
     let data = objectArray[currentMonth];
     return {[currentMonth]: data };
}

function getNextMonth() {
    monthSelector++;
    let nextMonth = month[monthSelector];
    let objectArray = getArrayByMonth();
    let data = objectArray[nextMonth];
    return {[nextMonth]: data };
}

function getPreviousMonth() {
    monthSelector --;
    let previous = month[monthSelector];
    let objectArray = getArrayByMonth();
    let data = objectArray[previous];
    return {[previous]: data};


}

console.log(getCurrentMonth(),'current');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getPreviousMonth(),'previous');
console.log(getNextMonth(),'next');





/*
let section = document.querySelector('section');
for (let i = 0; i < getEmailArray().length; i++) {
    let myArticle = document.createElement('article');
    let myH2 = document.createElement('h2');
    let myPara1 = document.createElement('p');
    let myPara2 = document.createElement('p');
    let myPara3 = document.createElement('p');
    let myList = document.createElement('ul');

    myH2.textContent = 'Id:' + getEmailArray()[i].id;
    myPara1.textContent = 'Email From: ' + getEmailArray()[i].emailFrom;
    myPara2.textContent = 'Email To: ' + getEmailArray()[i].emailTo;
    myPara3.textContent = 'Month:' + getEmailArray()[i].month;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
}*/
