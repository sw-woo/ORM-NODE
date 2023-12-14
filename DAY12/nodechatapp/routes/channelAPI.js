var express = require("express");
var router = express.Router();

let channelList = [
  { channel_id: 1, channel_name: "채널1", channel_desc: "채널1 설명" },
  { channel_id: 2, channel_name: "채널2", channel_desc: "채널2 설명" },
  { channel_id: 3, channel_name: "채널3", channel_desc: "채널3 설명" },
];

// 전체 채널 목록 조회
router.get("/all", (req, res) => {
  res.json(channelList);
});

// 새로운 채널 등록
router.post("/create", (req, res) => {
  const newChannel = req.body;
  channelList.push(newChannel);
  res.json(newChannel);
});

// 채널 정보 수정
router.post("/modify", (req, res) => {
  const updatedChannel = req.body;
  const channelId = updatedChannel.channel_id;

  channelList = channelList.map((channel) =>
    channel.channel_id === channelId ? updatedChannel : channel
  );

  res.json({
    message: "Channel updated successfully",
    channel: updatedChannel,
  });
});

// 채널 삭제
router.post("/delete", (req, res) => {
  const channelId = req.body.channel_id;
  channelList = channelList.filter(
    (channel) => channel.channel_id != channelId
  );
  res.json({
    message: "Channel deleted successfully",
    deletedChannelId: channelId,
  });
});

// 단일 채널 정보 조회
router.get("/:cid", (req, res) => {
  const channelId = parseInt(req.params.cid);
  const channel = channelList.find((c) => c.channel_id === channelId);

  if (channel) {
    res.json(channel);
  } else {
    res.status(404).json({ message: "Channel not found" });
  }
});

//-------------------
// var channelList = [
//   { channel_id: 1, channel_name: "채널1" },
//   { channel_id: 2, channel_name: "채널2" },
//   { channel_id: 3, channel_name: "채널3" },
// ];
// /* GET 데이터 보내주는기능 */
// router.get("/all", async (req, res) => {
//   //DB에서 저장된 모든 채널목록 데이터를 제공하는 RESTAPI 라우팅메소드

//   //res.json(JSON데이터 전달)
//   res.json(channelList);
// });

// /* GET 데이터 보내주는기능 쿼리스트링 방식 주소 체계
// - localhost:3000/api/channel?cid=1
// */
// router.get("/", async (req, res) => {
//   //DB에서 저장된 모든 채널목록 데이터를 제공하는 RESTAPI 라우팅메소드

//   //STEP1: URL에서 채널고유번호를 추출한다.
//   var channelId = req.query.id;

//   var channel = { channel_id: channelId, channel_name: "채널1" };

//   //res.json(JSON데이터 전달)
//   res.json(channel);
// });

// router.post("/create", async (req, res) => {
//   var channel_id = req.body.channel_id;
//   var channelName = req.body.channel_name;
//   var channelDescription = req.body.channel_desc;

//   const channel = {
//     channel_id,
//     channel_name: channelName,
//     channel_desc: channelDescription,
//   };
//   channelList.push(channel);
//   res.json(channel);
// });

// // channel data 데이터 수정처리
// router.post("/modify", async (req, res) => {
//   const updatedChannel = req.body;
//   const channelId = updatedChannel.channel_id;

//   // 회원 정보 수정 로직 (예: 배열에서 해당 회원 찾아서 수정)
//   channelList = channelList.map((channel) => {
//     channel.id == channelId ? updatedChannel : channel;
//   });

//   res.json({ message: "channel updated successfully", channel: channelList });
// });

// /* GET 데이터 보내주는기능  파라메터 방식 -와일드카드 주소 체계
// //파라메터방식/ 와일드카드방식으로 정의된 라우팅 메소드는 제일 밑으로 보내야합니다.
// */
// router.get("/:cid", async (req, res) => {
//   //DB에서 저장된 모든 채널목록 데이터를 제공하는 RESTAPI 라우팅메소드

//   //STEP1: URL에서 채널고유번호를 추출한다.
//   var channelId = req.params.id;

//   var channel = { channel_id: channelId, channel_name: "채널1" };

//   //res.json(JSON데이터 전달)
//   res.json(channel);
// });

module.exports = router;
