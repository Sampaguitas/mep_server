const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const glob = require('glob');
const _ = require('lodash');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
//const bcrypt = require('bcryptjs');
const fs = require('fs');

const app = express();

app.use(cors());

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Passport config file
// app.use(passport.initialize());
// require('./models/index');
// require('./config/passport')(passport);

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
.connect(db,{
    useUnifiedTopology: true,
    useNewUrlParser:true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

// Compile all routers   
var routeFolders = [],     
routePaths = "./routes"   
glob.sync('**/*', { cwd: routePaths }).forEach(route => {     
    var _isFolder = !_.endsWith(route, '.js')     
    route = '/' + route.replace(/\.[^/.]+$/, '')     
    if (!_.endsWith(route, 'index')) {       
        var _router = require(routePaths + route)       
        app.use(route, _router)       
        if (_isFolder) routeFolders.push(route)     }   })   
        routeFolders.forEach(route => {     var _pathDeindex = routePaths + route + '/deindex.js'     
        if (fs.existsSync(_pathDeindex))       
        app.use(route, require(_pathDeindex))   
    })