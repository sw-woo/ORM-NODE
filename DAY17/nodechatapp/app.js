var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

//레이아웃 페이지 사용하기 app.js 설정 부분
var expressLayouts = require("express-ejs-layouts");

//사용자 정의 라우팅
var channelRouter = require("./routes/channel");
var memberAPIRouter = require("./routes/memberAPI");
var channelAPIRouter = require("./routes/channelAPI");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//레이아웃 페이지 설정 부분
app.set("layout", "authLayout");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("layout extractMetas", true);
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//사용자 정의 라우팅 사용

app.use("/chat", channelRouter);
app.use("/api/member", memberAPIRouter);
app.use("/api/channel", channelAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
