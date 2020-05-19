function getAllTeachers() {
    createRequest("teacher/all", 'Всі вчителі');
}

function getTeachersWithSubjects() {
    createRequest("teacher/group-with-subjects", 'Всі вчителі і кількість предметів, які вони ведуть');
}

function getAllRooms() {
    createRequest("room/all", 'Всі кімнати');
}

function getAllSchedule() {
    createRequest("schedule/all", 'Розклад занять');
}

function getAllCourse() {
    createRequest("course/all", 'Всі курси');
}

function getMediumCourse() {
    createRequest("course/medium", 'Курси середньої цінової категорії');
}

function getMaxPrice() {
    createRequest("course/max-price", 'Максимальна ціна на курси');
}

function getAvgPrice() {
    createRequest("course/avg-price", 'Середня ціна на курс');
}

function getCountCourse() {
    createRequest("course/count-course", 'Кількість достпуних курсів');
}

function getCoursesMoreAVG() {
    createRequest("course/more-avg-price", 'Курси із ціною, вище середньої');
}

function getCoursesMaxPrice() {
    createRequest("course/course-with-max-price", 'Курси із найвищою ціною');
}

function getAllSubject() {
    createRequest("subject/all", 'Всі предмети');
}

function getAllLanguages() {
    createRequest("subject/all-languages", 'Всі мови, які можна вивчити на наших курсах');
}

function getSubjectsWithTeacherNames() {
    createRequest("subject/all-with-teacher-name", 'Всі предмети та вчителі');
}

function getSubjectsTeacherWithMiddleSalary() {
    createRequest("subject/all-with-teacher-middle-salary", 'Всі предмети, вчителі яких мають середню зарплату');
}

function getCountSubjectsByTeacher() {
    createRequest("subject/count-by-teacher", 'Кількість предметів нашого першого вчителя');
}

function getAllStudents() {
    createRequest("students/all", 'Перелік учнів');
}

function getAllByAgeAndSex() {
    createRequest("students/by-sex-and-age", 'Перелік учнів-хлопців віком до 5 років');
}

function getNames() {
    createRequest("students/names", 'Перелік унікальних імен учнів');
}

function getStudentsWithCourse() {
    createRequest("students/students-with-course", 'Студенти та курси на яких вони навчаються');
}
