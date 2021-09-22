const {Router} = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser, createHist, deleteHist, getHist,getHistById,updateHist  } = require('../controles/indexcontroles.js');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);
router.get('/historico', getHist);
router.get('/historico/:idhist', getHistById);
router.post('/historico', createHist);
router.put('/historico/:idhist', updateHist)
router.delete('/historico/:idhist', deleteHist);

module.exports = router;
