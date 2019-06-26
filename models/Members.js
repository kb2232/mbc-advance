const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    firstname:{
      type:String,
      required:true
      },
    cellphone:{
    type:String,
    required:true
    },
    email:String,
    createdAt:{
      type:Date,
      default:Date.now
    }
});
mongoose.model('menbychoice',usersSchema);