const mongoose = require("mongoose");

// const toDo = {
// 	title: "task 1",
// 	description: "read about http status codes",
// 	startDate: "12/01/2022",
// 	deadline: "30/01/2022",
// };
const toDoItem = new mongoose.Schema({
	title: { type: String, required: true, maxlength: 500 },
	description: { type: String, required: true, maxlength: 1000 },
	startDate: {
		type: Date,
		// The dates of the first and last episodes of
		// Star Trek: The Next Generation
		min: "2022-09-28",
		max: "1994-05-23",
	},
});
