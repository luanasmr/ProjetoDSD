const {Router} = require('express');
const router = Router();


const {getUsers, createUser} = require('../controles/indexcontroles.js');

router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router;
