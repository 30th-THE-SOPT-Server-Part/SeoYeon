//------------------------기본자료형-원시타입
const name1 = '추서연';
console.log(typeof name1);
let age=18;
console.log(typeof age);
let server=true;
console.log(typeof server);

//-----------------------백틱(`) 안에 변수 담을 수 있음
//-----------------------안녕하세요 제 이름은 추서연입니다. 제 나이는 18살입니다.
console.log("안녕하세요 제 이름은"+name1+'입니다. 제 나이는 '+age+'살 입니다.');
console.log(`안녕하세요 제 이름은 ${name1} 입니다. 제 나이는 ${age}살 입니다.`);

//-----------------------null, undefined
console.log(typeof null);
console.log(typeof undefined);

//-----------------------array.map()
let arr = ["안녕", 1, "나는", true];
let num = [1, 2, 3, 4];
const newNumArr = num.map(x => x*2);
console.log(newNumArr);

//-----------------------array.map()으로 새 배열 안만들고 반복을 시킬 수도 있음
newNumArr.map(x=>{
    console.log(x);
});

//-----------------------for of -> 반복
for (const x of newNumArr){
    console.log(x);
}