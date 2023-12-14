/**
 * 관리자 사이트 관리자 계정 정보관리 라우팅 기능 제공 route module
 */
var express = require("express");
var router = express.Router();

/* GET admin 목록 페이지 */
router.get("/list", async (req, res) => {
  res.render("admin/list");
});

router.get("/create", async (req, res) => {
  res.render("admin/create");
});

router.post("/create", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/admin/list");
});

router.get("/modify", async (req, res) => {
  res.render("admin/modify");
});

router.post("/modify", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/admin/list");
});

router.get("/delete", async (req, res) => {
  res.redirect("/admin/list");
});
module.exports = router;
