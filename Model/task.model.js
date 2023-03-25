const mongoose= require("mongoose");
const dateFormat = require('../Utils/dateFormat');

const taskSchema= mongoose.Schema({
  task:{
    type: String,
  
 },
 assigne: {
  type: String
},
 createdAt: {
   type: Date,
   default: Date.now(),
   get: (timestamp) => dateFormat(timestamp),
 },
 date: {
   type: String,
   required: true
 },
 status: {
   type: Boolean,

 }
})

const taskModel= mongoose.model("task", taskSchema);
module.exports= {
  taskModel
}
