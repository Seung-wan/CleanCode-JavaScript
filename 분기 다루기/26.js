/**
 * Early Return
 */

function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();

        return 'Login Success';
      }
    } else {
      throw new Error('No Token');
    }
  }
}

function loginService(isLogin, user) {
  /**
   * Early Return
   * 로그인을 하지 않았을 때만 아래의 로직을 타므로 로그인이 되어 있을 경우 바로 처리
   */
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error('No Token');
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  // login()

  refreshToken();
  return 'Login Success';
}

// -----------------------------------------

function todayWork(condition, weather, isJob) {
  if (condition === 'GOOD') {
    study();
    game();
    youtube();

    if (weather === 'GOOD') {
      exercise();
      washClothing();
    }

    if (isJob === 'GOOD') {
      workNight();
      sleepEarly();
    }
  }
}

function todayWork(condition, weather, isJob) {
  if (condition !== 'GOOD') {
    return;
  }

  study();
  game();
  youtube();

  if (weather === 'GOOD') {
    exercise();
    washClothing();
  }

  if (isJob === 'GOOD') {
    workNight();
    sleepEarly();
  }
}
