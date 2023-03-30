const express = require("express");
const router = express.Router();
const aadhaarController = require('../controllers/aadhaarController');

router.post('/create', aadhaarController.create_aadhaar);
router.post('/details', aadhaarController.get_details);
router.post('/authenticate', aadhaarController.authenticate_aadhaar);

module.exports = router;

