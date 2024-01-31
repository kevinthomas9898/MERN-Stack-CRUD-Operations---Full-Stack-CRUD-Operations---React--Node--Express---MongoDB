const mongooge = require("mongoose");

// name, email, age
const UserSchema = new mongooge.Schema({
  name: String,
  email: String,
  age: Number,
});

const UserModel = mongooge.model("users", UserSchema);

module.exports = UserModel;
