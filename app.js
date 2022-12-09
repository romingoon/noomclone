import http from 'http';
import SocketIO from 'socket.io';
import express from 'express';
import path from 'path';

const app = express();
const httpServer = http.createServer(app);
const io = SocketIO(httpServer);

app.use(express.static(path.join(__dirname, 'src')));
const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('연결이 이루어졌습니다!');
})
const handleListen = () => console.log(`Listening on http://localhost:${PORT}`);
httpServer.listen(PORT, handleListen);
