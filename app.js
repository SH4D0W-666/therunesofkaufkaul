const express = require("express");
const app = express();
const port = 8080;

//https://therunesofkaufkaul.herokuapp.com/ | https://git.heroku.com/therunesofkaufkaul.git

app.get("/", (req, res) => {
	res.send("Hello Heroku");
})

app.listen(process.env.PORT || port, () => {
	console.log("listening 8080...");
});