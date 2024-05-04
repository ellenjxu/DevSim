const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();
const builder = new xml2js.Builder();
const path = require("path");

const app = express();
app.use(bodyParser.json());

app.use(express.static("public"));

const XML_FILE_PATH = "examples/scenes/pendulum.xml";

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/hello", (req, res) => {
	res.json({message: "Hello from the API!"});
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
