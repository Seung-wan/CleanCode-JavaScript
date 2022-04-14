/**
 * else if 피하기
 * else if문을 파이프 라인처럼 흐르는게 아니다, else처리 후에 if처리를 하는 것
 * 많이 늘어질 경우 switch 고려
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
