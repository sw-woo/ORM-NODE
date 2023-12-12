const {odd, even} = require('./base1');
const checkOddOrEven = require('./base2');

// 문자열 텍스트를 전달하면 문자열의 길이값을 2로 나눠서 나온 나머지 값이 홀, 짝인지 판단하는 함수
function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;     // 홀수입니다.
    } else {
        return even;    // 짝수입니다.
    }
}

console.log("숫자에 대해 홀수 짝수 여부를 판단해보자 :",checkOddOrEven(5));
console.log("문자열 길이가 홀수인지 짝수인지 판단해보자 :", checkStringOddOrEven("안녕하세요"));