/**
 * 라우터의 기본주소는
 * http://localhost:3000/articles/~
 */

var express = require("express");
var router = express.Router();

/**
 * 게시글 목록 웹페이지 요청과 응답 처리 라우팅메소드
 * http://localhost:3000/articles/
 * 요청유형: get
 * 응답결과: 게시글 목록 웹페이지
 */
router.get("/", async (req, res) => {
  //게시글 목록 데이터
  var articles = [
    {
      articelIdx: 1,
      title: "첫번쨰 게시글 입니다.",
      contents: "첫번째 게시글 내용입니다.",
      view_cnt: 100,
      display: "y",
      ipaddress: "111,111,111,111",
      registDate: Date.now(),
      registMemberId: "sungwoo1",
    },
    {
      articelIdx: 2,
      title: "두번쨰 게시글 입니다.",
      contents: "첫번째 게시글 내용입니다.",
      view_cnt: 200,
      display: "y",
      ipaddress: "222,111,111,111",
      registDate: Date.now(),
      registMemberId: "sungwoo2",
    },
    {
      articelIdx: 3,
      title: "첫번쨰 게시글 입니다.",
      contents: "첫번째 게시글 내용입니다.",
      view_cnt: 300,
      display: "y",
      ipaddress: "123,111,111,111",
      registDate: Date.now(),
      registMemberId: "sungwoo3",
    },
  ];

  res.render("article/list.ejs", { articles });
});

/**
 * 게시글 목록 웹페이지 요청과 응답 처리 라우팅메소드
 * http://localhost:3000/articles/create
 * 요청유형: get
 * 응답결과: 게시글 목록 웹페이지
 */
router.get("/create", async (req, res) => {
  res.render("article/create");
});

/**
 * 신규 게시글 사용자 입력정보 등록 요청과 응답 처리 라우팅메소드
 * http://localhost:3000/articles
 * 요청유형: post
 * 응답결과: 게시글 목록 페이지로 이동처리
 */
router.post("/create", async (req, res) => {
  //req.body.속성이름은 html tag의 name 값입니다.
  var title = req.body.title;
  var contents = req.body.contents;
  var register = req.body.register;

  //DB입력 단일 데이터 생성
  var article = {
    articelIdx: 1,
    title,
    contents,
    view_cnt: 0,
    display: "y",
    ipaddress: "111,111,111,111",
    registDate: Date.now(),
    registMemberId: register,
  };

  //게시글 목록 페이지로 이동시킨다.
  res.redirect("/articles");
});

/**
 * 게시글 정보확인 웹페이지 요청과 응답 처리 라우팅메소드
 * 요청 URL: http://localhost:3000/articles/modify/1
 * 요청유형: get
 * 응답결과: 게시글 목록 웹페이지
 */
router.get("/modify/:aid", async (req, res) => {
  //url을 통해 전달 받은 articleIdx
  var articelIdx = req.params.aid;

  // 쿼리 문자열을 통해 전달 받은 title
  var title = req.query.title;

  var contents = req.query.contents;

  //step3:조회해온 단일 게시글정보...
  var article = {
    articelIdx,
    title,
    contents,
    view_cnt: 0,
    display: "y",
    ipaddress: "111,111,111,111",
    registDate: Date.now(),
    registMemberId: "우성우22",
  };

  res.render("article/modify", { article });
});

/**
 * 게시글페이지에서 목록 웹페이지 요청과 응답 처리 라우팅메소드
 * http://localhost:3000/articles/modify/1
 * 요청유형: post
 * 응답결과: 게시글 목록 웹페이지
 */
router.post("/modify/:aid", async (req, res) => {
  //req.params로 받은 aid
  var articelIdx = req.params.aid;
  //req.body.속성이름은 html tag의 name 값입니다.
  var title = req.body.title;
  var contents = req.body.contents;
  var register = req.body.register;

  //DB수정 단일 데이터 생성 및 DB 수정처리
  var article = {
    articelIdx: articelIdx,
    title,
    contents,
    view_cnt: 0,
    display: "y",
    ipaddress: "111,111,111,111",
    registDate: Date.now(),
    registMemberId: register,
  };

  //게시글 목록 페이지로 이동시킨다.
  res.redirect("/articles");
});

/**
 * 게시글 삭제 요청과 응답 처리 라우팅메소드
 * http://localhost:3000/articles
 * 요청유형: get
 * 응답결과: 게시글 목록 웹페이지
 */
router.get("/delete", async (req, res) => {
  var articleIdx = req.query.aidx;

  //해당 게시글 번호를 이용해 DB에서 해당 게시글을 삭제한다.

  //게시글 목록 페이지로 이동시킨다.
  res.redirect("/articles");
});

module.exports = router;
