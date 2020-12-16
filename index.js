const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const glob = require('glob');
const _ = require('lodash');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Passport config file
app.use(passport.initialize());
require('./models/index');
require('./config/passport')(passport);

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
.connect(db,{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

//user
app.use('/user/changePwd', passport.authenticate('jwt', { session: false }), require('./routes/user/changePwd'));
app.use('/user/create', passport.authenticate('jwt', { session: false }), require('./routes/user/create'));
app.use('/user/delete', passport.authenticate('jwt', { session: false }), require('./routes/user/delete'));
app.use('/user/findAll', passport.authenticate('jwt', { session: false }), require('./routes/user/findAll'));
app.use('/user/findOne', passport.authenticate('jwt', { session: false }), require('./routes/user/findOne'));
app.use('/user/login', require('./routes/user/login'));
app.use('/user/requestPwd', require('./routes/user/requestPwd'));
app.use('/user/resetPwd', require('./routes/user/resetPwd'));
app.use('/user/setAdmin', passport.authenticate('jwt', { session: false }), require('./routes/user/setAdmin'));
app.use('/user/update', passport.authenticate('jwt', { session: false }), require('./routes/user/update'));
app.use('/user/updatePwd', passport.authenticate('jwt', { session: false }), require('./routes/user/updatePwd'));

//quote
app.use('/quote/fake', passport.authenticate('jwt', { session: false }), require('./routes/quote/fake'));

//dropbox
app.use('/dropbox/steel_type', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/steel_type'));
app.use('/dropbox/pff_type', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/pff_type'));
app.use('/dropbox/type', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/type'));
app.use('/dropbox/size_one', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/size_one'));
app.use('/dropbox/size_two', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/size_two'));
app.use('/dropbox/size_three', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/size_three'));
app.use('/dropbox/wall_one', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/wall_one'));
app.use('/dropbox/wall_two', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/wall_two'));
app.use('/dropbox/grade', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/grade'));
app.use('/dropbox/length', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/length'));
app.use('/dropbox/end', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/end'));
app.use('/dropbox/surface', passport.authenticate('jwt', { session: false }), require('./routes/dropbox/surface'));