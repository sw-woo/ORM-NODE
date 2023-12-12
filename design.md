# MVC Design Pattern
## 1. Design Pattern (설계패턴)
### 1. Design Pattern
* 근/현대에서 각종 소프트웨어/시스템을 구축하면서 발생한 주요 문제점들의 해결책에 대한 설계방법들을 유형별로 정리해둔 것

사용자 요청과 응답은 어떻게 받지? 이런 

* 소프트웨어 개발의 주요목적인 현실세계의 다양한 문제점들을 해결하기 위한 수단
* 각종 S/W 개발작업을 진행할 때 직면하는 크고 작은 문제들 중 유사한 문제점들에 대한 해결방법들에 대해 설계 정리 계승 한 것

* **다양한 업종에서 사용되는 사고대응, 문제해결 메뉴얼과 같은 것**

### 2. MVC 디자인 패턴
* **서버기반 웹 프로그래밍 구현시 가장 보편적으로 사용하는 설계패턴**
* 웹페이지와 같은 <span style="color:red">클라이언트들의 요청과 응답에 대한 처리(Controller)</span>와 <span style="color:blue">서버측에서의 html (화면=View)에 대한 제어</span>를 할 줄 알아야 한다.
* DB서버와의 연동을 통한 클라이언트에서 전달된 <span style="color:green">데이터의 처리 및 저장딘 데이터 처리(Model)</span>를 어떻게 해야하는지에 처리지침 및 기본 가이드

<br>

### 3. MVC Dseign Pattern 구조

* Controller : 사용자의 요청과 응답을 제어한다. (Node에서는 라우터)
  *요청유형
    1. 웹페이지에 대한 요청 (로그인화면 등)
    2. 웹페이지와 서버상의 데이터와 동적데이터 요청  (ex 쇼핑몰 카테고리의 데이터들)
    3. 순수하게 데이터만 요청 (RESTHul)

  ** 실질적으로 어떤 형식으로 어떻게 요청을 보낼까?
    - mvc 패턴은 URL(인터넷주소 또는 링크주소) 형식으로 보낸다 (형식 = https://www.test.co.kr/login)
    - https://www.test.co.kr **/member/entry (주소체계)**
    - https://www.test.co.kr/login ==> 최상위컨트롤러는 index고(생략가능) 그 안에 login 액션메소드
    - https://www.test.co.kr/articles/1 ==> articles라는 컨트롤러안에 1 액션메소드 요청
    - 통신규약://특정웹사이트(호스트).도메인주소(웹서버주소)/컨트롤러명(라우팅파일명)/라우팅메소드(액션메소드=요청기능)

* View (화면 표현)
  1. HTML로 UI 표현 (html을 담을 수 있는 그릇역할)
  2. Model 기반 View에 데이터 표현가능 (ejs)

* Model (컨트롤러가 요청 // 모델을 통해서 데이터 표현)
  1. 데이터 구조 표현 및 데이터를 담거나 옮긴다.
  2. 데이터에 대한 모든 처리 (등록/수정/삭제/조회)


<br>
컨트롤러에 의해 데이터 처리는 모델<br>
컨트롤러에 의해 html 표현은 뷰<br>
<br>

---

* SoC(sep) : 컴퓨터 프로그램을 구별된 부분으로 분리시키는 디자인원칙. 관심사의 분리

* 웹페이지/데이터 요청 : HttpRequest (클라이언트 -> 서버에게 데이터 요청. 사용자가 브라우저 등)
  - HyperText(html) Transfer Protocol == HTML에 대한 요청과 응답을 주고받을 때 지켜야하는 약속(통신규약=프로토콜)
  - 요청해오는 정보는 브라우저에 담겨져 있다. 모든 정보는 HttpRequest객체안에 담겨져 있어서 요청내용을 추출한다.

* 웹페이지/데이터 응답 : HttpResponse (서버 -> 클라이언트에게 데이터 전달. 응답처리 객체)

<br>
http://www.naver.com <br>
통신프로토콜://호스트명.도메인명 <br>

웹서버 통신 보안 알아두기
SSL(Seucre Socket Layer = 보안채널) 
ssl환경이면 보다 더 안전하게 통신이 가능하다.
* https://~~~  (ssl환경)
* http://~~~

          ==== SSL ====
웹브라우저 =   https   =  웹서버
          ============= 

* http 헤더(header) ==> 헤더에 넣으면 다 가로챔 (해킹위험)
* http 본문(body) - email, password 등  ==> 중요한 데이터는 본문에 넣기!

---

## 2. 라우팅 프로세스 이해와 개념잡기
### 1. 라우팅 프로세스 이해
* 라우팅이란? 
  - 웹 클라이언트들의 요청(Req)에 대한 서버측에서의 클라이언트 요청과 응답(Res)에 대한 처리 요청방식(Method)

* 요청내용: 웹페이지 요청이나 데이터 등록/수정/삭제/조회 요청
* 요청방식: GET/POST/... 등 (ejs의 form 태그 안의 methoed)
* 호출주소: 도메인 이하 호출주소
  http://test.co.kr/member/login

### 2. 클라이언트 and 서버 개념 이해
* 클라이언트: 요청자
* 서버: 응답


### 3. Frontend and Backend 개념이해
* 도메인주소
  - DNS : 도메인 네임 서비스/서버 (물리적인 아이피 주소)
  - DNS Server : 도메인주소를 서비스하는 서버의 IP주소 제공
  
  http://shoping.naver.com
  http://www.naver.com 
  통신규약://호스트명.도메인명/호출주소체계
  호스트명+도메인주소 = 하나의 웹사이트를 서비스하는 주소

* 서버 ip -> 도메인으로 변환해서 진행해주는 DNS 서버

* 에러코드
- 404 not found 못찾는다는 의미
- 500 서버에러
- 200 성공

## 3. 동기/비동기 라우팅 패턴 구현 및 실습
### 1. 동기/비동기 개념
* 동기(Sync)란 : 여러 작업을 처리함에 있어 직렬적으로 순차적으로 처리하는 방식<br>
첫번째 작업이 끝나면 다음작업을 진행하고 그 다음 작업을 진행하고... <br>

* 비동기(Async)란 : 여러 작업을 처리함에 있어 병렬적으로 동시에 처리 가능한 방식<br>
여러 작업을 동시에 병렬로 처리하며, 콜백함수와 콜백지옥 대신 자바스크립트에서는 Promise, Async/Await 비동기 구현<br>
처리에 우선순위 없음<br>

---

* URL (인터넷주소체계 또는 주소/링크주소)<br>
* URL을 통해 GET 방식으로 서버에 데이터를 전달하는 방법 2가지<br>

* case1) 쿼리스트링방식(QueryString)으로 주소를 통해 서버로 데이터를 전달하자<br>
기본링크주소?key=value&key=value&key=value<br>
http://shop.naver.com/product?pid=1&price=500&stock=5;<br>

* case2) 파라메터방식으로 URL주소안에다가 직접 데이터를 넣어서 주소체계를 만들어 데이터를 전달하는 방식<br>
http://shop.naver.com/product/10000 <br>
http://shop.naver.com/catrgory/100/product/10000 <br>
http://shop.naver.com/blogs/1 <br>