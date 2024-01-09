/* 함수 */
// 자바스크립트는 태생적으로 함수기반언어
// 함수는 객체... 호출할 수 있는 객체
// 함수는 값(리터럴)이다.
// => 변수에 저장도 가능하고 파라미터에 인자로 전달할 수도 있다.
// => 선언식함수는 값이 아니다. 이경우는 변수저장이나 인자전달 불가능

// 함수는 값이다!!!
const func0 = function(a=3, b=5){
    return a + b;
}
console.log(func0);
const str = '' + func0;
console.log(str);

// 함수 정의

// 1. 선언적 함수
// 전역함수(global function)로 선언을 어디서 하든
// 전역적으로 참조할 수 있다.
// 가급적 최소로 만들어 사용하는게 메모리를 아낄 수 있다.
// function키워드로 선언, 반드시 이름이 있어야 함
function func1(a, b){
    return a + b;
}

console.log(func1(3,5));

// 2. 함수리터럴 (값인 함수)
const func2 = function(a,b) {
    return a + b;
};
// 이름이 있는 함수리터럴
// func3이 함수의 이름, f3은 함수리터럴 내에서 사용하는 함수의 이름
// func3은 전역변수, f3은 함수의 지역변수
const func3 = function f3(a,b){
    return a + b;
};

// 3. 함수 생성자 : 사용 비추
const func4 = new Function("a","b","return a + b");
console.log(func4(3,5));

// 4. 화살표 함수 (arrow function) : ES6
const func5 = (a,b) => a + b;
// const func5 = function (a,b){ return a + b; }

// 함수문장 vs 함수 표현식
function func6() {
    console.log("func6");
}
func6();
(function func7() {
    console.log("func7");
});
// func7(); // error
(function (a,b) {
    console.log(a+b);
}(3,5));

if ((function() {return 1;})()) console.log('함수표현식');
if (function func6() {console.log("func6");}) console.log('함수문장');

// IIFE (Immediatly Invoke Function Expression) : 즉시 호출 함수표현식
let result = (function() {
    return 1;
})();
console.log(result);

// 함수의 인자(arguments)
// arguments : 현재 실행중인 함수에 전달된 인자 배열
// arguments.length : 전달받은 인자 배열의 개수
// arguments.callee : 인자를 전달받아 현재 실행중인 함수
function func8() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(''+arguments.callee);
}
func8(3,5);
func8(3,5,7,9);

// 함수 매개변수와 인자
function func9(a=0,b=0,c=0){
    return a + b;
}
console.log(func9(3,5,7,9)); // 8
console.log(func9(3,5,7)); // 8
console.log(func9(3,5)); // 8
console.log(func9(3));  // NaN, 기본값을 주면 8

// 가변매개변수 함수 (Rest Parameter Function) : ES6
// 인자가 몇개가 들어오던 하나의 배열로 받는다.
function func10(...args){
    console.log(args);
    console.log(arguments);
    console.log(arguments.length);
}
func10(3);
func10(3,5);
func10(3,5,7);

// 콜백함수 (Callback Function)
// JS에서는 파라미터에 값으로 전달되는 함수리터럴을 콜백함수라고 한다.
// 예 1)
function hof(a,f) {
    return a + f(a);
}
const cb = function(a){
    return a**2;
};
console.log(hof(3, cb)); // 12

// 예 2)
const fa = function(a,f){
    return a + f();
};
const fb = function(a){
    return fa(a, function(){
        return a**2;
    });
}
console.log(fb(3));

// 배열고차함수 sort, map, filter, reduce
const arr = [3,1,5,2,4];
console.log(arr);

// sort(function(a,b){return a-b;}) : 오른차순 정렬
// sort(function(a,b){return b-a;}) : 내림차순 정렬
const arrsort = arr.sort(function(a,b){
    return b - a;  
});
console.log(arrsort);

const arr2x = arr.map(function(ele){
    return ele*2;
});
console.log(arr2x);

// filter : 조건에 맞는 엘리먼트들만 추출
const arrlt6 = arr2x.filter(function(ele){
    return ele < 6;
});
console.log(arrlt6);

// reduce : 배열요소등의 값을 누적
// 첫번째인자: 콜백함수, 두번째인자: 누적시작인덱스
const arrsum = arrlt6.reduce(function(acc, curr){
    return acc + curr;
}, 0);
console.log(arrsum);
console.log(arr);

// 함수체이닝 (function chaining) : 함수를 연결해서 사용
// 함수의 반환값이 다시 함수일때
const arr2 = [1,2,3,4,5];
console.log(
    arr2.sort(function(a,b){
        return b - a;
    }).map(function(ele){
        return ele**2;
    }).filter(function(ele){
        return ele > 10;
    }).reduce(function(acc,curr){
        return acc+curr;
    }, 0)
);

// 함수체이닝 (arrow function)
const arr3 = [1,2,3,4,5];
console.log(
    arr3.sort((a,b) => b - a)
        .map((ele)=>ele**2)
        .filter((ele)=>ele > 10)
        .reduce((acc,curr)=>acc+curr, 0)
);


// 함수 체이닝 실습 1)
// ['a','b','c','d','e']를 ['e','d','c','b','a'] 로 변경
const arr4 = ['a','b','c','d','e'];
console.log(
    arr4.sort(
        (a,b) => b.charCodeAt() - a.charCodeAt()
    )
);

// 함수 체이닝 실습 2)
// ['a','b','c','d','e']를 [33,34,35,36,37] 로 변경
const arr5 = ['a','b','c','d','e'];
console.log(
    arr5.map((a)=>a.charCodeAt()-64)
);
console.log('a'.charCodeAt());
console.log('A'.charCodeAt());

// 함수 체이닝 실습 3)
// ['a','b','c','d','e']를 ['a','bb','ccc','dddd','eeeee'] 로 변경
const arr6 = ['a','b','c','d','e'];
console.log(
    arr6.map((a)=>a.repeat(arr6.indexOf(a)+1))
);

// 함수 체이닝 실습 4)
// ['a','b','c','d','e']를 ['마','라','다','나','가'] 로 변경
const arr7 = ['a', 'b', 'c', 'd', 'e'];
const arrMap = {
  'a': '가',
  'b': '나',
  'c': '라',
  'd': '마',
  'e': '다'
};
console.log(arr7.sort((a, b) => b.charCodeAt() - a.charCodeAt()).map((item) => arrMap[item]));

// 함수 체이닝 실습 5)
// ['a','b','c','d','e']의 ASCII코드값의 총합 구하기
const arr8 = ['a','b','c','d','e'];
console.log(
    arr8.map((a)=>a.charCodeAt())
    .reduce((acc,curr)=> acc+curr,0)
);

const arr9 = ['가','나','다','라','마'];


const students = [
    {"s001" : {sname: "홍길동", skor: 100, seng: 90, smath: 80}},
    {"s002" : {sname: "강감찬", skor: 90, seng: 80, smath: 70}},
    {"s003" : {sname: "이순신", skor: 80, seng: 70, smath: 60}},
    {"s004" : {sname: "장보고", skor: 70, seng: 60, smath: 50}},
    {"s005" : {sname: "최영", skor: 60, seng: 50, smath: 40}}
    ];
    
    // 함수 체이닝 과제 1)
    // 각 학생의 과목별점수와 과목별점수평균과의 차를 구하여 아래와 같이 출력하시오.
    // 홍길동 국어:+20, 영어:+20, 수학:+20
    // 강감찬 국어:+10, 영어:+10, 수학:+10
    // 이순신 국어:+0, 영어:+0, 수학:+0
    // 장보고 국어:-10, 영어:-10, 수학:-10
    // 최영 국어:-10, 영어:-20, 수학:-20
    const avg = [0,0,0];
    for (std of students) {
        for (key in std) {
            avg[0] += std[key].skor/students.length;
            avg[1] += std[key].seng/students.length;
            avg[2] += std[key].smath/students.length;
        }
    }
    console.log(students.map((std) => {
        let stdValue = Object.values(std)[0];
        let temp;
        stdValue.skor = (temp=stdValue.skor - avg[0])>=0?'+'+temp:temp;
        stdValue.seng = (temp=stdValue.seng - avg[1])>=0?'+'+temp:temp;
        stdValue.smath = (temp=stdValue.smath - avg[2])>=0?'+'+temp:temp;
        return std
        })
    );


    // 함수 체이닝 과제 2)
    // 각 학생의 정보와 과목별총점을 아래와 같이 출력하시오.
    // s001 홍길동 국어:100 영어:90 수학:80
    // s002 강감찬 국어:90 영어:80 수학:70
    // s003 이순신 국어:80 영어:70 수학:60
    // s004 장보고 국어:70 영어:60 수학:50
    // s005 최영 국어:60 영어:50 수학:40
    // 총점 국어:400 영어:350 수학:300
    const students2 = [
        {"s001" : {sname: "홍길동", skor: 100, seng: 90, smath: 80}},
        {"s002" : {sname: "강감찬", skor: 90, seng: 80, smath: 70}},
        {"s003" : {sname: "이순신", skor: 80, seng: 70, smath: 60}},
        {"s004" : {sname: "장보고", skor: 70, seng: 60, smath: 50}},
        {"s005" : {sname: "최영", skor: 60, seng: 50, smath: 40}}
        ];
        const sum2 = [0,0,0];
        for (std of students2) {
          for (key in std) {
            sum2[0] += std[key].skor;
            sum2[1] += std[key].seng;
            sum2[2] += std[key].smath;
          }
        }
        students2.push({
          "" : {
            sname: "총점",
            skor: sum2[0],
            seng: sum2[1],
            smath: sum2[2]
          }
        });
        console.log(students2);
