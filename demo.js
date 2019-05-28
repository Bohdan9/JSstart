let monthSelector = 0;
let objectArray = getArrayByMonthAndYear();

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

function generateRandomDate(start, end) {
    let round = start + Math.random() * (end - start);
    round = Math.round(round);
    return round
}

function generateDate() {
    let generateYear = generateRandomDate(2017, 2019);
    let generateMonth = generateRandomDate(1, 12);
    let generateDay = generateRandomDate(1, 31);

    return (generateYear + "." + generateMonth + "." + generateDay).toString();
}

function getRandomStudent() {
    return ({
        id: getRandomID(0, 100),
        emailTo: getRandomEmail(),
        emailFrom: getRandomEmail(),
        date: generateDate()
    })
}

function getEmailArray() {
    let studentList = [];
    const studentCount = Math.random() * (30 - 1) + 1;
    for (let i = 0; i < studentCount; i++) {
        studentList.push(getRandomStudent())
    }

    return studentList
}

function getArrayByMonthAndYear() {
    return getEmailArray().reduce(function (map, obj) {
        let slicingDate = obj.date.slice(0, 7);
        if (!map.hasOwnProperty(slicingDate)) {
            map[slicingDate] = []
        }
        map[slicingDate].push(obj);

        return map;
    }, {})
}

function getCurrentMonthAndYear() {
    let monthAndYear = Object.keys(getArrayByMonthAndYear());
    let currentMonth = monthAndYear[monthSelector];
    let data = objectArray[currentMonth];
    return {[currentMonth]: data};
}
console.log(getCurrentMonthAndYear());

/*function getNextMonth() {
    monthSelector++;
    if (monthSelector > month.length - 1) {
        monthSelector = 0
    }
    return getCurrentMonth();
}

function getPreviousMonth() {
    monthSelector--;
    if (monthSelector < 0) {
        monthSelector = month.length - 1;
    }
    return getCurrentMonth();
}*/



/*console.log(getCurrentMonth(),'current');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');
console.log(getPreviousMonth(),'previous');
console.log(getPreviousMonth(),'previous');
console.log(getPreviousMonth(),'previous');
console.log(getPreviousMonth(),'previous');
console.log(getNextMonth(),'next');
console.log(getNextMonth(),'next');*/


/*function getRandomMonth() {
    return Math.floor(Math.random() * month.length)
}*/


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
