// create interface
// interface는 js에서 작동하지 않음. / typescript에서만 작동
interface Human {
    name:string;
    age:number;
    gender:string;
}

// create class
class HumanCls {
    public name: string;
    public age: number;
    public gender: string;

    // 생성자 ==> 객체 초기화
    // method / 클래스가 시작할 때마다 호출됨.
    constructor(name:string, age:number, gender?:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}


const name:string = "bbo",
age:number = 24,
gender:string = "male";

const person = {
    name: "bbo",
    gender: "female",
    age: 24
}

const human = new HumanCls("bbo", 24);

// ?붙으면 선택적 파라미터
// typescript는 일반적인 javascript에서 할수 있는 실수를 줄여준다 ex) 매개변수 개 수 오류 등
// type 설정
// cont 변수 = (파라미터:type): 리턴값 => {}
const sayHi = (name:string, age:number, gender:string): string => {
    // console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

//interface 이용한 create function
const humanSayHi = (person:Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

//class 이용한 create function
const humanClsSayHi = (person:HumanCls): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayHi(name, age, gender));
console.log(humanSayHi(person));
console.log(humanSayHi(human));

export {};