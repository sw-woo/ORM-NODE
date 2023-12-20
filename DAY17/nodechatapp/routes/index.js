var express = require("express");
var router = express.Router();

/* GET 로그인 웹페이지 요청 및 응답 */

router.get("/login", async (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  // 로그인 처리 로직
  // 로그인 완료 후 채팅 페이지로 이동
  res.redirect("/chat");
});

router.get("/entry", (req, res) => {
  res.render("entry");
});

router.post("/entry", (req, res) => {
  // 회원가입 처리 로직
  // 회원가입 완료 후 로그인 페이지로 이동
  res.redirect("/login");
});

router.get("/find", (req, res) => {
  res.render("find");
});

router.post("/find", (req, res) => {
  // 암호 찾기 처리 로직
  // 암호 찾기 완료 후 로그인 페이지로 이동
  res.redirect("/login");
});
module.exports = router;
