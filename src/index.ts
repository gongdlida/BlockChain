// when it uses "interface"

interface Student {
  name: string;
  age: number;
}

const student1 = {
  name: "nicolas",
  age: 22,
};

const sayHi = (student1: Student): string => {
  return `Hello, I'm ${student1.name}! I'm ${student1.age} years old!`;
};

console.log(sayHi(student1));

// when it uses "class"

class Subject {
  public name: string;
  public grade: string;
  //private grade: number;
  // if "private" keyword is used, it means that can be used only "Subject" prototype.
  constructor(name: string, grade: string) {
    this.name = name;
    this.grade = grade;
  }
}

const favoriteSub = new Subject("Math", "A+");

const introduce = (favoriteSub: Subject): string => {
  return `My favorite Subject is ${favoriteSub.name}! I always got an ${favoriteSub.grade} !!`;
};

console.log(introduce(favoriteSub));

export {};
// Typescript needs "export" keyword. when it was not here, Typescript won't work
