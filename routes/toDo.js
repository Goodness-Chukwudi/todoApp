"use strict";

const express = require("express"),
	router = express(),
	toDoController = require("../controllers/toDo");

router.post("/create", toDoController.createTodo);
router.get("/", toDoController.retrieveToDos);
router.delete("/:id", toDoController.deleteTodo);
router.put("/:id", toDoController.updateTodo);

module.exports = router;
