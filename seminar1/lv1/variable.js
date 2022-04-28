//============================재선언: var만 됨
var name1="추서연";
var name1="추";
console.log(name1);
// let name2='박진수';
// let name2='김희빈';
// console.log(name2);

//============================재할당: var과 let만 됨
let name3='이동헌';
name3 = '주효식';
console.log(name3);
// const name4 = "김루희";
// name4 = '박진형';
// console.log(name4);

//============================function scope: var
if(true){
    var x='var variable';
}
console.log(x);
//============================block scope: let, const
// if(true){
//     const y='const variable';
// }
// console.log(y);
function foo(){
    if(true){
        var name5 = '추서연';
        console.log('if-block-',name5);
    }
    console.log('function-block-',name5);
}
// console.log('global-', name5);