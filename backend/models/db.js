const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log(" db connection succseed");
  })
  .catch((err) => {
    console.log(err);
  });