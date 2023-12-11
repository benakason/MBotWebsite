const express = require("express");
const http = require("http");
const WebSocket = require("websocket");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

// Use cors middleware
app.use(cors());

const wsServer = new WebSocket.server({
  httpServer: server,
});

wsServer.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  console.log("WebSocket connection accepted.");

  // Handle messages from clients
  connection.on("message", (message) => {
    if (message.type === "utf8") {
      const data = message.utf8Data;
      console.log("Received message:", data);

      // Broadcast the message to all connected clients
      wsServer.connections.forEach((client) => {
        if (client !== connection && client.connected) {
          client.sendUTF(data);
        }
      });
    }
  });

  // Handle client disconnects
  connection.on("close", (reasonCode, description) => {
    console.log(`Client has disconnected: ${description}`);
  });
});

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
