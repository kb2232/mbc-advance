const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberLeaderSchema = new Schema(
  {
    firstname:{
      type:String,
      required:true
      },
    lastname:{
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
mongoose.model('mbc_leaders',memberLeaderSchema);