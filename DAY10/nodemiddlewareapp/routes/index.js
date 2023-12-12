var express = require("express");
const { checkParams, checkQueryKey } = require("./middleware");
var router = express.Router();

//라우터 미들웨어 함수 샘플3
//index.js 라우터가 실행될때마다 실행되는 미들웨어함수
router.use(function (req, res, next) {
  console.log("Index.js 라우터 미들웨어 함수 샘플1:", Date.now());
  next();
});

//해당 라우터에서 해당 호출 주소체계와 일치하는 경우 매번 실행되는 미들웨어 함수
// http://localhost:3000/sample/computer
router.use(
  "/sample/:id",
  function (req, res, next) {
    console.log("Index 라우터 미들웨어 함수-2-Request.URL=", req.originalUrl);
    next();
  },
  function (req, res) {
    console.log("Index 라우터 미들웨어 함수-3-Request Type", req.method);
    res.send(req.originalUrl);
  }
);

/** 메인페이지 요청과 응답 처리 라우팅 메소드 */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * 파라메터 id값이 존재하는 체크하는 미들웨어함수 적용하기
 * http://localhost:3000/test/eddy
 */
router.get("/test/:id", checkParams, function (req, res) {
  res.render("index", { title: "Express" });
});

/**
 * 파라메터 id값이 존재하는 체크하는 미들웨어함수 적용하기
 * http://localhost:3000/test/product?category="노트북"&number=1
 */
router.get("/product", checkQueryKey, function (req, res) {
  res.render("index", { title: "Express" });
});

module.exports = router;
