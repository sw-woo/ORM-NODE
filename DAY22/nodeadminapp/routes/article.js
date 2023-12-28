/**
 * 게시글 정보관리 라우팅 기능 제공 route module
 */
var express = require("express");
var router = express.Router();

/* GET article 목록 페이지 */
router.get("/list", async (req, res) => {
  res.render("article/list");
});

router.get("/create", async (req, res) => {
  res.render("article/create");
});

router.post("/create", async (req, res) => {
  //step1:사용자가 입력한 게시글 등록 데이터 추출
  var boardTypeCode = req.body.boardTypeCode;
  var title = req.body.title;
  var contents = req.body.contents;
  var articleTypeCode = req.body.articleTypeCode;
  var isDisplayCode = req.body.isDisplayCode;
  var register = req.body.register;

  //step2: 추출된 사용자 입력데이터 단일 게시글 json데이터로 구성하기
  //DB article 테이블에 영구적으로 저장처리한다.
  //저장처리후 article테이블에 저장된 데이터를 반환합니다.

  //등록할 게시글 데이터
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

  var searchOption = {
    boardTypeCode,
    title,
    isDisplayCode,
  };
  //step3: 등록처리후 게시글 목록 웹페이지로 이동처리
  res.render("article/list", { articles, searchOption });
});

router.get("/modify", async (req, res) => {
  res.render("article/modify");
});

router.post("/modify", async (req, res) => {
  let userId = req.body.userId;
  let userPw = req.body.userPassword;

  var member = {
    userId,
    userPw,
  };

  console.log(`유저 input id, pw 정보 ${member.userId}/${member.userPw}`);

  res.redirect("/article/list");
});

router.get("/delete", async (req, res) => {
  res.redirect("/article/list");
});

module.exports = router;
