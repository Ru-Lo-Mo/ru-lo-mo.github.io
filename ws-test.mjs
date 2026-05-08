import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 1234 });

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.send("hello");
});

console.log("WebSocket server running on ws://127.0.0.1:1234");