let additionalObject = ({
    selectMonth: selectMonth = 0,
    emailsMap: emailsMap = null,
    sortedMapKeys: sortedMapKeys = null
});

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
    }, 3000);
});

function fetchData() {
    return promiseObj;
}

function saveData(data) {
    const processedData = data.reduce(function (acc, obj) {
        const [, month, year] = obj.date.split('.');
        let key = `${month}.${year}`;
        if (!acc.myMap.hasOwnProperty(key)) {
            acc.myMap[key] = [];
        }
        acc.keySet.add(key);
        acc.myMap[key].push(obj);
        return acc;
    }, {keySet: new Set(), myMap: {}});

    additionalObject.emailsMap = processedData.myMap;
    additionalObject.sortedMapKeys = sortByYearAndMonth(processedData.keySet);
}

fetchData().then(saveData).then(getObjectByCurrentMonthAndYear);

function sortByYearAndMonth(valuesToSort) {
    return Array.from(valuesToSort)
        .map(item => item.split("."))
        .sort(( a, b) => ((Number(a[0]))  + Number((b[0]))) - (Number(a[1]) + Number(b[1])))
        .map(item => item.join("."));
}


function getObjectByCurrentMonthAndYear() {
    let currentMonth = additionalObject.sortedMapKeys[additionalObject.selectMonth];
    let data = additionalObject.emailsMap[currentMonth];
    return {[currentMonth]: data};
}

function getObjectFromNextMonth() {
    if (additionalObject.selectMonth < additionalObject.sortedMapKeys.length - 1) {
        additionalObject.selectMonth++;
    }
    return getObjectByCurrentMonthAndYear()
}

function getObjectFromPreviousMonth() {
    if (additionalObject.selectMonth > 0) {
        additionalObject.selectMonth--;
    }
    return getObjectByCurrentMonthAndYear()
}

function rightClick() {
    console.log('rightClick');
    if (!additionalObject.emailsMap) return document.getElementById("object").innerHTML = JSON.stringify('Wait...', null, ' ');
    const json = getObjectFromNextMonth();
    document.getElementById("object").innerHTML = JSON.stringify(json, null, ' ');

}

function leftClick() {
    console.log('leftClick');
    if (!additionalObject.emailsMap) return;
    const json = getObjectFromPreviousMonth();
    document.getElementById("object").innerHTML = JSON.stringify(json, null, ' ');
}

