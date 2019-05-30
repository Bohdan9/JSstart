let selectMonth = 0;
let usersObject = getArrayByMonthAndYear();
usersObject.sortedKeys = sortByYearAndMonth(usersObject.keySet);

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
    let emailList = [];
    const studentCount = Math.random() * (30 - 1) + 1;
    for (let i = 0; i < studentCount; i++) {
        emailList.push(getRandomStudent())
    }
    return emailList
}

function getArrayByMonthAndYear() {
    return getEmailArray().reduce(function(acc, obj) {
        const [day, month,year] = obj.date.split('.');
        let key = `${month}.${year}`;
        if (!acc.map.hasOwnProperty(key)) {
            acc.map[key] = [];
        }
        acc.keySet.add(key);
        acc.map[key].push(obj);
        return acc;
    }, { keySet: new Set(), map: {} })
}

function sortByYearAndMonth(valuesToSort) {
    return Array.from(valuesToSort)
        .map(item => item.split("."))
        .sort(( a, b) => (Number(a[0]))  - Number((b[0])))
        .sort((a, b) =>  Number((a[1])) - Number((b[1])))
        .map(item => item.join("."));
}

function getObjectByCurrentMonthAndYear() {
    let currentMonth = usersObject.sortedKeys[selectMonth];
    let data = usersObject.map[currentMonth];

    return {[currentMonth]: data};
}
console.log(getObjectByCurrentMonthAndYear());


function getNextMonth() {

    if ((selectMonth >= 0) && (selectMonth < usersObject.sortedKeys.length) ||(selectMonth<0)){
        selectMonth++;
        return getObjectByCurrentMonthAndYear()
    }

    else {
        return"Haven't users yet"
    }
}

function getPreviousMonth() {
    if (selectMonth >= 0){
        selectMonth--;
        return getObjectByCurrentMonthAndYear()
    }
    else {
        return"Haven't users yet"
    }
}
console.log(sortByYearAndMonth(usersObject.keySet));
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
console.log(getPreviousMonth(),'prev');


document.getElementById("object").innerHTML = JSON.stringify(getObjectByCurrentMonthAndYear(), null, ' ');

function rightClick() {
    document.getElementById("object").innerHTML = JSON.stringify(getNextMonth(), null, ' ');
}

function leftClick() {
    document.getElementById("object").innerHTML = JSON.stringify(getPreviousMonth(), null, ' ');
}