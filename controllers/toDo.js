"use strict";

const create = (req, res) => {
	const toDoItem = req.body;

	res.status(200).send("Created");
};

module.exports = { create };
