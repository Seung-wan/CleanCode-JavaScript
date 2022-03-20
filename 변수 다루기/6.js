// function scope & block scope
// var는 함수단위 스코프이기 때문에 전역에 오염이 발생한다

// var global = '전역';

// if (global === '전역') {
//   var global = '지역';

//   console.log(global);
// }
// console.log(global);

// let은 블록 스코프이기 때문에 원하는대로 동작한다.
// const도 동일하다.

// let global = '전역';

// if (global === '전역') {
//   let global = '지역';

//   console.log(global);
// }
// console.log(global);

// 선언 + 할당
const person = {
  name: 'yu',
  age: 26,
};

// 재할당 (const라서 에러 발생)
// person = {
//   name: 'kim',
//   age: 12,
// };

person.name = 'kim';
person.age = '30';
console.log(person);

const persons = [
  {
    name: 'yu',
    age: 26,
  },
];

persons.push({
  name: 'Lee',
  age: 12,
});

console.log(persons);

// const는 레퍼런스 객체들을 조작하는것이 금지가 아니다, 재할당이 금지.
