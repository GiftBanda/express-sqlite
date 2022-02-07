const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.get('/', userCtrl.getUsers);
router.post('/create', userCtrl.createUser);
router.get('/single/:id', userCtrl.getSingleUser);
router.put('/update/:id', userCtrl.updateUser);
router.delete('/remove/:id', userCtrl.deleteUser);

module.exports = router;
