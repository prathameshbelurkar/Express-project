const path = require("path");

// Get message
function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Elon Musk",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );
}

// give msg to the server
function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
