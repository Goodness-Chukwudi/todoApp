const ToDoItem = require("../toDoItem");

const saveTodoItem = async (value) => {
	try {
		const newTodoItem = new ToDoItem(value);
		const result = await newTodoItem.save();
		return result;
	} catch (error) {
		console.error(error);
	}
};

module.exports = saveTodoItem;
