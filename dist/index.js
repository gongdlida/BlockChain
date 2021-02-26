"use strict";
// when it uses "interface"
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "nicolas",
    age: 22,
};
const sayHi = (student1) => {
    return `Hello, I'm ${student1.name}! I'm ${student1.age} years old!`;
};
console.log(sayHi(student1));
// when it uses "class"
class Subject {
    //private grade: number;
    // if "private" keyword is used, it means that can be used only "Subject" prototype.
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
const favoriteSub = new Subject("Math", "A+");
const introduce = (favoriteSub) => {
    return `My favorite Subject is ${favoriteSub.name}! I always got an ${favoriteSub.grade} !!`;
};
console.log(introduce(favoriteSub));
// Typescript needs "export" keyword. when it was not here, Typescript won't work
//# sourceMappingURL=index.js.map