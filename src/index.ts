const sayHi = (name: string, age: number, gender?: string): void => {
  console.log(
    `Hi! I'm ${name}! I'm ${age} years old. You are a ${gender}?????`
  );
};

const Hello = (name: string, age: number, gender?: string) => {
  console.log(`Hi! I'm ${name}! I'm ${age} years old. You are a ${gender}`);
};

const add = (num1: number, num2: number): number => {
  console.log(num1 + num2);
  return num1 + num2;
};

add(2, 3);

Hello("Wane", 25, "female");
sayHi("Tate", 23, "male");

export {};
// export를 하지 않으면 변수를 선언할 수 없다는 에러가 출력됨
