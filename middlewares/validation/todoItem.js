"use strict";
const Joi = require("joi");

const validateTodoItem = (req, res, next) => {
	const todoItemSchema = Joi.object({
		title: Joi.string().max(500).required(),
		description: Joi.string().max(1000).required(),
		startDate: Joi.date().required(),
		deadline: Joi.date().required(),
		isDone: Joi.boolean().required(),
	});

	const { value, error } = todoItemSchema.validate(req.body, {
		convert: false,
	});
	if (error) return res.status(400).send(error.details[0].message);

	next();
};

module.exports = validateTodoItem;
