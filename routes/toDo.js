"use strict";

const express = require("express"),
	router = express(),
	toDoController = require("../controllers/toDo");

router.post("/", (req, res) => {
	console.log("to dos");
	res.status(200).send("Success");
});

router.post("/create", toDoController.create);

module.exports = router;
