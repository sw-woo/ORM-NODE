var express = require("express");
var router = express.Router();

//http://localhost:3000/member/join
router.get("/join", function (req, res) {
  res.render("member/entry.ejs");
});

//http://localhost:3000/member/join
router.get("/entry", function (req, res) {
  res.render("member/entry.ejs");
});

//http://localhost:3000/member/join
router.post("/entry", function (req, res) {
  res.redirect("/main");
});

module.exports = router;
