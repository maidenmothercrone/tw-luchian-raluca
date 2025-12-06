const express = require('express'); 
const bcrypt = require('bcrypt');
const { User } = require("../database/models");
const jwt = require('jsonwebtoken');
const { isValidToken } = require('../utils/token');
const router = express.Router();

router.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });

        if (!existingUser) {
            return res.status(400).json({success: false, message: "User not found", data:{}});
        }

        const isValidPassword = bcrypt.compareSync(password, existingUser.dataValues.password);

        if (!isValidPassword) {
            return res.status(400).json({success: false, message: "Invalid password", data:{}});
        }
        const token = jwt.sign({id: existingUser.id, email: existingUser.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({success: true, message: "Login successful", data: { token }});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Error logging in", data:{}});
    }
});

router.post("/check", verifyToken,async (req, res) => {
    res.status(200).json({success: true, message: "Token is valid", data:{}});
});

module.exports = router;