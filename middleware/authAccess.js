const passport = require('passport');

module.exports = (req, res, next) => {
    passport.authenticate(
        'jwt',
        { session: false }, (err, user) => {
            if (err) return res.status(400).json({message: 'an error has occured.'});
            if (!user) return res.status(400).json({message: 'user does not exist.'});
            next()
        }
    )
    (req, res, next)
}