var express = require("express");
var router = express.Router();

/* 메인 웹페이지 요청 및 응답처리 라우팅 메소드 */
//http://localhost:3000
router.get("/", function (req, res, next) {
  res.render("index", { title: "welcome js" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "welcome js" });
});

module.exports = router;
