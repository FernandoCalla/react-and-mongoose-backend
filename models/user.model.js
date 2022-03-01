var mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    user: String,
    email: String,
  },
);

const User = mongoose.model("User", UserSchema);

module.exports=User;