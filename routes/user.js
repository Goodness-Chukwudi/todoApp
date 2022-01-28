const express = require("express"),
	router = express(),
	userController = require("../controllers/user"),
	validateUser = require("../middlewares/validation/user");

router.post("/", validateUser, userController.createUser);

module.exports = router;
