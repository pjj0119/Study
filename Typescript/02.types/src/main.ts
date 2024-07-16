// Boolean
let boolean : boolean ;
let falseBoolean : boolean = false;

// Number
let number : number;
let integer : number = 6;
let float : number = 1.2345;

// String
let string : string;
let firstName : string = "park";

// Array
// 한가지 타입만 가지는 배열
let names1 : string[] = ["john", "kim"];
let names2 : Array<string> = ["john", "kim"];

// 여러 타입을 가지는 배열 ( 유니언 타입 사용);
let array1 : (string | number)[] = ["john", 1,2];
let array2 : Array<string | number> = ["john", 1,2];

// 여러 타입을 단언X any
let someArray: any[] = ["john", 1, [], {}, false];

// Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray : readonly string[] = ['A', 'B'];
let numberArray : ReadonlyArray<number> = [1, 2];

let tuple1 : [string, number]
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2]
// tuple1 = [1, 'a']

let users : [string , number][];
users = [['john', 1],['dae', 2]]


let tuple2 : [string, number]
tuple2 = ['a', 1]
tuple2.push(2)
console.log(tuple2);

// any
let any : any = 'abc';
any = 1;
any = [];

//unknown
let unknown : unknown = false;
// let string1 : string = unknown;
let string2 : boolean = unknown as boolean;


// Object
let obj : object = {};
let arr : object = [];
//let null : object = null;
let date : object = new Date();

const obj1 : {id: number, title: string, description : string} = {
	id : 1,
	title: 'title1',
	description : "description1"
}

let union: (string | number);
union = "hi";
union = 123;
// union = []

let func2: () => void;
func2 = () => {
	console.log('hi');
}
