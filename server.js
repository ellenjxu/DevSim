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

app.get("/api/hello", (req, res) => {
	res.json({message: "Hello from the API!"});
});

// get current scene
app.get("/api/currentScene", (req, res) => {
	res.json({scene: XML_FILE_PATH.split("/").pop().replace(".xml", "")});
});
// set current scene
app.post("/api/setScene", (req, res) => {
	const {scene} = req.body;
	XML_FILE_PATH = "examples/scenes/" + scene + ".xml";
	res.json({message: "Scene set to " + scene});
});

// GET request to fetch current state
app.get("/api/state", (req, res) => {
	fs.readFile(XML_FILE_PATH, (err, data) => {
		if (err) {
			res.status(500).send("Error reading XML file");
			return;
		}
		parser.parseString(data, (err, result) => {
			if (err) {
				res.status(500).send("Error parsing XML file");
				return;
			}
			// Extract and send necessary data, this is a placeholder
			res.json({
				position: {x: 0, y: 0, z: 1}, // Example static data
				timestep: 0.01, // Example static data
			});
		});
	});
});

// POST request to modify the pendulum parameters
app.post("/api/pendulum", (req, res) => {
	const {mass, length, otherParams} = req.body;
	fs.readFile(XML_FILE_PATH, (err, data) => {
		if (err) {
			res.status(500).send("Error reading XML file");
			return;
		}
		parser.parseString(data, (err, result) => {
			if (err) {
				res.status(500).send("Error parsing XML file");
				return;
			}
			// Modify the XML based on input parameters
			// This is a placeholder: actual implementation will depend on XML structure and parameters
			// For example, changing the mass:
			// result.mujoco.worldbody[0].body[0].geom[0].$.mass = mass;

			const xml = builder.buildObject(result);
			fs.writeFile(XML_FILE_PATH, xml, (err) => {
				if (err) {
					res.status(500).send("Error writing XML file");
					return;
				}
				res.send("Pendulum updated successfully");
			});
		});
	});
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
