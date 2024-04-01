const mongoose = require("mongoose");
const URL ="mongodb+srv://sanyam:Sanyam%407820@cluster0.h0ddjdt.mongodb.net/PAYTM";

async function connectDatabase() {
  try {
    await mongoose.connect(URL);
    console.log("Databse connected Successfully");
  } catch (e) {
    console.log("Error while connecting database", e);
  }
}

connectDatabase();

//user schema

const Userschema = mongoose.Schema({
  email:String,
  firstname: String,
  lastname: String,
  password: String,
});

const User = mongoose.model("User", Userschema);

const accounstschema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  balance: {
    type: Number,
  },
});

const Account = mongoose.model("Account", accounstschema);

module.exports = {
  User,
  Account,
};
