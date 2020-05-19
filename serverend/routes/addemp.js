const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtToken = 'secretToken';
const brcypt = require('bcryptjs');
const UserEmp = require('../models/Emp');

// const verifyToken = function (req, res, next) {
//     const token = req.header('x-auth-token');
//     if (!token) {
//         return res.status(400).json({
//             msg: "No Token"
//         });
//     }
//     try {
//         const decode = jwt.verify(token, jwtToken);
//         req.user = decode.user;
//         console.log(req.user);

//         next();
//     } catch (err) {
//         return res.status(401).json({
//             msg: 'Token is not valid'
//         });
//     }

// }

router.post('/',

    async (req, res) => {
        const {
            empid,
            name,
            age,
            email,
            address,
            mobile,
            password
        } = req.body;
       
        try {
            user = new UserEmp({
                empid,
                name,
                age,
                email,
                address,
                mobile,
                password
            });
            
            const salt = await brcypt.genSalt(10);
            user.password = await brcypt.hash(password, salt);
            
             await user.save();
            res.json({user});
            
            
            
                
        } catch (err) {
            console.log("CATCH ERROE");
            res.status(500).send('Server Error');

        }
    }
);

module.exports = router;