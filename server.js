// Importing Modules
const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.route");

// Express Instance
const app = express();

// Configuring Express with Template Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Initializing PORT
const PORT = 3000;

// Middleware ////////////////
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "My friends are very Clever",
    caption: "Let's go Skiing!",
  });
});

app.use("/friends", friendsRouter);

app.use("/messages", messagesRouter);

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
