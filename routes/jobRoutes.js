const express = require('express');
const { createJob, getJobs, applyJob } = require('../controllers/jobController');
const protect = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createJob);
router.get('/', getJobs);
router.post('/apply/:id', protect, applyJob);
module.exports = router;