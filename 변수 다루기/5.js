/*
var를 지양하자

var는 함수 스코프
let, const는 블록 스코프, TDZ


var는 변수를 선언하기 전에도 사용 가능(자바스크립트 엔진은 먼저 평가 -> 실행 )
값은 undefined로 찍힌다.
같은 변수명으로 무제한 선언 가능

console.log(name);

var name = 'name';
var name = 'name';
var name = 'name2';

console.log(name);
*/

// SyntaxError: Identifier 'name' has already been declared
// let name = 'name';
// let name = 'name2';

// let은 먼저 선언해놓고 재할당이 가능하다.
/*
let name;
name = 'name';
console.log(name);
name = 'name2';
console.log(name);
name = 'name3';
console.log(name);
*/

//SyntaxError: Unexpected token
// const name;
// name = 10;

// Assignment to constant variable
// const name = 10;
// name = 20;
