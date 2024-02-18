const fileService = require('../services/fileService');
const {sendSuccessResponse,sendErrorResponse} = require('../utils/responseHnadler')
const {getFileType}= require('../utils/fileTypeChecker')


exports.uploadFile = async (req, res, next) => {
    try {
        const { file } = req;
        if (!file) {
            throw new Error('No file uploaded');
        }
        const fileType = await getFileType(file.originalname);
        if (!fileType) {
          return sendErrorResponse(res, 'Unsupported file type', null, 400);
        } 
        const { originalname, buffer } = file;
        await fileService.uploadFile(originalname, buffer);
       return sendSuccessResponse(res,'File uploaded successfully',201)
    } catch (error) {
        console.log('error', error.message);
         return sendErrorResponse(res,'Internal Server Error',error.message,500)
    }
};


exports.listFiles = async (req, res, next) => {
    try {
        const files = await fileService.listFiles();
        return sendSuccessResponse(res,'File listed successfully',200,files)
    } catch (error) {
        return sendErrorResponse(res,'Internal Server Error',error.message,500)
    }
};

exports.deleteFile = async (req, res, next) => {
    try {
        const fileId = req.params.id;
        await fileService.deleteFile(fileId);
        return sendSuccessResponse(res,'File deleted successfully',200)
    } catch (error) {
        return sendErrorResponse(res,'Internal Server Error',error.message,500)
    }
};