const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Exercicio 1
const addShift = (lesson, key, value) => lesson[key] = value;
addShift(lesson2, Object.keys(lesson3)[3], lesson3['turno']);

// Exercicio 2
const showKeys = (lesson) => Object.keys(lesson);
// console.log(showKeys(lesson1));

// Exercicio 3
const showLength = (lesson) => Object.keys(lesson).length;
// console.log(showLength(lesson3));

// Exercicio 4
const showValue = (lesson) => Object.values(lesson);
// console.log(showValue(lesson2));

// Exercicio 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// Exercicio 6
const studentNumbers = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
// console.log(studentNumbers());

// Exercicio 7
const getValueByNumber = (lesson, n) => {
    return Object.values(lesson)[n];
}
// console.log(getValueByNumber(lesson1, 0));

// Exercicio 8
const verifyPair = (lesson, key, value) => {
    const entries = Object.entries(lesson);
    let result = false
    for (const i in entries) {
        entries[i][0] === key && entries[i][1] === value ? result = true : null;
    }
    return result;
}
// console.log(verifyPair(lesson3, 'materia', 'noite'));

// Exercicio BONUS 1
const mathStudents = () => {
    let studentsNumber = 0;
    for (const key in allLessons) {
        if (allLessons[key]['materia'] === 'Matemática') {
            studentsNumber += allLessons[key]['numeroEstudantes'];
        }
    }
    return studentsNumber;
}
mathStudents();

// Exercicio BONUS 2
const getValue = (lesson, teatcher) => {
    const nlesson = [];
    let students = 0;
    const allLessonsValue = Object.values(lesson);
    for (const key in allLessonsValue) {
        if (allLessonsValue[key].professor === teatcher) {
            nlesson.push(allLessonsValue[key].materia)
            students += allLessonsValue[key].numeroEstudantes;
        }
    }
    return { lesson: nlesson, estudantes: students };
}

const createReport = (allLessons, name) => {
    const result = {};
    result.professor = name;
    Object.assign(result, getValue(allLessons, name));
    return result;
}

console.log(createReport(allLessons, 'Maria Clara'));