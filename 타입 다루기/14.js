/**
 * isNan
 * 10진수 -> 사람
 * 2진수 -> 컴퓨터
 * IEEE 754 부동소수점
 */

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isInteger(100));

console.log(isNaN(123 + 'test'));
console.log(Number.isNaN(123 + 'test'));
isNaN;

/*다
 * isNaN은 자동 형변환을 한다
 * isNan()은 먼저 인수를 숫자로 형변환 후, NaN이면 true, 아니면 false
 * Number.isNaN은 형변환을 하지 않는다
 * Number.isNaN()은 강제로 매개변수를 숫자로 변환하지 않고, 주어진 값의 유형이 Number이고 값이 NaN이면 true, 아니면 false
 */

function valueIsNaN(v) {
  return v !== v;
}
console.log(valueIsNaN(1));
