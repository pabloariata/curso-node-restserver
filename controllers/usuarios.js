const { response, request } = require('express')


// igualamos res a response y req a requerst para obtener el tipado en el IDE, solo para eso
const usuariosGet = (req = request, res = response) => {

    const query = req.query;
    // desestructurando lo que necesitamos: 
    const { q, nombre = 'No especifico Nombre', apikey, page = 1, limit = 10 } = req.query;

    // console.log(query);

    res.json({
        // ok: true,
        msg: 'get API - desde controlador',
        q,
        nombre,
        apikey,
        query,
        page,
        limit
    })
}

const usuariosPost = (req, res) => {

    const body = req.body;
    const { nombre, edad } = req.body;

    console.log(body);

    res.status(201).json({
        msg: 'post API - desde controlador',
        nombre,
        edad,
        body
    })
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    if (id) {
        res.status(200).json({
            msg: 'put API - desde controlador',
            id
        })
    } else {
        res.status(400).json({
            msg: 'No se especifico Id de usuario'
        });
    }

}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - desde controlador'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - desde controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}