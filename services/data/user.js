const User = require("../../model/user");

const saveUser = async (user) => {
	return await new User(user).save();
};

module.exports = { saveUser };
