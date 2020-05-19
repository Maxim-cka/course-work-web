function createRequest(url, title) {
    const API_URL = "http://localhost:8080/api/";
    const request = new XMLHttpRequest();
    request.open("GET", API_URL + url);
    request.onreadystatechange = readyStateChange;
    request.send();

    function readyStateChange() {
        if (request.readyState === 4) {
            const status = request.status;
            if (status === 200) {
                window.open("").document.write(getInfoPage(title, formatResponse()));
            } else {
                alert("Ошибка");
            }
        }
    }

    function formatResponse() {
        const responseData = JSON.parse(request.responseText);
        let result = "";
        if (Array.isArray(responseData)) {
            responseData.forEach(object => result += formatObject(object) + '<br>');
        } else {
            result += formatObject(responseData);
        }
        return result;
    }

    function formatObject(object) {
        let objectToString = "";
        Object.keys(object).filter(key => !key.includes('id') && !key.includes('Id'))
            .forEach(key => objectToString += `<b>${translate(key)}</b>: ${object[key]}<br>`);
        return objectToString;
    }
}

function translate(key) {
    let dictionary = {
        lastName: "Прізвище",
        firstName: "Ім'я",
        salary: "Зарплата",
        experience: "Досвід",
        countOfSubjects: "Кількість предметів",
        roomNumber: "Номер кімнати",
        size: "Розмір",
        startDate: "Початок",
        endDate: "Кінець",
        title: "Назва",
        description: "Опис",
        price: "Ціна",
        maxStudents: "Максимальна кількість студентів",
        maxPrice: "Максимальна ціна",
        avgPrice: "Середня ціна",
        countCourse: "Кількість курсів",
        countSubjects: "Кількість предметів",
        parentFirstName: "Ім'я одного з батьків",
        parentLastName: "Призвіще одного з батьків",
        sex: "Стать",
        parentPhoneNumber: "Номер телефону батьків",
        age: "Вік",
    };

    return dictionary[key];
}
