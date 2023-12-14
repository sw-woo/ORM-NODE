/**
 * 게시글 정보관리 라우팅 기능 제공 route module
 * http://localhost:3000/article/~
 */
var express = require("express");
var router = express.Router();

/* 게시글 목록 조회 웹페이지 요청 및 응답 라우팅메소드 */
router.get("/list", async (req, res) => {
  //step1: DB에서 모든 게시글 데이터 목록을 조회해옵니다.
  const articles = [
    {
      article_id: 1,
      board_type_code: 1,
      title: "공지게시글 1번글입니다.",
      contents: "공지게시글 1번 내용입니다.",
      view_count: 10,
      ip_address: "111,111,123,123",
      is_display_code: 1,
      reg_date: "2023-12-14",
      reg_member_id: "sungwoo",
    },
    {
      article_id: 2,
      board_type_code: 1,
      title: "공지게시글 2번글입니다.",
      contents: "공지게시글 2번 내용입니다.",
      view_count: 20,
      ip_address: "111,111,123,123",
      is_display_code: 1,
      reg_date: "2023-12-14",
      reg_member_id: "sungwoo",
    },
    {
      article_id: 3,
      board_type_code: 1,
      title: "공지게시글 3번글입니다.",
      contents: "공지게시글 3번 내용입니다.",
      view_count: 30,
      ip_address: "111,111,123,123",
      is_display_code: 1,
      reg_date: "2023-12-14",
      reg_member_id: "sungwoo",
    },
  ];

  //step2:게시글 전체 목록을 list.ejs뷰에 전달한다.
  res.render("article/list", { articles });
});

/* 게시글 조회 목록에서 조회옵션 데이터를 전달받아 조회옵션기반 게시글 목록 조회후
게시글 목록 페이지에 대한 요청과 응답처리
*/
router.post("/list", async (req, res) => {
  var boardTypeCode = req.body.boardTypeCode;
  var title = req.body.title;
  var isDisplayCode = req.body.isDisplayCode;

  const articles = [
    {
      article_id: 1,
      board_type_code: boardTypeCode,
      title: "공지게시글 1번글입니다.",
      contents: "공지게시글 1번 내용입니다.",
      view_count: 10,
      ip_address: "111,111,123,123",
      is_display_code: 1,
      reg_date: "2023-12-14",
      reg_member_id: "sungwoo",
    },
  ];
  res.render("article/list", { articles });
});

/* 신규 게시글 등록 조회 웹페이지 요청 및 응답 라우팅메소드 */
router.get("/create", async (req, res) => {
  res.render("article/create");
});

/* 신규 게시글 사용자 등록정보 처리 요청 및 응답 라우팅메소드 */
router.post("/create", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/article/list");
});
/* 기존 게시글 정보 삭제처리 요청 및 응답 라우팅메소드
// http://localhost:3000/article/delete?aid=3
*/
router.get("/delete/:aid", async (req, res) => {
  var articleIdx = req.params.aid;
  res.redirect("/article/list");
});

/* 기존 게시글 정보 확인 및 수정 웹페이지 요청 및 응답 라우팅메소드 */
router.get("/modify/:aid", async (req, res) => {
  var articleIdx = req.params.aid;
  res.render("article/modify");
});

/*기존 게시글 사용자 수정정보 처리 웹페이지 요청 및 응답 라우팅메소드 */
router.post("/modify/:aid", async (req, res) => {
  res.redirect("/article/list");
});

module.exports = router;
