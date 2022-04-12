/**
 * else if 피하기
 */

const x = 1;

if (x >= 0) {
  console.log('x>=0');
} else if (x > 0) {
  console.log('x>0');
} else {
  console.log('else');
}

// 아래와 같이 작성, else if는 파이썬의 elif가 아닌 else안에 if가 있는 것 else의 중괄호가 생략됨
if (x >= 0) {
  console.log('x>=0');
} else {
  if (x > 0) {
    console.log('x>0');
  }
}
