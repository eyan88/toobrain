const bcrypt = require('bcrypt');
const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');

const userCtrl = {
    registerUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'email already exists.' });
            }
            
            const hashedPass = await bcrypt.hash(password, 10);
            const newUser = new Users({
                email,
                password: hashedPass,
            });
            await newUser.save();
            res.json({ msg: 'sign up success' });
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            // find user in DB
            const user = await Users.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'user not found' });
            }
            // check if password match (decrypt)
            const matched = await bcrypt.compare(password, user.password);
            if (!matched) {
                return res.status(400).json({ msg: 'invalid password' });
            }
            
            // if user found and password match, tokenize and send as response
            const payload = { id: user._id, name: user.username };
            const token = jwt.sign(payload, process.env.REACT_APP_TOKEN_SECRET, {
                expiresIn: "1d",
            });
            res.json({ token });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = userCtrl;