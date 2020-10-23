const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const organRoutes = express.Router();
const userRoutes = express.Router();
const PORT = 4000;

let Organ = require('./models/organs.newItem');
let User = require('./models/organs.newUser');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/organs', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

organRoutes.route('/').get(function(req, res) {
    Organ.find(function(err, organs) {
        if (err) {
            console.log(err);
        } else {
            res.json(organs);
        }
    });
});

userRoutes.route('/new-user').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'User Added Successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding new User Failed');
        });
});

userRoutes.route('/getUsers').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

app.use('/organs', organRoutes);
app.use('/users', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});