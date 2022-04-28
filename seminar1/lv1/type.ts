//===================기본적인 타입 표현
let namee: string = '채정아';
console.log(namee);

let grade: number = 4;

let isDeleted: boolean = false;

const sum = (x:number, y:number):number=>{
    return x*y;
}

//===================배열 타입 표현
//const ages: number[] = [1,2,3,4,5];
const ages: Array<number>=[1,2,3,4];

//const strArray: string[]=["hi","hello"];
const strArray: Array<string>=["hi","hello"];

//===================object와 Object 차이
// const obj1: object={ 원시 타입 제외한 나머지 전부 받을 수 있음
// }

// const obj2: Object={ 모든 타입 받을 수 있음
// }
const f1 = (obj:object):void =>{
    console.log(obj);
}

const f2 = (obj:Object):void=>{
    console.log(obj);
}

// f1([1,2,3,4]);
// f1('hihi');
f2([1,2,3,4]);
f2('hihi');

//===================함수 타입 표현
const div=(x:number,y:number):string=>{
    return 'hello';
}

console.log(div(2,3));

//===================null, undefined
let p: null=null;
let u: undefined=undefined;

//===================angle-bracket 타입 단언
let name4: any='채정아';
let name4Length: number = (<string>name4).length; //형 변환과 비슷
console.log(name4Length);
//=================== as
let name5: any='서버';
let name5Length: number=(name5 as string).length;