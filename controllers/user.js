"use strict";

const { saveUser } = require("../services/data/user");

const createUser = async (req, res) => {
	const newUser = await saveUser(req.body);
	if (!newUser) return res.status(500).send("internal server error");
	res.status(200).send(newUser);
};

module.exports = { createUser };
