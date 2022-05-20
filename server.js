// Importing Modules
const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.route");

// Express Instance
const app = express();

// Initializing PORT
const PORT = 3000;

// Middleware ////////////////
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

// ROUTING ///////////////////
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
