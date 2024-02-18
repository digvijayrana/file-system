const fs = require('fs');
const path = require('path');
const File = require('../models/File');

const uploadFile = async (name, data) => {
    try {
        if (!data) {
            throw new Error('Data is required for uploading the file');
        }  
        const fileId = Date.now();
        const filePath = path.join(__dirname, '..', 'uploads', `${fileId}_${name}`);
        
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    const file = new File(fileId, name, filePath);
                    resolve(file);
                }
            });
        });
    } catch (error) {
        throw error
    }
};


const listFiles = async () => {
    try {
        const uploadsDir = path.join(__dirname, '..', 'uploads');
        return new Promise((resolve, reject) => {
            fs.readdir(uploadsDir, (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    const fileList = files.map(file => {
                        // Extracting the id from the file name
                        const id = file;
                        return new File(id, file, path.join(uploadsDir, file));
                    });
                    resolve(fileList);
                }
            });
        });
    } catch (error) {
        throw error
    }
};



const deleteFile = async (fileId) => {
    try {
        const filePath = path.join(__dirname, '..', 'uploads', fileId);
        return new Promise((resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    } catch (error) {
        throw error
    }
};

module.exports = {
    uploadFile,
    listFiles,
    deleteFile
};
