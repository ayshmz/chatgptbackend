const express = require('express');

const router = express.Router();
const chatGPTController = require('../controllers/chatgpt');

router.post('/chat', chatGPTController.chat);

module.exports = router;
