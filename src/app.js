require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const fileRoutes = require('./routes/fileRoutes');
const logger = require('./middlewares/logger');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger); 
app.use('/files', fileRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

