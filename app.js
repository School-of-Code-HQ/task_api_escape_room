const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const fs = require("fs");
const {marked} = require("marked");

const indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.disable("x-powered-by");
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res) {
    fs.readFile("./README.md", "utf-8", (err, result) => {
       res.send(marked(result.toString()));
    });
 });

app.use("/api", indexRouter);

module.exports = app;
