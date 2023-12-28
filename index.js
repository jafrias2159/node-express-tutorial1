const express = require('express');
const shortid = require('shortid');

const server = express();
const PORT = 5000;

const channels = [];

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ hello: 'World' });
});

server.get('/hello', (req, res) => {
  res.json({ hello: 'Future senior software developer' });
});

server.post('/api/channels', (req, res) => {
  const channelInfo = req.body;
  channelInfo.id = shortid.generate();
  channels.push({ ...channelInfo });
  res.status(201).json(channelInfo);
});

server.listen(PORT, () => {
  console.log(`*** Server Running on http://localhost:${PORT}`);
});
