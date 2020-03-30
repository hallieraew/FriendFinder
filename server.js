var express = require("express");

var app = express();
var PORT = 8000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});

module.exports = app;