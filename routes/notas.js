const {Router} = require('express');
const { notasPost,notasGet } = require('../controllers/notas');



const router = Router();

router.get('/', notasGet )

router.post('/', notasPost )

router.put('/:id',)

router.patch('/', )

// router.delete('/', usuariosDelete)


module.exports = router;