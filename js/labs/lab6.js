// Вариант 10 Управление студентами
// 1. Создайте массив объектов, представляющих студентов. Каждый объект
// должен содержать следующие свойства:
//  id (уникальный идентификатор студента)
//  name (имя студента)
//  age (возраст студента)
//  major (специальность студента)
//  gpa (средний балл студента)
// 2. Используя функцию map(), создайте новый массив, содержащий только
// имена всех студентов.
// 3. Используя функцию filter(), создайте новый массив, содержащий
// только студентов определенной специальности.
// 4. Используя функцию some(), проверьте, есть ли хотя бы один студент с
// высоким средним баллом (gpa > 4.0).
// 5. Используя функцию every(), проверьте, имеют ли все студенты
// средний балл выше заданного порога.
// 6. Используя функцию find(), найдите студента с определенным
// идентификатором.
// 7. Используя функцию reduce(), вычислите средний возраст всех
// студентов.
// 8. Используя функцию forEach(), выведите информацию о каждом
// студенте в консоль в удобочитаемом формате.
// 9. Используя оператор spread (...), создайте копию массива студентов.
// 10.Используя функцию slice(), создайте новый массив, содержащий
// только первых пять студентов из исходного массива.
// 11.Используя функцию push(), добавьте нового студента в конец массива.
// 12.Используя функцию pop(), удалите последнего студента из массива.



// 1. Создайте массив объектов, представляющих студентов. Каждый объект
// должен содержать следующие свойства:
//  id (уникальный идентификатор студента)
//  name (имя студента)
//  age (возраст студента)
//  major (специальность студента)
//  gpa (средний балл студента)
let students = [
    { id: 1, name: 'John Doe', age: 20, major: 'PIR', gpa: 3.8 },
    { id: 2, name: 'Jane Smith', age: 22, major: 'ASOIR', gpa: 4.2 },
    { id: 3, name: 'Nikolay Kisliuk', age: 19, major: 'ASOIR', gpa: 3.5 },
    { id: 4, name: 'Emily Davis', age: 21, major: 'PMR', gpa: 4.1 },
    { id: 5, name: 'Michael Brown', age: 23, major: 'ASOIR', gpa: 3.9 },
    { id: 6, name: 'Jessica Wilson', age: 20, major: 'UIR', gpa: 4.0 }
];
// 2. Используя функцию map(), создайте новый массив, содержащий только
// имена всех студентов.
let names = students.map(student => student.name);
console.log('Имена студентов:', names);
// 3. Используя функцию filter(), создайте новый массив, содержащий
// только студентов определенной специальности.
let asoirs = students.filter(student => student.major === 'ASOIR');
console.log('Студенты, обучающиеся на ASOIR:', asoirs);
// 4. Используя функцию some(), проверьте, есть ли хотя бы один студент с
// высоким средним баллом (gpa > 4.0).
let heightgpa = students.some(student => student.gpa > 4.0);
console.log('Есть ли хотя бы один студент с GPA > 4.0:', heightgpa);
// 5. Используя функцию every(), проверьте, имеют ли все студенты
// средний балл выше заданного порога.
let porog = 3.0;
let vporoge = students.every(student => student.gpa > porog);
console.log(`Все ли студенты имеют GPA выше ${porog}:`, vporoge);
// 6. Используя функцию find(), найдите студента с определенным
// идентификатором.
let idstud = 3;
let thisidstud = students.find(student => student.id === idstud);
console.log(`Студент с ID ${idstud}:`, thisidstud);
// 7. Используя функцию reduce(), вычислите средний возраст всех
// студентов.
let totalAge = students.reduce((sum, student) => sum + student.age, 0);
let averageAge = totalAge / students.length;
console.log('Средний возраст студентов:', averageAge);
// 8. Используя функцию forEach(), выведите информацию о каждом
// студенте в консоль в удобочитаемом формате.
students.forEach(student => {
    console.log(`ID: ${student.id}, \nName: ${student.name},\nAge: ${student.age},\nMajor: ${student.major}.\nGPA: ${student.gpa}`);
});
// 9. Используя оператор spread (...), создайте копию массива студентов.
let studentsCopy = [...students];
console.log('Копия массива студентов:', studentsCopy);
// 10.Используя функцию slice(), создайте новый массив, содержащий
// только первых пять студентов из исходного массива.
let firstFiveStudents = students.slice(0, 5);
console.log('Первые пять студентов:', firstFiveStudents);
// 11.Используя функцию push(), добавьте нового студента в конец массива.
const newStudent = { id: 7, name: '', age: 21, major: 'ASOI', gpa: 3.7 };
students.push(newStudent);
console.log('Массив студентов после добавления нового студента:', students);
// 12.Используя функцию pop(), удалите последнего студента из массива.
const removedStudent = students.pop();
console.log('Удаленный студент:', removedStudent);
console.log('Массив студентов после удаления последнего студента:', students);