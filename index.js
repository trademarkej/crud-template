const express = require("express");

const server = express();

const PORT = 5000;

// Start by running the following command in the terminal:
// npm run server

server.get('/', (req, res) => {
    res.json({ hello: "world" });
});

server.listen(5000, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT}`);
});