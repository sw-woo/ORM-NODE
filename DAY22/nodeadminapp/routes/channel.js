/**
 * 채팅방 정보관리 라우팅 기능 제공 route module
 */
var express = require("express");
var router = express.Router();

/* GET channel 목록 페이지 */
router.get("/list", async (req, res) => {
  res.render("channel/list");
});

router.get("/create", async (req, res) => {
  res.render("channel/create");
});

router.post("/create", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/channel/list");
});

router.get("/modify", async (req, res) => {
  res.render("channel/modify");
});

router.post("/modify", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/channel/list");
});

router.get("/delete", async (req, res) => {
  res.redirect("/channel/list");
});
module.exports = router;
