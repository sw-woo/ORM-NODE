/**
 * 공통기능 제공(관리자 사이트 로그인/메인-대시보드) route module
 */
var express = require("express");
var router = express.Router();

/* GET  공통기능 제공(관리자 사이트 로그인/메인-대시보드) */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET  로그인 웹페이지 요청 및 응답  */
router.get("/login", async (req, res) => {
  res.render("login");
});

/* POST  로그인 처리 요청 및 응답,로그인 완료 후 메인 페이지 이동처리 */
router.post("/login", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);
  res.redirect("/");
});

module.exports = router;
