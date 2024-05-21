const express = require('express');
const { updateUser, deleteUser, getUserListing, getUser } = require('../controllers/user.controller');
const verifyToken = require('../utils/verifyUser');

const router = express.Router();

router.get('/test', (req, res) => res.json({ message: 'Hello World' }));
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListing)
router.get('/:id', verifyToken, getUser);

module.exports = router;