const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const glob = require('glob');
const _ = require('lodash');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const fs = require('fs');
var CronJob = require('cron').CronJob

const app = express();

app.use(cors());

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

//Passport config file
app.use(passport.initialize());
require('./models/index');
require('./config/passport')(passport);

//DBs config
const db = require('./config/keys').mongoURI;
// const db_vanleeuwen = require('./config/keys').mongoURI_vanleeuwen;

// Connect to MongoDB
mongoose
.connect(db,{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// var conn = mongoose.createConnection(db, {useNewUrlParser:true, useUnifiedTopology: true})
// .then(() => console.log("MEP Connected"))
// .catch(err => console.log(err));

// var conn_vanleeuwen = mongoose.createConnection(db_vanleeuwen, {useNewUrlParser:true, useUnifiedTopology: true})
// .then(() => console.log("Vanleeuwen Connected"))
// .catch(err => console.log(err));



// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

// currency
app.use('/currency/get_rate', passport.authenticate('jwt', { session: false }), require('./routes/currency/get_rate'));
//dropdown
app.use('/dropdown/currency', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/currency'));
app.use('/dropdown/end', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/end'));
app.use('/dropdown/grade', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/grade'));
app.use('/dropdown/length', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/length'));
app.use('/dropdown/pff_type', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/pff_type'));
app.use('/dropdown/size_one', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/size_one'));
app.use('/dropdown/size_three', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/size_three'));
app.use('/dropdown/size_two', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/size_two'));
app.use('/dropdown/steel_type', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/steel_type'));
app.use('/dropdown/surface', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/surface'));
app.use('/dropdown/type', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/type'));
app.use('/dropdown/wall_one', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/wall_one'));
app.use('/dropdown/wall_two', passport.authenticate('jwt', { session: false }), require('./routes/dropdown/wall_two'));

//process
app.use('/process/findOne', passport.authenticate('jwt', { session: false }), require('./routes/process/findOne'));

//param
app.use('/param/upsert', passport.authenticate('jwt', { session: false }), require('./routes/param/upsert'));
//stock
app.use('/stock/upsert', require('./routes/stock/upsert'));

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

//cron
cronRanges = [
    { "_id": 0, "name": "Seconds", "range": "0-59" },
    { "_id": 1, "name": "Minutes", "range": "0-59" },
    { "_id": 2, "name": "Hours", "range": "0-23" },
    { "_id": 3, "name": "Day of Month", "range": "1-31" },
    { "_id": 4, "name": "Months", "range": "0-11 (Jan-Dec)" },
    { "_id": 5, "name": "Day of Week", "range": "0-6 (Sun-Sat)" },
]

// var clearDownloadHistory = new CronJob('00 00 * * * *', function() {
//     //run every hours
//   console.log(new Date());
// }, null, true, 'America/Los_Angeles');

var updateRates = new CronJob('00 00 00 * * *', function() {
    require('./functions/updateRates')().then(res => console.log(res.message));
}, null, true, 'Europe/London')

// http://www.cma-cgm.com/ebusiness/prices-finder/GetQuoteLines/ST/2021-01-07?pol=BEANR&pod=AEJEA
// http://www.cma-cgm.com/ebusiness/prices-finder/GetChargeDetail
// https://www.cma-cgm.com/eBusiness/Schedules

updateRates.start();
// clearDownloadHistory.start();