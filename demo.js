let selectMonth = 0;


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


function getRandomMail() {
    return ({
        id: getRandomID(0, 100),
        emailTo: getRandomEmail(),
        emailFrom: getRandomEmail(),
        date: generateDate()
    })
}

function getRandomID(min, max) {
    let randomId = Math.random() * (max - min) + min;
    randomId = Math.round(randomId);
    return randomId;
}

function getEmailArray() {
    let emailList = [];
    const studentCount = Math.random() * (30 - 1) + 1;
    for (let i = 0; i < studentCount; i++) {
        emailList.push(getRandomMail())
    }
    return emailList
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
            if (!acc.map.hasOwnProperty(key)) {
                acc.map[key] = [];
            }
            acc.keySet.add(key);
            acc.map[key].push(obj);
            return acc;
        }, {keySet: new Set(), map: {}})
    });
}

function getSortedKeys() {
    fetchData().then(function (res) {
        console.log(res);
        const {keySet} = res;
        return sortByYearAndMonth(Array.from(keySet))
    }).then(console.log);
}

function sortByYearAndMonth(valuesToSort) {
    return (valuesToSort)
        .map(item => item.split("."))
        .sort((a, b) => (Number(a[0])) - Number((b[0])))
        .sort((a, b) => Number((a[1])) - Number((b[1])))
        .map(item => item.join("."));
}
var map, keySet;
fetchData().then(res => {
    map = res.map;
    keySet = res.keySet;
}).then(() => getObjectByCurrentMonthAndYear(keySet, 0, map)).then(console.log)
var sortedKeys = getSortedKeys;

// let res = getSortedKeys();
function getObjectByCurrentMonthAndYear(keys,selectMonth, map) {
    let currentMonth = keySet[selectMonth];
    let data = map[currentMonth];
    console.log(currentMonth, 'currentMonth', data, 'data', map, 'map', keys, 'keys')
    return {[currentMonth]: data};
}



/*function getNextMonth() {

    if (selectMonth < usersObject.sortedKeys.length - 1) {
        selectMonth++;
        return getObjectByCurrentMonthAndYear()
    }

    else {
        return "Haven't users yet"
    }
}
function getPreviousMonth() {
    if (selectMonth > 0) {
        selectMonth--;
        return getObjectByCurrentMonthAndYear()
    }
    else {
        return "Haven't users yet"
    }
}*/

/*console.log(sortByYearAndMonth(usersObject.keySet));
console.log(getObjectByCurrentMonthAndYear(),'current')
console.log(getNextMonth(),"next");
console.log(getNextMonth());
console.log(getNextMonth());
console.log(getNextMonth());
console.log(getNextMonth());
console.log(getNextMonth());
console.log(getNextMonth());
console.log(getNextMonth());
console.log(getPreviousMonth(),'prev');
console.log(getPreviousMonth(),'prev');
console.log(getPreviousMonth(),'prev');*/


/*
document.getElementById("object").innerHTML = JSON.stringify(getObjectByCurrentMonthAndYear(), null, ' ');

function rightClick() {
    document.getElementById("object").innerHTML = JSON.stringify(getNextMonth(), null, ' ');
}

function leftClick() {
    document.getElementById("object").innerHTML = JSON.stringify(getPreviousMonth(), null, ' ');
}*/
