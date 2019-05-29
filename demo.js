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

    return (generateDay + "." + generateMonth + "." + generateYear).toString();
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
        let slicingDate = obj.date.split('.');
        slicingDate.shift();
        let joinArr = slicingDate.join(':');
        if (!map.hasOwnProperty(joinArr)) {
            map[joinArr] = []
        }
        map[joinArr].push(obj);
        return map;
    }, {})
}

//console.log(objectArray);


function getKeyFromMap() {
    let keyArray = [];
    for (let [key] of Object.entries(objectArray)) {
        keyArray.push(key)
    }
    return keyArray
}



function sortByYear() {
    let arrKey = getKeyFromMap();
    console.log(getKeyFromMap(),'get dates')
    const sorter = data =>
        data
            .map(item => item.split(":"))
            .sort((a, b) => a[1] - b[1])
            .map(item => item.join(":"))
            .map(item => item.split(":"))
            .sort((a, b) => a[0] - b[0])
            .map(item => item.join(":"));
    return sorter(arrKey)

}



console.log(sortByYear(), 'sorted key')


function getCurrentMonthAndYear() {
    let arrayOfKeys = sortByYear();
    let currentMonth = arrayOfKeys[monthSelector];
    let data = objectArray[currentMonth];
    return {[currentMonth]: data};
}


console.log(getCurrentMonthAndYear(),'current')
//console.log(getCurrentMonthAndYear(),'month');
//console.log(getArrayByMonthAndYear(),'arrr');

function getNextMonth() {
    monthSelector++;
    if (monthSelector > objectArray.length) {
        monthSelector = 0
    }
    return getCurrentMonthAndYear();
}
console.log(getNextMonth())

function getPreviousMonth() {
    monthSelector--;
    if (monthSelector < 0) {
        monthSelector = objectArray.length - 1;
    }
    return getCurrentMonthAndYear();
}



/*
console.log(getCurrentMonthAndYear(),'current');
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
console.log(getNextMonth(),'next');
*/


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
