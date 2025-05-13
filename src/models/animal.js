const mongoose = require("mongoose");
const { stringify } = require("querystring");
const animalSchema = mongoose.Schema({
nombre: {
    type: String,
    required: true,
},
edad: {
    type: Number,
    required: true,
},
tipo:{
    type: String,
    required: true,
},
fecha:{
    type: Date,
    required: false,
}
});
module.exports = mongoose.model("Animal", animalSchema);