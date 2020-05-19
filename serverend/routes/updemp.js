const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtToken = 'secretToken';
const UserEmp = require('../models/Emp');
const User = require('../models/User');

const verifyToken = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(400).json({
            msg: "No Token"
        });
    }
    try {
        const decode = jwt.verify(token, jwtToken);
        req.user = decode.user;
        console.log(req.user);

        next();
    } catch (err) {
        return res.status(401).json({
            msg: 'Token is not valid'
        });
    }

}

router.get('/',verifyToken,

    async (req, res) => {
        
       
        try {
            const emp = await UserEmp.findOne({user:req.user.id});

            if(!emp){
                res.status(400).json({
                    msg:'There is no employee'
                });
            }            

        } catch (err) {
            console.log("CATCH ERROE");
            res.status(500).send('Server Error');

        }
    }
);

module.exports = router;