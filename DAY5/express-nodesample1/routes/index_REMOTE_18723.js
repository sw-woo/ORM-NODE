var express = require('express');
var router = express.Router();

/* 메인 웹페이지 요청 및 응답처리 라우팅 메소드 */
// http://localhost:3000
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: '화이팅입니당' });
  // index.ejs 파일호출
  // title이라는 속성을 가지고 있는 데이터
});

module.exports = router;
