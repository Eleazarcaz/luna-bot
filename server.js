var express = require("express");
var app = express();

//SET PORT
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + "/web"));

//ROUTES
app.get("/", function(req, res) {
	res.render("index");
});

app.listen(port, function() {
	console.log("Web App Running.");
});