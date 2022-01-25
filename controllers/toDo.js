"use strict";
const {
	saveTodoItem,
	retrieveToDos: retrieve,
	removeTodo,
	modifyTodo,
} = require("../services/data/toDo");

const createTodo = async (req, res) => {
	try {
		const toDoItem = req.body;
		const newItem = await saveTodoItem(toDoItem);

		//if no newItem log error
		if (!newItem) return res.status(500).send("Unable to create task!");
		res.status(200).send("Created");
	} catch (error) {
		console.log(error);
		res.status(500).send("Server error!");
	}
};

const retrieveToDos = async (req, res) => {
	const toDos = await retrieve();
	if (!toDos) return res.status(404).end("Todo items not found");
	res.status(200).send(toDos);
};

const retrieveToDo = async (req, res) => {
	const toDo = await retrieve(req.params.id);
	if (!toDo) return res.status(404).end("Todo item not found");
	res.status(200).send(toDo);
};

const deleteTodo = async (req, res) => {
	const id = req.params.id;
	const result = await removeTodo(id);
	if (!result) {
		res.statusMessage = "A todo item with the specified id was not found";
		return res.status(404).end();
	}

	res.status(200).send(result);
};

const updateTodo = async (req, res) => {
	const id = req.params.id;
	const value = req.body;

	const result = await modifyTodo(id, value);
	if (!result) {
		res.statusMessage = "A todo item with the specified id was not found";
		return res.status(404).end();
	}

	res.status(200).send(result);
};

module.exports = {
	createTodo,
	retrieveToDos,
	retrieveToDo,
	deleteTodo,
	updateTodo,
};
