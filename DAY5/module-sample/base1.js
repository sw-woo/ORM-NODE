const odd = "홀수입니다.";
const even = "짝수입니다.";

//test 함수정의
function test() {
  console.log("base1 모듈의 test()함수가 호출되었습니다.");
}

console.log("base1모듈이 호출되었습니다.");

//base1모듈에서 정의된 각종/변수(속성)이나 기능을 외부로 노출해야 기능이 제공됩니다.
//module.exports를 통해 객체 형태로 해당 모듈의 기능과 속성을 노출 합니다.
//속성명과 속성값이 같다면 생략이 가능합니다.
module.exports = {
  odd,
  even,
  test,
};
