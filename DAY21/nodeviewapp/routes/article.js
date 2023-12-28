/**
 * 게시글 정보관리 라우팅 기능 제공 route module
 * http://localhost:3000/article/~
 */
var express = require("express");
var router = express.Router();

var db = require("../models/index");

var Op = db.Sequelize.Op;

/* 게시글 목록 조회 웹페이지 요청 및 응답 라우팅메소드 */
router.get("/list", async (req, res) => {
	var searchOption = {
		boardTypeCode: "0",
		title: "",
		isDisplayCode: "0",
	};
	//step1: DB에서 모든 게시글 데이터 목록을 조회해옵니다.
	//db.Article.findAll()메소드는 article테이블에 모든 데이터를 조회하는
	//select * frome article;
	var articles = await db.Article.findAll({
		// attributes: ['가져오고싶은 컬럼명'],
		// where: {
		// 	is_display_code: 1,
		// 	view_count: { [Op.not]: 0 },
		// },
		order: [["article_id", "DESC"]],
	});

	let articlesCount = await db.Article.count();

	console.log(`조회결과 ${articlesCount}`);

	//step2:게시글 전체 목록을 list.ejs뷰에 전달한다.
	res.render("article/list", { articles, searchOption });
});

/* 게시글 조회 목록에서 조회옵션 데이터를 전달받아 조회옵션기반 게시글 목록 조회후
게시글 목록 페이지에 대한 요청과 응답처리
*/
router.post("/list", async (req, res) => {
	//step1:사용자가 선택/입력한 조회옵션 데이터를 추출한다.
	var boardTypeCode = req.body.boardTypeCode;
	var title = req.body.title;
	var isDisplayCode = req.body.isDisplayCode;

	var searchOption = {
		boardTypeCode,
		title,
		isDisplayCode,
	};

	//step2: 사용자가 입력/선택한 조회옵션 데이터를 기반으로 DB에서 게시글 목록을 제
	var articles = await db.Article.findAll({
		where: { board_type_code: searchOption.boardTypeCode },
	});
	res.render("article/list", { articles, searchOption });
});

/* 신규 게시글 등록 조회 웹페이지 요청 및 응답 라우팅메소드 
  
*/
router.get("/create", async (req, res) => {
	res.render("article/create.ejs");
});

/* 신규 게시글 사용자 등록정보 처리 요청 및 응답 라우팅메소드 */
router.post("/create", async (req, res) => {
	//step1:사용자가 입력한 게시글 등록 데이터 추출
	var boardTypeCode = req.body.boardTypeCode;
	var title = req.body.title;
	var contents = req.body.contents;
	var article_type_code = req.body.articleTypeCode;
	var isDisplayCode = req.body.isDisplayCode;
	var register = req.body.register;

	//step2: 추출된 사용자 입력데이터 단일 게시글 json데이터로 구성하기
	//DB article 테이블에 영구적으로 저장처리한다.
	//저장처리후 article테이블에 저장된 데이터를 반환합니다.

	//등록할 게시글 데이터
	//**중요! : 테이블에 저장/수정할 데이터소스는 반드시 데이터모델의 속성명을 이용하여야한다.
	//조심할부분: article 모델 컬럼에 값이 반드시 들어와야하는값(is Not Null)을 반드시 값을 넘겨주어야한다.
	const article = {
		board_type_code: boardTypeCode,
		title,
		contents,
		view_count: 0,
		ip_address: "111,1111,11",
		article_type_code,
		is_display_code: 1,
		reg_member_id: 1,
		reg_date: Date.now(),
	};

	//게시글 정보를 article테이블에 저장
	await db.Article.create(article);

	//step3: 등록처리후 게시글 목록 웹페이지로 이동처리
	res.redirect("/article/list");
});
/* 기존 게시글 정보 삭제처리 요청 및 응답 라우팅메소드
// http://localhost:3000/article/delete?aid=3
*/
router.get("/delete", async (req, res) => {
	var articleIdx = req.query.aid;

	//step2
	var deletedCnt = await db.Article.destroy({
		where: { article_id: articleIdx },
	});

	//step3
	res.redirect("/article/list");
});

/* 기존 게시글 정보 확인 및 수정 웹페이지 요청 및 응답 라우팅메소드 
  http://localhost:3000/article/modify/1
  //GET
*/
router.get("/modify/:aid", async (req, res) => {
	//step1 선택한 게시글 고유번호를 파라메터 방식으로 URL을 통해 전달받음
	var articleIdx = req.params.aid;

	//step2: 해당 게시글 번호에 해당하는 특정 단일게시글 정보를 DB article테이블에서
	//조회해 온다.
	var article = await db.Article.findOne({
		where: { article_id: articleIdx },
	});

	//step3: 단일 게시글 정보를 뷰에 전달한다.
	res.render("article/modify", { article });
});

/*기존 게시글 사용자 수정정보 처리 웹페이지 요청 및 응답 라우팅메소드 */
router.post("/modify/:aid", async (req, res) => {
	var articleIdx = req.params.aid;

	//step1:사용자가 입력한 게시글 등록 데이터 추출
	var boardTypeCode = req.body.boardTypeCode;
	var title = req.body.title;
	var contents = req.body.contents;
	var articleTypeCode = req.body.articleTypeCode;
	var isDisplayCode = req.body.isDisplayCode;
	var register = req.body.register;

	//step2: 추출된 사용자 입력데이터 단일 게시글 json데이터로 구성하기
	//DB article 테이블에 영구적으로 저장처리한다.
	//수정 처리하면 처리건수값이 반환됩니다.

	//등록할 게시글 데이터
	const article = {
		board_type_code: boardTypeCode,
		title,
		contents,
		article_type_code: articleTypeCode,
		is_display_code: 1,
		ip_address: "1111,1111,1111",
		edit_member_id: 1,
		registerDate: Date.now(),
	};

	//DB article테이블의 컬럼내용을 수정처리하고 수정건수 반환받기
	//await db.Article.update(수정할데이터, 조건)는
	//UPDATE article SET SQL이 생성되어짐
	//DB서버로 전달되어 수정되고 수정된 건수가 배열로 전달된다.
	var updatedCount = await db.Article.update(article, {
		where: { article_id: articleIdx },
	});

	//step3: 등록처리후 게시글 목록 웹페이지로 이동처리
	res.redirect("/article/list");
});

module.exports = router;
