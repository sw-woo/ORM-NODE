<<<<<<< HEAD
// 사용자 입력값 유효성 체크함수
function fnValidation() {

    if(document.getElementById("email").value == "") {
        alert("메일주소 아이디를 입력해주세요.");
        document.getElementById("email").focus();
        return false;
    }
    
    if(document.getElementById("password").value == "") {
        alert("사용자 암호를 입력해주세요.");
        document.getElementById("password").focus();
        return false;
    }
}
=======
function fnValidation() {
  //만약 html 문서의 email 아이디가 있다면

  //   for (var i = 0; i < emailInputs.length; i++) {
  //     if (emailInputs[i].value == "") {
  //       alert("이메일 입력을 부탁드려요");
  //       emailInputs[i].focus();
  //       return false;
  //     }
  //   }
  if (document.getElementById("email").value == " ") {
    document.alert("이메일 입력을 부탁드려요");
    document.getElementById("email").focus();
    return false;
  }
  if (document.getElementById("password").value == " ") {
    document.getElementById("password").focus();
    return false;
  }
}
>>>>>>> day10
