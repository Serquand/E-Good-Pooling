"use strict";
const http = require("http");
require("dotenv").config();
const expressApp = require("./app");
const PORT = process.env.PORT || 5000;
const server = http.createServer(expressApp);
server.listen(PORT, () => {
    console.clear();
    console.log("Now listening on port " + PORT);
});
