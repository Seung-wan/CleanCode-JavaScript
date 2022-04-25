/**
 *  부정 조건문 지양하기
 *  1. 생각을 여러번 해야 할 수 있다
 *  2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킨다
 *
 *  부정 조건은
 *  Early Return
 *  Form Validation
 *  보안 혹은 검사하는 로직
 */

const isCondition = true;
const isNotCOndition = false;

function isNumber(num) {
  return !Number.isNaN(num) && typeof num === 'number';
}

if (isNumber(3)) {
  console.log('숫자입니다');
}

// 부정 조건을 생각하면 까다롭다.
if (!Number.isNaN(3)) {
  console.log('숫자입니다');
}
