
const express = require("express");
const bodyParser = require("body-parser");

const api = express();

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

api.use(express.static("public"));

api.listen(6800, () => console.log("This one's on port 6800"));


const products = require("./data/products.js");
const customers = require("./data/customers.js");


api.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});


api.get("/pieType", (req, res) => {
	const pies = [];
	products.forEach(each => {
		pies.push(each.type);
	})
	return res.send(pies);
});


api.post("/isCustomer", (req, res) => {
	let customerMatch = [];
	customers.forEach(patron => {
		if (patron.name.charAt(0) === req.body[0].toUpperCase()) {
			customerMatch.push(patron.name);
		}
	});
	return res.send(customerMatch);
});


api.post("/addCustomer", (req, res) => {
	return res.send("Added: " + req.body.name);
});


api.post("/pieOrder", (req, res) => {
	let confirmation = "Something went wrong.";
	if (!(Object.getOwnPropertyNames(req.body).length === 0)) {
		confirmation = "This order is received.";
	}
	return res.send(confirmation);
});

