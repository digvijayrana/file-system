const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const upload = require('../middlewares/upload');
const {authenticateApiKey}= require('../middlewares/authentication')
router.post('/upload',authenticateApiKey, upload.single('file'),fileController.uploadFile);
router.get('/list', authenticateApiKey,fileController.listFiles);
router.delete('/delete/:id', authenticateApiKey,fileController.deleteFile);

module.exports = router;
