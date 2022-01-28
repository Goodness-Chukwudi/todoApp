const express = require("express"),
	app = express(),
	toDoRoute = require("./routes/toDo"),
	mongoose = require("mongoose"),
	userRoute = require("./routes/user");

app.use(express.json());

//Route handlers
app.use("/to-dos", toDoRoute);
app.use("/users", userRoute);

// app.get("/users", (req, res) => {
// 	res.send("<h1>Hello World <br> List of users</h1>");
// });

// app.get("/users/user", (req, res) => {
// 	res.send("<h1>Hello World <br> User</h1>");
// });

// app.get("/users/ayo", (req, res) => {
// 	res.send("<h1>Hello World <br> Ayo</h1>");
// });

// Connect to DB
// mongoose
// 	.connect("mongodb://localhost/to-do", {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then((value) => {
// 		value && console.log("...Connected to DB");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

mongoose
	.connect("mongodb://localhost/to-do", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((value) => {
		value && console.log("...Connected to DB");
	})
	.catch((error) => {
		console.log(error);
	});

app.listen(5500, () => {
	console.log("Server is listening on port 5500");
});
