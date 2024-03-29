// 향상된 반복문

const obj = {
    name: "홍길동",
    age: 30,
    address: "지구 어딘가"
};

const arr = [1,2,3,4,5];

const map = new Map();
map.set("korea", "한국");
map.set("japan", "일본");
map.set("china", "중국");

const set = new Set();
set.add("사과");
set.add("딸기");
set.add("복숭아");

const str = "abcdef";

// for ~ in : 객체에서 프라퍼티 반복
for (key in obj){
    console.log(`${key} = ${obj[key]}`);
}

// for ~ of : Iterable 반복가능한 타입(str,arr,map,set...)
for (ele of arr){
    console.log(ele);
}
for (ele of map){
    console.log(ele);
}
for (ele of set){
    console.log(ele);
}
for (ele of str){
    console.log(ele);
}
