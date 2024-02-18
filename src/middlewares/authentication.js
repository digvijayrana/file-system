const { sendErrorResponse } = require('../utils/responseHnadler');
const validApiKeys = process.env.API_KEY;

function authenticateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || !validApiKeys.split(',').includes(apiKey)) {
    return sendErrorResponse(res, 'Unauthorized - Invalid API Key', null, 401);
  }
  next();
}

module.exports = {
  authenticateApiKey,
};
