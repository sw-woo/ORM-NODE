//사용자 정보처리를 위한 웹페이지 요청과 응답처리 전용 라우터 파일

var express = require("express");
var router = express.Router();

//모델 영역 참고
var db = require("../models/index");

//회원가입 웹페이지요청 및 응답처리
//http://localhost:3000/member/entry
router.get("/entry", async (req, res, next) => {
  res.render("member/entry.ejs");
});

//회원가입 웹페이지 응답처리
//http://localhost:3000/member/entry
router.post("/entry", async (req, res, next) => {
  //step1: 회원가입 정보 추출하기
  var email = req.body.email;
  var password = req.body.password;

  //step2: 데이터 베이스에 members테이블 데이터를 저장합니다.
  //DB에 전달되는 JSON데이터의 속성명은 반드시 해당 데이터 모델(models/member.js)의 속성명(DB컬럼명)과 동일하여야 합니다.
  var member = {
    email: email,
    password: password,
  };
  //step3: db 프로그래밍
  //db.Member .create()는 ORM 프레임워크에 의해서 벡엔드에서
  //Insert INTO member(email,password,createdAt)
  var savedMember = await db.Member.create(member);

  res.redirect("/");
});

//회원 로그인 웹페이지요청 및 응답처리
//http://localhost:3000/member/login
router.get("/login", async (req, res, next) => {
  res.render("member/login.ejs", { resultMsg: "", email: "", password: "" });
});

//회원 로그인 웹페이지 응답처리
//http://localhost:3000/member/login
router.post("/login", async (req, res, next) => {
  //step1: 사용자 로그인정보 추출
  var email = req.body.email;
  var password = req.body.password;

  //step2: DB members테이블에서 동일한 메일주소의 단일사용자 정보를 조회한다.
  //db.Member .findeOne(해당 컬럼과 동일한 조건설정) ORM메소드는
  //Select * FROM members
  var member = await db.Member.findOne({ where: { email: email } });

  //step2
  var resultMsg = "";
  if (member == null) {
    resultMsg = "동일한 메일주소가 존재하지 않습니다.";
  } else {
    //db에 저장된 조회한 사용자의 암호값과 사용자가 입력한 암호값이 일치하면
    if (member.password == password) {
      res.redirect("/");
    } else {
      resultMsg = "암호가 일치하지 않습니다.";
    }
  }
  if (resultMsg !== "") {
    res.render("member/login.ejs", { resultMsg, email, password });
  }
});

module.exports = router;
