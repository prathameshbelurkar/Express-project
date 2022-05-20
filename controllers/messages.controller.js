const path = require("path");

// Get message
function getMessages(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
  // res.send("<ul><li>Hello Albert!</li></ul>");
}

// give msg to the server
function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
