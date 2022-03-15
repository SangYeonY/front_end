let text1 = "John Doe";
console.log(text1);

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 

console.log(answer1);
console.log(answer2);
console.log(answer3);

let text2 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text2.length);

let text3 = "We are the so-called \"Vikings\" from the north.";
console.log(text3);

let x = "john";
let y = new String("john");
console.log(typeof x);
console.log(typeof y);
console.log(x==y);

let str = "Apple, Banana, Kiwi";    // " 는 0부터 계산
console.log(str.slice(7,13));
console.log(str.slice(-12,-6));     // 음수일때 문자열 끝부터 12번째 위치 6번째 위치 잘라냄
console.log(str.slice(7));          // 두번째 매개변수 생략시 나머지 문자열 잘라냄
console.log(str.slice(-12));        // 위와 같은값


console.log(str.substring(7,13));   // slice 와 차이점은 음수를 매개변수로 사용 못함
console.log(str.substr(7,6));        // slice 와 차이점은 두번째 매개변수가 추출된 부분의 길이를 지정한다.
console.log(str.substr(7));

/*
-string 주요 메소드
slice(start,end)  : start,end 인덱스가 음수가 될수 있음.이때는 맨끝 부터 -1
substring(start,end)  : end 인덱스 문자는 포함 안함
substr(start,length)  : 두번재 인자가 추출할 길이
replace(src,dest)   : src문자열을 dest로 대체함.
toUpperCase()
toLowerCase()
concat(join,str2) :  str2문자열과 연결함. join문자열은 연결할때 사용할 문자열
padStart()  : 예제 참고
padEnd() : 예제 참고
charAt(index) : index위치의 문자 구하기, 
     - 자바스크립트에서는 문자열을 배열처럼 다룰수 있음. [] 안에 인덱스지정 가능.
split() : 문자열 나누기(구분기호 사용)
문자열검색 메소드 : 사용형식은 자바와 동일.
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()
*/