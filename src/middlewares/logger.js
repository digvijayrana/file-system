const fs = require('fs');
const path = require('path');

const logDirectory = path.join(__dirname, '..', 'logs');
const logFilePath = path.join(logDirectory, 'app.log');

// Ensure logs directory exists
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Create log file if not present
if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, '');
}

const logger = (req, res, next) => {
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}`;

    fs.appendFile(logFilePath, logMessage + '\n', (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });

    next();
};

module.exports = logger;
