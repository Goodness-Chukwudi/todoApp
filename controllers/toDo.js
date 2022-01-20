"use strict";
const saveTodoItem = require("../model/data/toDo");

const create = async (req, res) => {
	try {
		const toDoItem = req.body;
		console.log(toDoItem);
		toDoItem.startDate = new Date(toDoItem.startDate);
		toDoItem.deadline = new Date(toDoItem.deadline);

		const newItem = await saveTodoItem(toDoItem);
		console.log(newItem);
		res.status(200).send("Created");
	} catch (error) {
		console.log(error);
		res.status(500).send("Server error!");
	}
};

module.exports = { create };
