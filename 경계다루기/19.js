/**
 * 매개변수의 순서가 경계다
 *
 * 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다
 *
 * 1. 매개변수를 2개가 넘지 않도록 만든다
 * 2. 규칙적이지 않은 매개변수가 들어온다면 arguments, rest parameter 사용 고려
 * 3. 매개변수를 객체에 담아서 넘긴다
 * 4. 랩핑하는 함수
 */

// 만약 매개변수가 많다면
// 1. 객체로 받는다
// 2. rest parameter
// 3. arguments
function someFunc(someArg1, someArg2, someArg3, someArg4) {}

function getFunc(someArg1, someArg3) {
  someFunc(someArg1, undefined, someArg3);
}
// 함수의 매개변수는 2개를 넘지 않는것이 좋다. 2개 이하여야 의미적으로 시작과 끝 개념으로 이해하기가 좋다
getRandomNumber(1, 50);
getDates('2021-10-01', '2021-10-31');
genShuffleArray(1, 5);
