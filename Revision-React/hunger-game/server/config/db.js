const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://pooja:pooja@cluster0.9czsg.mongodb.net/hunger_game"
  );
};
