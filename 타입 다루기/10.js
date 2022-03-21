/**
 * 타입 검사
 * typeof 2 // 'number'
 * typeof (2) // 함수처럼 괄호도 사용 가능
 * typeof null // object 자바스크립트의 에러
 * instanceof : 프로토타입 체인 검사
 */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const student1 = new Student('yu', 23);
const student2 = { name: 'kim', age: 12 };

console.log(student1 instanceof Student);
console.log(student2 instanceof Student);

const arr = [];
const func = function () {};
const date = new Date();

console.log(arr instanceof Array);
console.log(func instanceof Function);
console.log(date instanceof Date);

console.log(Object.prototype.toString.call());

/**
 * 자바스크립트에서는 타입 검사를 잘 해야한다.
 * 자바스크립트는 동적인 타입을 가지는 언어 -> 타입 검사가 어렵다, 잘 찾아서 해야함
 * primitive vs reference
 */
