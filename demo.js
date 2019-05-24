const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


console.log(month[2])

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
        emailFrom: getRandomEmail()
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

function getFullArrayList() {
    let fullStudentList = {};
    month.map(el => {
        return fullStudentList[el] = getEmailArray()
    });
    return fullStudentList
}


console.log(getFullArrayList());




