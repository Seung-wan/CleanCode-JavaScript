// 호이스팅 주의하기

// var global = 0;

// function outer() {
//   console.log(global);
//   var global = 5;

//   function inner() {
//     var global = 10;
//     console.log(global);
//   }
//   inner();
//   global = 1;
//   console.log(global);
// }

// outer();

// function duplicatedVar() {
//   var a;
//   console.log(a);

//   var a = 100;
//   console.log(a);
// }

// duplicatedVar();

// var sum;

// sum = function(){
//   return 1 + 2;
// }

// console.log(sum());

// var sum = 10;

// console.log(sum());
// function sum() {
//   return 1 + 2;
// }

/**
 * 함수를 만들때는 함수 표현식을 추천
 * 호이스팅 : 런타임시에 선언이 최상단으로 끌어올려짐 (자바스크립트 엔진의 평가와 실행)
 * 코드를 작성할 때 예측하지 못한 실행 결과
 * var를 지양한다
 * 함수도 호이스팅이 된다(함수 선언문, var를 이용한 함수 표현식)
 * 함수 표현식을 사용하기
 */
