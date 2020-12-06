const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

router.post('/', (req, res) => {
    if (!req.user.isAdmin) {
        res.status(400).json({message: 'You are not allowed to create users.'});
    } else if (!req.body.userName) {
        res.status(400).json({message: 'Username is missing.'});
    } else if (!req.body.name) {
        res.status(400).json({message: 'Name is missing.'});
    } else if (!req.body.email) {
        res.status(400).json({message: 'Email address is missing.'});
    } else if (!req.body.password) {
        res.status(400).json({message: 'Password is missing.'});
    } else {
        User.findOne({$or: [
            {userName: req.body.userName},
            {name: req.body.name},
            {email: req.body.email.toLowerCase()}
        ]}).then(user => {
            if (user) {
                return res.status(400).json({ message: 'User already exists.' });
            } else {
                const newUser = new User({
                    userName: req.body.userName,
                    name: req.body.name,
                    email: req.body.email.toLowerCase(),
                    password: req.body.password,
                    isAdmin: req.body.isAdmin,
                });
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        return res.status(400).json({ message: 'Error generating salt.' });
                    } else {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) {
                                return res.status(400).json({ message: 'Error creating the password hash.' });
                            } else {
                                newUser.password = hash;
                                newUser
                                .save()
                                .then( () => res.status(200).json({message: 'New user whas successfuly created.'}))
                                .catch( () => res.status(400).json({message: 'Could not created the new user.'}));
                            }
                        });
                    }
                });
            }
        });
    }
});

module.exports = router;