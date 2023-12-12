# ECMAScript 2015

## 1. 신규 변수, 상수 사용법
* 기존 변수선언 방식 var를 대체하는 새로운 변수 선언 방식제공 let 제공
* var 변수선언방식은 블록스코프 개념이 없어서 특정 블록안에서 선언된 변수값을 블록범위 밖에서 언제든지 변경이 가능해서 문제를 초래함.
* 블록스코프 내에서 선언된 let, const 값은 그 안에서만 사용 및 변경이 가능하다.

### var, let, const 차이점<br>
1. 중복 선언 가능 여부
   - var : 중복해서 선언(+초기화)가 가능하다.<br>
    이 경우, 마지막에 할당된 값이 변수에 저장된다.<br>
    기존에 선언해둔 변수의 존재를 까먹고, 값을 재할당하게 되는 등의 실수가 발생하기 쉽다.<br>
   - const, let : 중복 선언 불가능<br>
    이미 선언한 변수를 다시 선언할 경우, 에러가 발생한다.<br>
    var에 비해서 코드의 안정성을 높여줄 수 있는 방식<br>
2. 재할당 가능 여부
    - var, let : 값의 재할당이 가능한 변수다.
    변수 선언 및 초기화 이후에 반복해서 다른 값을 재할당 할 수 있다.
    - const : 값의 재할당이 불가능한 상수다.
    const는 상수를 선언하는 키워드다.
    처음에 선언 및 초기화하고 나면 다른 값을 재할당 할 수 없다.<br>
    **var, let과 달리 const 선언에서는 반드시 값을 선언과 동시에 정의해야 한다**
3. 변수 스코프 유효범위
   * 스코프란 유효한 참조 범위를 말한다.
예를 들어, 함수 내부에서 선언된 변수는 함수 내부에서만 참조가 가능하다.
    - var : 함수 레벨 스코프(function-level scope)
    var는 함수 내부에 선언된 변수만 지역변수로 한정하며, 나머지는 모두 전역변수로 간주한다.
    - let, const : 블록 레벨 스코프(block-level scope)
let, const는 함수 내부는 물론, if문이나 for문 등의 코드 블럭{ ... } 에서 선언된 변수도 지역변수로 취급한다. 당연히 함수 내부에서 선언된 변수도 외부에서 참조할 수 없다.<br>
var는 함수 내부에 선언된 변수만 지역 변수로 인정하는 함수 레벨 스코프이다.<br>
let, const는 모든 블록 내부에서 선언된 변수까지 지역변수로 인정하는 블록 레벨 스코프이다<br>


***전통적인 자바스크립트 변수선언방식 var**
```javascript
var userName = "이보람";
var age = 40;
var price = 5000;
// var isMale = false;  // 0 or 1, Boolean형
var isMale = true;  // 0 or 1, Boolean형

// 기본배송비
// 기본배송비는 한번 할당/설정해두면 변경되면 안된다.
var baseDelyFee = 3000;

console.log("기본배송비1:", baseDelyFee);

// 기본배송비 변경
baseDelyFee = 13000;

// 전통적인 var 변수선언 방식은 상수(한번 할당하면 변경 불가 변수)개념을 지원하지 않는다.
console.log("기본배송비2:", baseDelyFee);
```

<br><br>

## 2. 템플릿 문자열 문법 사용법
* 역 홑 따옴표(벡틱 문자열)으로 문자열 기반 탬플릿을 작성할 수 있다.
* 줄바꿈 기늠
* 벡틱 문자열 안에 변수 추가 가능

`string text` // 문자열 표현
`string text line 1
 string text line 2` // 개행된 문자열 표현

var expression;
`string text ${expression} string text` // 변수값 문자열 조합

function tag() { };
tag `string text ${expression} string text` // 함수 호출 아규먼트<br>


***es6 이전의 표기법**<br>
```javascript
var a = 30;
var b = 3;
var c = "자바스크립트";
var str = "저는 " + (a+b) + "살이고 " + c + "를 배우고 있습니다.";

console.log(str)    // 저는33살이고 자바스크립트를 배우고 있습니다.
```
<br>

***템플릿 리터럴에서는 아래와 같이 $와 중괄호{}를 사용하여 표현식을 표기할 수 있습니다.**
```javascript
let a1 = 30;
let b1 = 3;
let c1 = "자바스크립트";
let str1 = `저는 ${a1+b1}살이고 ${c1}를 배우고 있습니다.`;
console.log(str1);   // 저는33살이고 자바스크립트를 배우고 있습니다.
```

위 처럼 + 연산자로 문자열을 연결해주는 것보다 가독성이 더 좋다.

<br><br>

## 3. 자바스크립트 객체 정의 및 사용법
```javascript
var name = "이보람1";
var age = 33;

// 자바스크립트 언어는 class를 지원하지만
// 손쉽게 객체를 만드는 방법으로 {}를 이용해 객체를 바로 정의해서 사용할 수 있다.

var user = {
    // name: name,  // 객체의 속성명과 해당속성에 할당하는 변수명이 같으면 변수를 생략가능하다.
    name,
    age: age,
    address: "인천광역시 부평구",
    telephone: "010-2256-5222",
    teach:function() {
        return "learn node.js now"
    }
};

console.log("사용자 자바스크립트 객체 출력 :",user);

```

**SW를 개발하는 목적/이유**
* 개발을 하기 위해선 일반화란 개념이 필요하다
* 일반화시킨 개념인 클래스를 기반으로 프로그래밍을 하는 방식 = 객체지향 프로그래밍order order = new Order(); 클래스를 이용해 객체를 생성 클래스를 통해서 객체를 생성하는 행위 (인스턴스 생성)
* Order클래스를 통해서 새로운 실체인 order 객체를 생성
```javascript
order.name = "",
order.grade = "vip",
order.address = "인천시 ...",
order.phone = "010-",
order.payment()
```


- 클래스(Class)(속성, 기능)를 이용해 객체를 생성하고
- 객체는(Object)속성 : 특성, 어트리뷰트(Attribute), 프로퍼티(Property)기능 : 메소드(Method), 함수(function)

<br><br>

## 4. 비구조화 할당 문법 사용법
* 배열이나 객체로부터 배열내 값이나 객체 속성들의 값을 빠르게 변수/상수에 할당 사용 가능
* 구조화 되지 않은 형식으로 배열내의 값들이나 객체내의 속성 및 함수를 일괄 선언 및 값으로 할당가능
```javascript

// 비구조화 할당 신규 문법이 아닌
// 전통적인 구조화된 (일반적인) 배열과 객체에서의 값을 추출하는 방법

// 문자열 배열을 정의하고 값을 할당
// 배열을 정의할 때는 [] 대괄호 사용
const books = ['React','Vue','Angular','Svelt','Jquery'];

// 구조화된 배열값을  추출해 변수에 할당하는 전통적인 방법
var book1 = books[0];   // 배열의 값(index)은 0부터 시작
var book2 = books[1];
var book3 = books[2];
console.log("배열에서 추출한 값을 출력해보자 :", book1,book2,book3);


// 비구조화 할당방식으로 상수를 선언하고 값을 할당해보자.
const [book4,book5] = ['JAVA','C#','Python','PHP','JavaScript'];
console.log("비구조화 할당방식의 상수출력1 :",book4, book5);


// 비구조화 할당하고 나머지 값을은 배열로 받기
const [book6, ...extraBooks] = ['자바','닷넷','파이썬','PHP','노드'];
console.log("비구조화 할당방식의 상수출력2 :", book6,extraBooks);


// 비구조화 할당 예시
const [book7,book8,book9,book10,book11,book12] = ['자바','닷넷','파이썬','PHP','노드'];
console.log("비구조화 할당방식의 상수출력3 :", book7,book8,book9,book10,book11,book12)


// 객체의 비구조화 할당에 대해 알아봅시다.
const techTrend = {
    front: 'React.js',
    backend: 'Node.js',
    server: 'Linux',
    rdbms: 'MYSQL=MariaDB',
    noSQL: 'MongoDB',
    infra: 'AWS',
};


// 구조화된 (전통적인) 방식으로 객체의 속성 값을 추출해보자.
var frontTech = techTrend.front;
var backendTech = techTrend.backend;
var serverTech = techTrend.server;
console.log("구조화된 방식으로 추출한 객체의 속성변수값 :",frontTech,backendTech,serverTech);

// 비구조화된 방식으로 객체의 속성값을 추출해보자
const {front,backend,server,getAuthor} = {
    front: 'React.js',
    backend: 'Node.js',
    server: 'Linux',
    rdbms: 'MYSQL=MariaDB',
    noSQL: 'MongoDB',
    infra: 'AWS',
    getAuthor:function() {
        return "강창훈";
    }
};

console.log("비구조화 할당 방식으로 값을 추출한 결과 :",front,backend,server,getAuthor());

// 비구조화 할당 문법을 사용하는 이유!
// 보다 적은 코딩량으로 보다 발리 코딩을 할 수 있는 방식을 제공!
```
<br><br>

## 5. 익명함수와 화살표 함수 사용법
* 전통적인 자바스크립트 함수 선언방식 소개
* 함수 이름이 없는 익명 함수
* 화살표 함수
```javascript
// 함수정의 case1: 전통적인 자바스크립트 함수(기능) 정의 방식
// 함수의 사용목적: 코드의 재사용성 제공
// funcion의 함수명(입력 파라메터 = 매개변수) { 처리로직 구현 return 반환구문 }
function fnPlus(a,b) {
    let c = a+b;
    return c;
};

var result = fnPlus(1,2);
console.log("전통적인 함수기능정의 방식:", result)


// 함수정의 case2: 익명함수 = 함수명없이 함수 정의
var plus1 = function(a,b) {
    return a+b;
};

var result1 = plus1(1,5);
console.log("익명함수기능 정의 방식 :",result1);


// 함수정의 case3: 화살표 함수(화살표+익명함수), function 예약어 사용 안함
var plus2 = (a,b)=> {
    return a+b;
}
console.log("화살표 함수 기능 정의 방식 :",plus2(10,20));


// 함수정의 case4: 화살표 함수의 return 구문까지도 없애보자
// {}중괄호도 생략하고 return구문도 생략가능
var plus3 = (a,b)=>(a+b);
console.log("화살표함수 return 구문제거 :",plus3(100,200));
```