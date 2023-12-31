var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var expressLayouts = require("express-ejs-layouts");

var sequelize = require("./models/index.js").sequelize;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var articleRouter = require("./routes/article");
var articlAPIRouter = require("./routes/articleAPI");

var app = express();

sequelize.sync();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//레이아웃 설정
app.set("layout", "layout"); //해당 노드앱의 모든(콘텐츠) 사용
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
app.use("/users", usersRouter);
app.use("/article", articleRouter);
app.use("/api/article", articlAPIRouter);

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
