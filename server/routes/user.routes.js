const { User } = require("../database/models");
const express = require("express");
const bcrypt = require("bcrypt");
const { verify } = require("jsonwebtoken");
const { verifyToken } = require("../utils/token");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { email, password} = req.body;

        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return  res.status(400).json({success: false, message: "User already exists", data:{}});
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        })

        delete newUser.dataValues.password;

        res.status(201).json({success: true, message: "User created successfully", data: newUser});
    } catch (error) {
        res.status(500).json({success: false, message: "Error creating a user", data:{}});
    }
});

router.put("/:id", verifyToken, async (req, res) => {
    try{
        const id = req.params.id;
        if (isNaN(id)) {
            return res.status(400).json({success: false, message: "Invalid user ID", data:{}});
        }
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({success: false, message: "User not found", data:{}});
        }

        const updatedUser = await user.update({...req.body});
        delete updatedUser.dataValues.password;
        res.status(200).json({success: true, message: "User updated successfully", data: updatedUser});
    } catch (error) {
        res.status(500).json({success: false, message: "Error updating user", data:{}});
    }
});

module.exports = router;