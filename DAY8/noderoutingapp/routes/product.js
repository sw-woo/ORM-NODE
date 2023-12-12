var express = require("express");
var router = express.Router();

// 상품목록 웹페이지 요청과 응답 라우팅 메소드
router.get("/list", async (req, res) => {
  res.render("product/list");
});

// 단일상품 상세정보 보기 웹페이지에 대한 요청과 응답하기
// localhost:3000/product/detail?pid=1&name=lg노트북
router.get("/detail", async (req, res) => {
  // URL에 쿼리스트링방식으로 전달된값 추출하기
  var productID = req.query.pid;
  var productName = req.query.pname;

  res.render("product/detail", { productID, productName });
});

//와일드 카드 이용시 주의사항: 동일한 URL 호출주소와 호출방식(GET)의 라우팅 메소드가 존재하는경우
//와일드 카드 방식이 먼저 호출되고 다른 라우팅메소드 주소는 호출이 무시된다.
//호출주소체계: http://localhost:3000/product/detail/sample
//호출방식: GET
router.get("/detail/sample", async (req, res) => {
  res.render("product/detail", { productID: 100, productName: "노트북" });
});

//res.send():만능 메소드를 사용해보자
//호출주소: http://localhost:3000/product/sendall
router.get("/detail/sendall", async (req, res) => {
  //   res.send("안녕하세요");
  // res.send({ uid: "sungwoo", username: "우성우" });
  //   var htmlTag = `
  //   <html>
  //   <body>
  //     <h1>샘플웹사이트</h1>
  //   </body>
  // </html>
  //     `;
  //   res.send(htmlTag);
  //서버에 정된 파일을 다운로드 해보자

  console.log("__dirname 물리적 경로 확인하기:", __dirname + "maple.png");
  //res.sendFile('해당 파일의 전체 물리적 경로를 적어주어야 합니다.')
  res.sendFile(__dirname + "/routesample.png");
});

//파라메터 방식으로 전달된 상품정보를 추출해 단일 상품정보를 보여주자
//호출주소: localhost:3000/product/detail/1
//호출방식: GET유형
//반환값: 단일상품정보 웹페이지
//*매우중요: 와일드카드 방식으로 주소체계가 정의된 라우팅메소드는 해당 라우터 파일의 맨 하단에 반드시 배치시켜야한다.

router.get("/detail/:pid", async (req, res) => {
  var productID = req.params.pid;
  res.render("product/detail", { productID, productName: "노트북" });
});

//호출주소: http://localhost:3000/product/detail/1/LG노트북/6000
//호출방식: GET

router.get("/detail/:pid/:pname/:price", async (req, res) => {
  var productID = req.params.pid;
  var productName = req.params.pname;
  var price = req.params.price;

  res.render("product/detail", { productID, productName, price });
});

module.exports = router;
