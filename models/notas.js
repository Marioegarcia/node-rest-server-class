const { type } = require('express/lib/response');
const { Schema, model } = require('mongoose');

const NotasSchema = Schema({
    nota: {
        type: String,
        required: [true, 'El campo nota es obligatorio']
    },
    autor:{
        type: String,
        required: [true, 'El campo autor es obligatorio']
    },
    categoria:{ type:String,required: [true, 'El campo categoria es obligatorio'] } ,
});





module.exports = model( 'Notas', NotasSchema );