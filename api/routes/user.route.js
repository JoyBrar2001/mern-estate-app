const express = require('express');
const { updateUser } = require('../controllers/user.controller');
const verifyToken = require('../utils/verifyUser');

const router = express.Router();

router.get('/test', (req, res) => res.json({ message: 'Hello World' }));
router.post('/update/:id', verifyToken, updateUser);

module.exports = router;