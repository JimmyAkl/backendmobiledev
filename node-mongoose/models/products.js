const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true

    },
    description: {
        type: String,
        required: true
    }


},{
    timestamps: true
});

var Products = mongoose.model('Product', productSchema);

module.exports = Products;