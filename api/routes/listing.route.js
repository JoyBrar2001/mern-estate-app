const express = require('express');
const verifyToken = require('../utils/verifyUser');
const { createListing, deleteListing, updateListing } = require('../controllers/listing.controller');
const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);

module.exports = router;