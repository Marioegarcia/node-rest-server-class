const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.notasPath = '/api/notas'

        //Middlewares
        this.middlewares()


        //Rutas de aplicacion
        this.routes();

        this.conectarDB();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.notasPath, require('../routes/notas'))

    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`
            ****************************************************
            ****************************************************
                Servidor corriendo en el puerto: ${process.env.PORT}
            ****************************************************
            ****************************************************`
            );
        })
    }

}




module.exports = Server;