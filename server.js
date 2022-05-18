// Importing Modules
const express = require("express");

// Express Instance
const app = express();

// Initializing PORT
const PORT = 3000;

///////////////////// ROUTES
app.get("/", (req, res) => {
  res.send("Hello");
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
