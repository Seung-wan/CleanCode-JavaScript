/**
 * else 피하기
 * 함수에서 return 하는 경우에 else에 작성할 필요가 없음
 */

function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  }
  return '이름없음';
}

function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  }
  return 'HI!!!';
}
