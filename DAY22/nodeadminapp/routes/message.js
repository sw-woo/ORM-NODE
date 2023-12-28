/**
 * 채팅 메시지 이력 정보관리 라우팅 기능 제공route module
 */
var express = require("express");
let router = express.Router();

/* GET message 목록 페이지 */
router.get("/list", async (req, res) => {
  res.render("message/list");
});

router.get("/create", async (req, res) => {
  res.render("message/create");
});

router.post("/create", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/message/list");
});

router.get("/modify", async (req, res) => {
  res.render("message/modify");
});

router.post("/modify", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/message/list");
});

router.get("/delete", async (req, res) => {
  res.redirect("/message/list");
});

module.exports = router;
