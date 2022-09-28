var express = require('express');
const { route } = require('.');
var router = express.Router();

// this is where we code the endpoints

// router.method('/route/:withParams', function(req, res, next) {
//  res.send("data here");
// });

// we are build a user api and we need the following
/*
1. CRUD (create, read, update, delete) mapped to endpoints
2. Data to operate on (we will mock this up)
3. always respond with a status code and message
*/

var data = {
    "jesse": { name: "Jesse Harlan", occupation: "Instructor" },
    "sarah": { name: "Sarah Harlan", occupation: "Student" },
    "ashton": { name: "Ashton Harlan", occupation: "1st grade student" }
}

// Exact Route GET /api/users
// get all users READ
router.get('/users', function(req, res, next) {
    res.status(200);
    res.send(data);
});

// GET /api/users/:username
// READ one
router.get('/users/:username', function(req, res, next) {
    res.status(200);
    res.send(data[req.params.username]);
});

router.post('/users', function(req, res, next) {
    var obj = req.body;

    data[obj.username] = obj.body;
    res.status(200);
    res.send(data);
});

module.exports = router;