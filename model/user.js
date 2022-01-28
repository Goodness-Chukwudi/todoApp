const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: { type: String, maxlength: 100, require: true },
	password: { type: String, maxlength: 100, require: true },
	email: { type: String, maxlength: 100, require: true },
	phone: { type: String, maxlength: 20 },
	todos: Array,
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
