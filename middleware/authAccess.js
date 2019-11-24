// const express = require('express');
const passport = require('passport');
const fault = require('../utilities/Errors');

module.exports = (req, res, next) => {
    passport.authenticate(
        'jwt',
        { session: false }, (err, user) => {
            if (err) return res.json(fault(256));
            if (!user) return res.json(fault(257));
            next()
        }
    )
    (req, res, next)
}