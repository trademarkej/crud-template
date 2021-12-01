const express = require("express");

const server = express();

const PORT = 5000;

server.listen(5000, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT}`);
});