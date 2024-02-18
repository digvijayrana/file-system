const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Define the upload directory
const uploadDir = 'src/uploads/';

// Check if the upload directory exists, if not, create it
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure multer to use memory storage
const storage = multer.memoryStorage();
// Configure multer with the storage options
const upload = multer({ storage: storage });

module.exports = upload;
