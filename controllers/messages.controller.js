// Get message
function getMessages(req, res) {
  res.send("<ul><li>Hello Albert!</li></ul>");
}

// give msg to the server
function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
