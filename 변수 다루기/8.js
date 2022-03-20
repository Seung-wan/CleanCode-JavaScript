// 임시변수 제거하기

// function getElements() {
//   const result = {};
//   result.title = document.querySelector('.title');
//   result.text = document.querySelector('.text');
//   result.value = document.querySelector('.value');

//   return result;
// }

// function getElements() {
//   const result = {
//     title: document.querySelector('.title'),
//     text: document.querySelector('.text'),
//     value: document.querySelector('.value'),
//   };

//   return result;
// }

// function getElements() {
//   return {
//     title: document.querySelector('.title'),
//     text: document.querySelector('.text'),
//     value: document.querySelector('.value'),
//   };
// }

/**
 * 임시변수를 제거해야 하는 이유
 * 명령형으로 로직이 가득해진다
 * 어디서 어떻게 값이 변하는지 디버깅이 힘들다
 * 추가적인 코드를 작성해야 하는 유혹
 *
 * 해결책
 * 함수나누기
 * 바로 반환
 * 고차 함수
 * 선언형 코드
 */

// function getSumOfIntArray(arr) {
//   return arr.splice((acc, cur, idx) => {
//     return acc + cur;
//   }, 0);
// }
