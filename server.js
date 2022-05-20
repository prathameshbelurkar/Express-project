// Importing Modules
const express = require("express");

// Express Instance
const app = express();

// Initializing PORT
const PORT = 3000;

// Array Friends //////////////////
const friends = [
  {
    id: 0,
    name: "Sir Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

// Middleware ////////////////
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

// ROUTING ///////////////////
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);

  res.json();
});

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Albert!</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});
/////////////////////

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
