const path = require("path"); //node.js 경로를 찾아주는 기본 라이브러리
const Sequelize = require("sequelize");
//개발모드 환경설정
const env = process.env.NODE_ENV || "development"; //환경설정 값이 있다면 환경설정 파일에 등록되 벨류 값사용
//DB연결 환경설정정보 변경처리//관련정보 수정
const config = require(path.join(__dirname, "..", "config", "config.json"))[
  env
];
//데이터 베이스 객체
const db = {};

//DB연결정보로 시퀄라이즈 ORM 객체 생성 대문자 Sequelize는 클래스(설계도) sequelize는 인스턴스(객체) 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//DB 처리 객체에 시퀄라이즈 정보 맵핑처리
//이후 DB객체를 통해 데이터 관리가능해짐
db.sequelize = sequelize; //DB연결정보를 포함한 DB제어 객체속성(CRUD) 속성명 속성값
db.Sequelize = Sequelize; //Sequelize팩키지에서 제공하는 각종 데이터 타입 및 관련 객체정보를 제공함

//회원모델 모듈파일 참조하고 db속성정의하기 모듈을 불러올떄 파라메터값 2개를 전달해주고 있습니다.
db.Member = require("./member.js")(sequelize, Sequelize);
//db객체 외부로 노출하기
module.exports = db;
