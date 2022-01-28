const Joi = require("joi");

const validateUser = (req, res, next) => {
	const userSchema = Joi.object({
		username: Joi.string().max(100).required(),
		password: Joi.string().alphanum().max(100).required(),
		confirmPassword: Joi.ref("password"),
		email: Joi.string().email().max(500).required(),
		phone: Joi.string().max(20),
		todos: Joi.array().items(Joi.string().alphanum().length(24)),
	});

	const { error } = userSchema.validate(req.body);

	if (error) return res.status(400).send(error.details[0].message);

	next();
};

module.exports = validateUser;
