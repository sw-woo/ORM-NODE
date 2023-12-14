/*
map 함수:
배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성합니다.
*/

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((num) => num ** 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

// numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

/*
filter 함수:
주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 생성합니다.
*/

// numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]

// numbers = [1, 2, 3, 4, 5];
// const oddNumbers = numbers.filter((num) => num % 2 !== 0);
// console.log(oddNumbers); // [1, 3, 5]
/*
reduce 함수:
배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환합니다.
*/

// numbers = ["안녕", "오늘은", "행복한", "하루가", "되자!"];
// const sum = numbers.reduce((acc, num) => acc + num, " ");
// console.log(sum); // 15

/**
 * forEach 함수:
배열의 각 요소에 대해 주어진 함수를 한 번씩 실행합니다.
 */
// const colors = ["red", "green", "blue"];
// colors.forEach((color) => console.log(color));

/**
 *find 함수:
주어진 테스트를 통과하는 첫 번째 요소를 반환합니다.
 */
// numbers = [1, 2, 3, 2, 5];
// const evenNumber = numbers.find((num) => num % 2 === 0);
// console.log(evenNumber); // 2

// numbers = [1, 2, 3, 4, 5];
// const findThree = numbers.find((num) => num === 3);
// console.log(findThree); // 3

/**
 * some 함수:
배열의 어떤 요소라도 주어진 함수의 테스트를 통과하면 true를 반환합니다.
 */
// numbers = [1, 3, 5, 7, 9];
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log(hasEven); // true

/**
 * every 함수:
배열의 모든 요소가 주어진 함수의 테스트를 통과하면 true를 반환합니다.
 */

// numbers = [3, 4, 6, 8, 10];
// const allEven = numbers.every((num) => num % 2 === 0);
// console.log(allEven); // true

/**
 * indexOf 함수:
배열에서 주어진 요소의 첫 번째 인덱스를 반환하고, 해당 요소가 없으면 -1을 반환합니다.
 */
// const fruits = ["apple", "banana", "orange"];
// const bananaIndex = fruits.indexOf("orange");
// console.log(bananaIndex); // 1

/**
 * splice 함수:
배열의 특정 위치에서 요소를 추가하거나 제거합니다.
 */
// numbers = [1, 2, 3, 4, 5];
// numbers.splice(3, 0, 6); // 인덱스 2에 6 추가
// console.log(numbers); // [1, 2, 6, 3, 4, 5]

// numbers.splice(2, 3); // 인덱스 3에서 2개의 요소 제거
// console.log(numbers); // [1, 2, 6, 5]

/**
 * slice 함수:
배열의 특정 위치에서 요소를 추가하거나 제거합니다.
 */

// numbers = [1, 2, 3, 4, 5];
// const slicedNumbers = numbers.slice(0, 3); // 인덱스 2부터 4 (미만)까지 추출
// console.log(slicedNumbers); // [3, 4]

/**
 * concat 함수:
두 개 이상의 배열을 합쳐 새로운 배열을 생성합니다.
 */
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// let combined = arr1.concat(arr2);
// combined = combined.concat(arr3);
// console.log(combined); // [1, 2, 3, 4, 5, 6]

/**
 * includes 함수:
 */
// numbers = [1, 2, 3, 4, 5];
// const includesThree = numbers.includes(4);
// console.log(includesThree); // true

/**
 * reverse 함수:
배열의 순서를 뒤집습니다.
 */

// numbers = [1, 2, 3, 4, 5];
// let reversedNumbers = numbers.reverse();
// // reversedNumbers = numbers.reverse();
// console.log(reversedNumbers); // [5, 4, 3, 2, 1]

//객체 리스트 적용 필터
// const items = [
//   { id: 1, value: 10 },
//   { id: 2, value: 15 },
//   { id: 3, value: 3 },
//   { id: 4, value: 8 },
//   { id: 5, value: 5 },
// ];

// const oddValueItems = items.filter((item) => item.id % 2 !== 0);

// console.log(oddValueItems);
