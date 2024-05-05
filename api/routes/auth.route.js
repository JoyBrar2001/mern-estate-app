const express = require('express');
const router = express.Router();

const signup = require('../controllers/auth.contoller');

router.post("/signup", signup);

module.exports = router;