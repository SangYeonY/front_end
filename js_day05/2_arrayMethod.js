var a= 12, b = 13
console.log(a+b)

console.log('1.Convertion Arrays to Strings')
const fruits = ["banana","Orange","Apple","Mango"];
console.log(fruits.toString())

console.log('2.join')       // 지정된 문자열 '**' 을 이용하여 배열값들을 연결합니다.
console.log(fruits.join('**'))

console.log('3.pop')        // 맨 마지막 값부터 하나씩 추출(뽑아오기)
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())

// pop으로 뽑아놔서 배열안에 과일이름 값 존재하지 않음. push 로 새롭게 추가
console.log(fruits)
console.log('4.push')
fruits.push("Watermelon")
fruits.push("Orange")
fruits.push("Kiwi")            
fruits.push("Banana")           
fruits.push("Mango")             
fruits.push("Apple")             // 배열에 맨 마지막 위치에 새로운 값 추가. 리턴값 없음.
console.log(fruits)

console.log('5.shift')          // pop 과 반대. 첫번째 값부터 뽑음
fruits.shift()
fruits.shift()
console.log(fruits)

console.log('6.unshift')        
fruits.unshift("Lemon")
fruits.unshift("pears")         // 맨마지막이 ( 배열상 맨처음) 으로 감
console.log(fruits) 

console.log('7.delete')
delete fruits[1];               // 특정요소값을 지우기 -> undefined 값으로 변경
console.log(fruits)

console.log('8.concet')         // 배열 합치기
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const result = arr1.concat(arr2)
console.log(result)


console.log('9.splice')
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");                    // fruits 배열 인덱스2번부터 중간에 데이터 넣기 - 중간에 지워지는 데이터 갯수는 0개
console.log(fruits2)                                      // (6) ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']                  
const del = fruits2.splice(4,1, "레몬","키위")             // 메소드의 두번째 인자 1-> 중간에 데이터 넣을때 1개를 삭제 , 4번째 인자부터 입력하고 4번째부터 1개 삭제 후 "레몬","키위 입력"
console.log(fruits2)                                      // (7)['Banana', 'Orange', 'Lemon', 'Kiwi', '레몬', '키위', 'Mango']

console.log(del)                                         // splice 메소드는 삭제한 데이터를 리턴합니다. -> ['Apple']
                                                         // 특정 데이터들을 삭제하는 용도만으로 활용 할 수 있습니다.
fruits2.splice(2,2);                                     // 2번 인덱스부터 2개를 삭제하고 새로운 데이터 추가는 안함.
console.log(fruits2)                                     // (5)['Banana', 'Orange', '레몬', '키위', 'Mango']




console.log('10.slice')
const fruits3 = ["Banana", "Orange","Lemon", "Apple", "Mango"];
const citrus = fruits3.slice(1,3);                        // fruits 배열의 인덱스 1번부터 (3-1)개를 잘라내기로 새로운 배열을 리턴한다.
console.log(citrus)
console.log(fruits3.slice(3))                             // 두번째 인자값이 없을때는 3번부터 끝까지 잘라내기로 새로운 배열 리턴

    
