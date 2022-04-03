/**
 * 삼항연산자 다루기
 * 3개의 '피'연산자
 * 조건 ? 참(식) : 거짓(식)
 * 삼항연산자를 다루는 기준을 일관되게 지정하기
 */

function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

function example() {
  if (condition1) return value1;
  else if (condition2) return value2;
  else if (condition3) return value3;
  else return value4;
}

function example() {
  switch (condition) {
    case condition1:
      return value1;
    case condition2:
      return value2;
    case condition3:
      return value3;
    default:
      return value4;
  }
}

const example = condition1 ? (a === 0 ? 'zero' : 'positive') : 'negative';

function alertMessage(isAdult) {
  // isAdult가 참이어도 undefined, 거짓이어도 undefined return

  isAdult ? alert('입장이 가능합니다.') : alert('입장이 불가능합니다.');

  if (isAdult) {
    alert('입장이 가능합니다.');
  } else {
    alert('입장이 불가능합니다.');
  }
}
