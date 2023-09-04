const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); // krmel 2e2der 2e2ra req.body
app.use(bodyParser.json());

app.use(cors()); // now anyone can use my api clearly without any errors "cors"

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/users', function (req, res) {
    const users = {
        '1' : "sam",
        '2' : "fathi",
        '3' : "farah",
        '4' : "haj",
    }
    res.send(users);
    console.log(users);
})

app.get('/welcome', function (req, res) {

    res.send("Hi all how r u hope you r doing well");
})


app.post('/addStudent', function (req, res) {
    console.log(req.body);
    res.end('student has been added')
})

app.listen(3000)