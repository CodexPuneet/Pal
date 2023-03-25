const mongoose= require("mongoose");


const assignSchema= mongoose.Schema({
userId:String,
 assigne: {
  person1: String,
  person2: String,
  person3: String,
},
 
})

const assignModel= mongoose.model("assign", assignSchema);
module.exports= {
    assignModel
}
