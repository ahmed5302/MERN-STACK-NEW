const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtToken = 'secretToken';
const User = require('../models/User');
const brcypt = require('bcryptjs');
const UserEmp = require('../models/Emp');


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

router.get('/', verifyToken,
    async (req, res) => {
        try {
            const userList = await UserEmp.findById(req.user.id).select('-password');
            res.json(userList);
            

        } catch (err) {
            console.log("Failure");
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

router.post('/',

    async (req, res) => {

        
        const {
            name,
            password
        } = req.body;
        try {
            let user = await UserEmp.findOne({
                name
            });
            if (!user) {
                return res.status(400).json({
                    errors: [{
                        msg: 'Invalid credientials'
                    }]
                });
            }

            const passCom = await brcypt.compare(password,user.password);
            if(!passCom){
                return res.status(400).json({
                    errors: [{
                        msg: 'Invalid credientials'
                    }]
                });
            }
            console.log(user);
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, jwtToken, {
                    expiresIn: 36000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log("CATCH ERROE");
            res.status(500).send('Server Error');

        }
    }
);

module.exports = router;