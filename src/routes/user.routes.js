const express = require('express');
const UserRoutes = express.Router();
const {userverifyToken} = require('../helpers/user.verifytoken')

const {
   registerUser,
   loginUser,
   // getAllUser,
   // getUser,
   updateUser,
   deleteUser,
   updatePassword


} = require('../controller/user.controller');

UserRoutes.post('/register-user' , registerUser);
UserRoutes.post('/login-user' ,loginUser );
// UserRoutes.get('/get-all-user' , userverifyToken,  getAllUser);
// UserRoutes.get('/get-user' , userverifyToken , getUser);
UserRoutes.put('/update-user' , userverifyToken, updateUser);
UserRoutes.delete('/delete-user' , userverifyToken, deleteUser);
UserRoutes.put('/update-password' , userverifyToken, updatePassword);



module.exports = UserRoutes;