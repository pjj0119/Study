"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = "park";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["john", "kim"];
let names2 = ["john", "kim"];
// 여러 타입을 가지는 배열 ( 유니언 타입 사용);
let array1 = ["john", 1, 2];
let array2 = ["john", 1, 2];
// 여러 타입을 단언X any
let someArray = ["john", 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2]
// tuple1 = [1, 'a']
let users;
users = [['john', 1], ['dae', 2]];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// any
let any = 'abc';
any = 1;
any = [];
//unknown
let unknown = false;
// let string1 : string = unknown;
let string2 = unknown;
// Object
let obj = {};
let arr = [];
//let null : object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1',
    description: "description1"
};
let union;
union = "hi";
union = 123;
// union = []
let func2;
func2 = () => {
    console.log('hi');
};
