"use strict";

const express = require("express"),
	router = express(),
	toDoController = require("../controllers/toDo"),
	validateTodoItem = require("../middlewares/validation/todoItem");

router.post("/create", validateTodoItem, toDoController.createTodo);
router.get("/", toDoController.retrieveToDos);
router.get("/:id", toDoController.retrieveToDo);
router.delete("/:id", toDoController.deleteTodo);
router.put("/:id", validateTodoItem, toDoController.updateTodo);

module.exports = router;
