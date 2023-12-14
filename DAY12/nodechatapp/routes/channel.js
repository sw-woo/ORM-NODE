var express = require("express");
var router = express.Router();

/* GET .채팅 웹페이지 정보관리 라우팅 기능 제공 */
router.get("/", function (req, res, next) {
  res.render("chat/index", { pageTitle: "Express" });
});

module.exports = router;
