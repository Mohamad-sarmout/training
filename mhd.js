const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const bodyParser = require("body-parser");
const excelToJson = require('convert-excel-to-json');

app.use(bodyParser.urlencoded({ extended: false })); // krmel 2e2der 2e2ra req.body
app.use(bodyParser.json());

app.use(cors()); // now anyone can use my api clearly without any errors "cors"

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/users', function (req, res) {
    const users = excelToJson({
        sourceFile: 'data.xlsx'
    });
    res.send(users);
    console.log(users);
})

app.post('/addStudent', function (req, res) {
    console.log(req.body);
    res.end('student has been added')
})

app.listen(3000)
