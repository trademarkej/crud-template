const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

const PORT = 5000;

const channels = [];

const lessons = [];

// Start by running the following command in the terminal:
// npm run server

server.get('/', (req, res) => {
    res.json({ hello: "world" });
});

server.post('/api/channels', (req, res) => {
    const channelInfo = req.body;
    channelInfo.id = shortid.generate();
    channels.push(channelInfo);
    res.status(201).json(channelInfo);
});

server.listen(5000, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT}`);
});