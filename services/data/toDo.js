const ToDoItem = require("../../model/toDoItem");

const saveTodoItem = async (value) => {
	try {
		const newTodoItem = new ToDoItem(value);
		const result = await newTodoItem.save();

		return result;
	} catch (error) {
		console.error(error);
	}
};

const retrieveToDos = async (id = null) => {
	if (id) return await ToDoItem.findById(id);
	return await ToDoItem.find();
};

const removeTodo = async (id) => {
	return await ToDoItem.findByIdAndDelete(id);
};

const modifyTodo = async (id, value) => {
	//retrieve todoItem
	const toDoItem = await ToDoItem.findById(id);

	//Update the changes
	toDoItem.title = value.title;
	toDoItem.description = value.description;
	toDoItem.startDate = value.startDate;
	toDoItem.deadline = value.deadline;
	toDoItem.isDone = value.isDone;
	//save
	const updateItem = await toDoItem.save();
	return updateItem;
};

module.exports = { saveTodoItem, retrieveToDos, removeTodo, modifyTodo };
