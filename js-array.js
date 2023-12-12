//js array 상수 선언
const hellos = ["안녕", "hello", "곤니찌와", "니하오"];

//js array forEach문과 같이 사용해보기
hellos.forEach((hello) => {
  console.log(`나라별 인사말 ${hello}`);
});

// 두번 맴핑하여서 인사 구문 만들기 js array map 사용 예제
const result = hellos.map((hello) => {
  return hello + hello;
});

console.log(result);
