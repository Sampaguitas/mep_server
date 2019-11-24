// const express = require('express');
const passport = require('passport');
const fault = require('../utilities/errors');

module.exports = (req, res, next) => {
    passport.authenticate(
        'jwt',
        { session: false }, (err, user) => {
            if (err) return res.status(400).json({
                message: fault(0001)
                //"0001": "Something went wrong",
            });
            if (!user) return res.status(400).json({
                message: fault(0000)
                //"0000": "Unauthorized",
            });
            next()
        }
    )
    (req, res, next)
}