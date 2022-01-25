const mongoose = require("mongoose");

const toDoItem = new mongoose.Schema({
	title: { type: String, required: true, maxlength: 500 },
	description: { type: String, required: true, maxlength: 1000 },
	startDate: {
		type: String,
		required: true,
	},
	deadline: { type: String, required: true },
	isDone: { type: Boolean, required: true },
});

const ToDoItem = new mongoose.model("ToDoItem", toDoItem);

module.exports = ToDoItem;
