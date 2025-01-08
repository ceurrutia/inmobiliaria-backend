const express = require('express');
const { getAllUsers, loginUser, getUserById, updateUser, deleteUser, registerUser } = require('../controllers/userPropertyController');
const router = express.Router();

//Rutas User
router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.put('/:id', updateUser); 
router.delete('/:id', deleteUser); 

//Login
router.post('/login', loginUser); 
router.post('/register', registerUser);
module.exports = router;
