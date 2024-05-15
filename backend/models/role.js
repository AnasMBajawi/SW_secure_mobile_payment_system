const mongoose = require("mongoose")

const roleScchema = new mongoose.Schema({
    role : {type : String, required : true},
    permission : [String]
})

module.exports = mongoose.model("role", roleScchema)