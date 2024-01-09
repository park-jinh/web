/* 정규표현식 */
// - 패턴(pattern)과 플래그(flag)를 정의하여 문자열내에서
//   특정한 패턴에 해당하는 문자열 존재여부를 확인하는데 사용
// - JS에서는 RegExP생성자의 객체
// - 정규표현식리터럴 : //
// - 문법 : /pattern/flags
// - 메서드
// 1) test : 패턴에 부합하는 문자열이 있으면 true, 없으면 false
// 2) match : 패턴에 부합하는 문자열(들) 배열로 반환
// 3) replace : 패턴에 부합하는 문자열을 치환

let str = 'hello! are you human?';

// 정규표현식 리터럴 생성
const re1 = /h/;
const re2 = /h/g;
console.log(re1.test(str));
console.log(re2.test(str));
const result1 = str.match(re1);
const result2 = str.match(re2);
console.log(result1);
console.log(result2);
console.log(str.replace(/hello/,'hi'));
console.log('-------------------');

// 실습 1) 첫번째 h를 H로 치환
str = 'hello! are you human?';
console.log(str.replace(/h/,'H'));

// 실습 2) 모든 h를 H로 치환
console.log(str.replace(/h/g,'H'));

// 실습 3) 영문자들만 추출
console.log(str.match(/[A-Za-z]/g));

// 실습 4) 영문자가 아닌 것들만 추출
console.log(str.match(/[^A-Za-z]/g));

// 실습 5) 영문자의 총 개수
console.log(str.match(/[A-Za-z]/g).length);

// 실습 6) 모든 공백문자들을 제거
console.log(str.replace(/\s/g,''));

// 실습 7) 문자열이 3문자로 구성된 것들만 추출
console.log(str.match(/.{3}/g));

// 실습 8) 영문이나 공백문자가 아닌것들만 추출
console.log(str.match(/[^\sA-Za-z]/g));

// 실습 9) 문자열이 y로 시작하고 u로 끝나는 문자열 추출
const str2 = 'you* youyour you1 you2 you you! you';
console.log(str.match(/(^y\w{0,}u\W)|(\Wy\w{0,}u\W)|(\sy\w{0,}u$)/g));

// 실습 10) 문자열이 5개로 구성된 단어들만 추출
console.log(str.match(/[A-Za-z]{5}/g));
