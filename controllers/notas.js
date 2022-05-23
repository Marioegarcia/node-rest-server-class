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
    let cita = [];
    const {sentimiento} = req.body

    // if (sentimiento) {
    //     console.log('sentimiento real');
    //     cita = await Notas.aggregate([ { $match: { categoria: sentimiento } } ])
    // }
    
    if (cita.length == 0) {
        console.log('cita.lengiut');
        cita = await Notas.aggregate([ { $sample: { size: 10 } } ])
    }
   
    
    
    
    // const cita = await Notas.aggregate.

    res.json({
        cita:cita,
        sentimiento
    });
}




module.exports = {
   notasPost,
   notasGet
}