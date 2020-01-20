const name:string = "bbo",
age:number = 24,
gender:string = "male";

// ?붙으면 선택적 파라미터
// typescript는 일반적인 javascript에서 할수 있는 실수를 줄여준다 ex) 매개변수 개 수 오류 등
// type 설정
// cont 변수 = (파라미터:type): 리턴값 => {}
const sayHi = (name:string, age:number, gender:string): string => {
    // console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi(name, age, gender));
export {};