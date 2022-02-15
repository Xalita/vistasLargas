const mongoose = require ('mongoose');

const formSchema = mongoose.Schema({

  name: {type: String, require: true},
  tel: {type: Number, require: true},
  mail: {type: String, require: true},
  msg: {type: String, require: true}
})

module.exports = mongoose.model ('Form', formSchema);
