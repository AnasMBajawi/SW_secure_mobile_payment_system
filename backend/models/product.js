const mongoose =  require("mongoose")

const productSchema = new mongoose.Schema({
    name : {type : String, required : true, },
    catagory : {type : String, required : true},
    description : {type : String }, 
    images : [], 
    price : {type: Number, required : true},
    user : {type : mongoose.Schema.Types.ObjectId, ref : "user"}
})

module.exports = mongoose.model("product", productSchema)