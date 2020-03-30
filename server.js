var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});

module.exports = ('server.js');