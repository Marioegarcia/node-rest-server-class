const {response, request} = require('express');

const Notas = require('../models/notas');

const notasPost = async(req, res = response) => {
    
    const { quote, autor, categoria } = req.body;

    const cita = new Notas({ nota:quote, autor, categoria });

   
    // // Guardar en BD
    await cita.save();


    res.json({
        msg: 'Frase guardada correctamente',
        cita
    })
}

const notasGet = async(req = request, res = response) => {
    
    // db.users.aggregate(
    //     [ { $sample: { size: 3 } } ]
    //  )
    // const cita = await Notas.findOne();
    const cita = await Notas.aggregate([ { $sample: { size: 1 } } ])
    

    res.json({
        cita:cita[0]
    });
}




module.exports = {
   notasPost,
   notasGet
}