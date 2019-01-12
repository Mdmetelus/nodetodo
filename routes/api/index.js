const express = require('express');
const router = express.Router();
const todoRoute = require('./todo');

router.use('/todo', todoRoute);
//localhost:3000/api/todo



module.exports= router;