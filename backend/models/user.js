// DB connection goes here
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/,
  },
  phone_number: { type: String, required: true, minlength: 9, maxlength: 10 }
});

userSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 5);
});

module.exports = mongoose.model("user", userSchema);
