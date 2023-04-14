const mongoose = require('../../config/db');
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

// const userSchema = new Schema({
//   // new schema of Grades
// });

userSchema.pre('save', async function() {
  try {
    var user = this;
    const salt = await(bcrypt.genSalt(10));
    const hashpass = await bcrypt.hash(user.password, salt);
    user.password = hashpass;
  } catch (error) {
      throw error;  
  }
})

// const User = mongoose.model('', userSchema);

// module.exports = User;
