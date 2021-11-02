const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.initMiddlewares();

        // Rutas de mi aplicación
        this.configRoutes();
    }

    initMiddlewares() {

        // Manejo de CORS
        this.app.use(cors());

        // Lectura y parseo del body para formato JSON (va a intentar serializar el json de los bodys de las peticiones)
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));
    }

    configRoutes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    startListening() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto: `, this.port);
        });
    }



}


module.exports = Server;