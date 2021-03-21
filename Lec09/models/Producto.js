const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productosSchema= new Schema({
    descripcion:{
        type:String,
        trim:true
    },
    cantidad:{
        type:String,
        trim:true
    },
    stock:{
        type:Number,
        trim:true
    },
    talla:{
        type:String,
        trim:true
    }
});

module.exports = mongoose.model('Producto',productosSchema);
