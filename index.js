const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

const PORT = 5000;

let channels = [];

let lessons = [];

// Start by running the following command in the terminal:
// npm run server

server.get('/', (req, res) => {
    res.json({ hello: "world" });
});

/***** Channels Routes *****/
server.get("/api/channels", (req, res) => {
    res.status(200).json(channels);
});

server.get("/api/channels/:id", (req, res) => {
    const { id } = req.params;
    const found = channels.find(channel => channel.id === id);

    if (found) {
        res.status(200).json(found);
    } else {
        res.status(404).json({ message: "channel does not exist" });
    }
});

server.post('/api/channels', (req, res) => {
    const channelInfo = req.body;
    channelInfo.id = shortid.generate();
    channels.push(channelInfo);
    res.status(201).json(channelInfo);
});

server.delete("/api/channels/:id", (req, res) => {
    const { id } = req.params;

    const deleted = channels.find(channel => channel.id === id);
    if (deleted) {
        channels = channels.find(channel => channel.id !== id);
        res.status(200).json(deleted);
    } else {
        res
            .status(404)
            .json({ message: "Channel you are looking for does not exist" });
    }
});

/***** Lessons Routes *****/
server.get("/api/lessons", (req, res) => {
    res.status(200).json(lessons);
});

server.get("/api/lessons/:id", (req, res) => {
    const { id } = req.params;
    const found = lessons.find(lesson => lesson.id === id);

    if (found) {
        res.status(200).json(found);
    } else {
        res.status(404).json({ message: "lesson does not exist" });
    }
});

server.post('/api/lessons', (req, res) => {
    const lessonInfo = req.body;
    lessonInfo.id = shortid.generate();
    lessons.push(lessonInfo);
    res.status(201).json(lessonInfo);
});

server.delete("/api/lessons/:id", (req, res) => {
    const { id } = req.params;

    const deleted = lessons.find(lesson => lesson.id === id);
    if (deleted) {
        lessons = lessons.find(lesson => lesson.id !== id)
        res.status(200).json(deleted);
    } else {
        res
            .status(404)
            .json({ message: "Lesson you are looking for does not exist" });
    }
});

server.listen(5000, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT}`);
});