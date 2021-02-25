"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayHi = (name, age, gender) => {
    console.log(`Hi! I'm ${name}! I'm ${age} years old. You are a ${gender}?????`);
};
const Hello = (name, age, gender) => {
    console.log(`Hi! I'm ${name}! I'm ${age} years old. You are a ${gender}`);
};
const add = (num1, num2) => {
    console.log(num1 + num2);
    return num1 + num2;
};
add(2, 3);
Hello("Wane", 25, "female");
sayHi("Tate", 23, "male");
// export를 하지 않으면 변수를 선언할 수 없다는 에러가 출력됨
//# sourceMappingURL=index.js.map