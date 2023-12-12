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
