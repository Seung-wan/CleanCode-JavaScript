/**
 * Default Case 고려하기
 * 코드를 짤 때 입력값이 없을 때 기본으로 지정해 줄 값 처리하기
 */

function sum(x, y) {
  x = x || 1;
  y = y || 1;

  return x + y;
}

console.log(sum());

function safeParseInt(number, radix) {
  return parseInt(number, radix || 10);
}
