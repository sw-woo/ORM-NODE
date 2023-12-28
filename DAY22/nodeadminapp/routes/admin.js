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
  let company_code = 1;
  let dept_name = "리콘";
  let admin_id = req.body.admin_id;
  let admin_password = req.body.admin_password;
  let admin_name = req.body.admin_name;
  let email = req.body.email;
  let telephone = req.body.telephone;

  const admin = {
    company_code,
    dept_name,
    admin_id,
    admin_password,
    admin_name,
    email,
    telephone,
  };

  res.render("admin/list", { admin });
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
