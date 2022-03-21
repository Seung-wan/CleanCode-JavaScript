/**
 * undefined & null
 */
!null;
!!null;

console.log(typeof null);

console.log(null === false);
console.log(!null === true);

// null은 수학적으로 표현될때는 0
console.log(null + 123);

let varb;
console.log(typeof varb);

// undefined is Not-a-Number
console.log(undefined + 10);

console.log(!undefined);

console.log(undefined == null);
console.log(undefined === null);
console.log(!undefined === !null);

/**
 * undefined(NaN), null(0) => 값이 없거나(명시적인 표현) 정의가 되지 않은 것
 * typeof undefined -> 'undefined'
 * typeof null -> 'object'
 */
