// auth.js 라우터 파일은 회원 인증과 관련된 모든 사용자 요청과 응답을 처리합니다.
// 모든 라우터 파일은 기본 라우팅 주소체계를 가집니다.
// http://localhost:3000/ 라우터파일의 기본주소/라우팅메소드의 주소
// http://localhost:3000/auth/ 라는 기본주소로 해당 라우터파일내 모든 라우팅 메소드는 기본주소를 갖는다.

var express = require('express');
var router = express.Router();

// 기능: 로그인 웹페이지 사용자 요청과 응답처리 라우팅 메소드
// 호출주소: https://localhost:3000/auth/login
// 호출방식: GET
router.get('/login', function(req, res) {
    res.render('auth/login');
});

// 기능: 로그인 웹페이지에서 사용자가 입력한 메일주소/암호를 받아 로그인 처리요청과 응답처리 라우팅메소드
// 호출주소: https://localhost:3000/auth/login
// 호출방식: POST
router.post('/login', function(req, res) {
    
    // STEP1: 사용자 로그인 페이지에서 사용자 입력한 메일주소와 암호값을 추출합니다.
    // 사용자가 입력한 값들을 웹브라우저를 통해 전달되기 때문에 req = HttpRequest 객체를 통해 사용자가 입력한 값을 추출합니다.
    var email = req.body.email;
    var password = req.body.password;

    // 궁금한것 req.body.email 객체로 받아온다고 했는데
    // 그럼 email객체를 미리 ejs에 작성을 해야하는건지? 
    // 일반적으로 작성순서? ejs부터 만들고, 자바스크립트 만들고, router 작성하는지?

    // STEP2: 모델을 이용해 동일한 메일주소와 암호가 있는지 체크한다.

    // STEP3: 정상적인 사용자 아이디/암호인경우 메인페이지로 이동시켜준다.
    // res HttpResponse 객체의 redirect('도메인주소/하위url주소')메소드는 지정된 url주소체계로 사용자 웹페이지를 이동시켜준다.
    // res.redirect('http://www.naver.com/');
    res.redirect('/main');
    

})

// 로그아웃 요청 및 응답처리 라우팅 메소드
// 요청주소: http://localhost:3000/auth/logout
// 요청방식: GET
// 반환형식: 특정 페이지 이동처리
router.get('/logout', function(req, res) {
    res.redirect('/main');
});

// router.get();




module.exports = router;