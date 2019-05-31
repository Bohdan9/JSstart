let selectMonth = 0;
let emailsMap = null;
let sortedMapKeys = null;


function getRandomEmail() {
    const domain = '@email.com';
    const rand = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    return rand + domain;
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

function getRandomID(min, max) {
    let randomId = Math.random() * (max - min) + min;
    randomId = Math.round(randomId);
    return randomId;
}

function getRandomMail() {
    return ({
        id: getRandomID(0, 100),
        emailTo: getRandomEmail(),
        emailFrom: getRandomEmail(),
        date: generateDate()
    })
}

function getEmailArray() {
    let emailList = [];
    const studentCount = Math.random() * (30 - 1) + 1;
    for (let i = 0; i < studentCount; i++) {
        emailList.push(getRandomMail())
    }
    return emailList;
}

let promiseObj = new Promise(function (res) {
    setTimeout(function () {
        res(getEmailArray());
    }, 1000);
});

function fetchData() {
    return promiseObj.then(function (value) {
        return value.reduce(function (acc, obj) {
            const [, month, year] = obj.date.split('.');
            let key = `${month}.${year}`;
            if (!acc.myMap.hasOwnProperty(key)) {
                acc.myMap[key] = [];
            }
            acc.keySet.add(key);
            acc.myMap[key].push(obj);
            return acc;
        }, {keySet: new Set(), myMap: {}})
    });
}

function sortByYearAndMonth(valuesToSort) {
    return (Array.from(valuesToSort))
        .map(item => item.split("."))
        .sort((a, b) => (Number(a[0])) - Number((b[0])))
        .sort((a, b) => Number((a[1])) - Number((b[1])))
        .map(item => item.join("."));
}

function saveData(data) {
    emailsMap = data.myMap;
    sortedMapKeys = sortByYearAndMonth(data.keySet);
}

function getObjectByCurrentMonthAndYear() {
    let currentMonth = sortedMapKeys[selectMonth];
    let data = emailsMap[currentMonth];
    console.log(sortedMapKeys,'sorted')
    return {[currentMonth]: data};
}

function getObjectFromNextMonth(){
    if (selectMonth <= sortedMapKeys.length -1) {
        selectMonth++;
    }
    return getObjectByCurrentMonthAndYear()
}

function getObjectFromPreviousMonth(){
    if (selectMonth>0){
        selectMonth--;
    }
    return getObjectByCurrentMonthAndYear()
}

fetchData().then(saveData).then(getObjectByCurrentMonthAndYear).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromNextMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromPreviousMonth).then(console.log);
fetchData().then(saveData).then(getObjectFromPreviousMonth).then(console.log);
