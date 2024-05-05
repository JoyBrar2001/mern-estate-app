const User = require("../models/user.models");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try{
        await newUser.save();
        res.status(201).json({ message: `${username} user craeted successfully.` })
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = signup;