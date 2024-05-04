import {resetSimulation} from "./examples/mujocoUtils.js";

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

let XML_FILE_PATH = "examples/scenes/pendulum.xml";

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/reset", (req, res) => {
	// Resets sim to initial state (same as pressing reset simulation button)
	resetSimulation();
	res.json({message: "Simulation reset"});
});

app.get("/api/currentScene", (req, res) => {
	// Gets current scene (ex. humanoid)
	res.json({scene: XML_FILE_PATH.split("/").pop().replace(".xml", "")});
});

app.post("/api/setScene", (req, res) => {
	// Sets new scene, then rerenders (ex. humanoid -> pendulum)
	const {scene} = req.body;
	XML_FILE_PATH = "examples/scenes/" + scene + ".xml";
	res.json({message: "Scene set to " + scene});
});

app.post("/api/getState", (req, res) => {
	// TODO
});

app.post("/api/setParams", (req, res) => {
	// req is arbitrary json with {"param": value, ...}
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
