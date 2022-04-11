/**
 * short circuit
 * if-else 문을 && or || 로 변환
 */

function favoriteDog(someDog) {
  return (someDog || 'Meow') + '입니다';
}

const getActiveUserName = function (user, isLogin) {
  if (isLogin && user) {
    return user.name || 'no name';
  }
};
