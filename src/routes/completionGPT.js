const express = require('express');
const completionGPTController = require('../../src/controllers/completionGPT');

const router = express.Router();

router.get(
  '/',
  async (req, res) => await completionGPTController.getChatResponse(req, res)
);

router.post(
  '/save',
  async (req, res) => await completionGPTController.saveChatResponse(req, res)
);

module.exports = router;
