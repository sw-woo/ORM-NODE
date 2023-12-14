var express = require("express");
var router = express.Router();

// 예시로 사용할 가상의 회원 데이터 배열
var members = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  // ... (다른 회원 정보)
];

// 전체 회원목록 데이터 조회
router.get("/all", async (req, res) => {
  var members = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    // ... (다른 회원 정보)
  ];
  res.json(members);
});

// 신규 회원정보 데이터 등록처리
router.post("/create", async (req, res) => {
  const newMember = req.body;
  members.push(newMember);
  console.log(members);
  res.json({ message: "New member created successfully", member: newMember });
});

// 기존 회원정보 데이터 수정처리
router.post("/modify", async (req, res) => {
  const updatedMember = req.body;
  const memberId = updatedMember.id;

  // 회원 정보 수정 로직 (예: 배열에서 해당 회원 찾아서 수정)
  members = members.map((member) =>
    member.id === memberId ? updatedMember : member
  );

  res.json({ message: "Member updated successfully", member: updatedMember });
});

// 기존 회원정보 데이터 삭제처리
router.post("/delete", async (req, res) => {
  const memberId = req.body.id;

  // 회원 정보 삭제 로직 (예: 배열에서 해당 회원 제거)
  members = members.filter((member) => member.id !== memberId);

  res.json({ message: "Member deleted successfully", memberId });
});

// 단일 회원정보 데이터 조회
router.get("/:mid", async (req, res) => {
  const memberId = parseInt(req.params.mid);
  const member = members.find((member) => member.id == memberId);

  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ message: "Member not found" });
  }
});
module.exports = router;
