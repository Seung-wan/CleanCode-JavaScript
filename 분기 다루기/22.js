/**
 * Truthy & falsy
 * 분기문에서 참 같은 값, 거짓 같은 값은 그 자체로 사용한다, true 또는 false와 같다 이런식으로 사용하지 않는다.
 *
 */

function printName(name) {
  if (!name) {
    return 'no person';
  }

  return `Hello, ${name}`;
}
