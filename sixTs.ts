/*Создайте объект student с типом { name: string; age: number; }. Заполните этот объект данными о студенте.
 Попробуйте добавить некорректные данные (например, строку вместо числа для возраста) и посмотрите, что произойдет. */

let student: {name: string, age: number};

student = {
  name: "Alex",
  age: "29"
}
// При добавлении некорретных данных происходит ошибка, так как string не соответсвует типу number


/*Создайте интерфейс Animal с свойствами name (строка) и age (число). Затем создайте объект dog,
 который соответствует интерфейсу Animal. Попробуйте добавить лишнее свойство в объект dog и посмотрите, что произойдет. */

interface Animal {
  name: string
  age: number
}

let dog: Animal = {
  name: "Хаски",
  age: 23,
  author:
}
// При добалении свойства которое не входит в interface происходит ошибка


/*Создайте интерфейс Employee с свойствами name (строка), age (число) и department (строка, но опциональное). 
Затем создайте объект employee без свойства department. Проверьте, что TypeScript не выдает ошибку. */

interface Employee {
  name: string
  age: number
  depatment?: string
}

let employee: Employee = {
  name: "Diana",
  age: 30
}
// Ts не выдает ошибку так,как свойство department опциональное


/*Создайте интерфейс Student с свойствами name (строка) и grades (массив чисел). Создайте массив students, который будет содержать объекты типа Student. 
Попробуйте добавить в массив объект, который не соответствует интерфейсу Student, и посмотрите, что произойдет. */

interface Student {
  name: string
  age: number[]
}

let sstudent: Student = {
  name: "Sasha",
  age: 23
}
// Происходит ошибка компиляции(Али, ишт е бохаг хир дукх и, задани суть не понял)


