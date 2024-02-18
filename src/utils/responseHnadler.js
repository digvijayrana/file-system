
function sendSuccessResponse(res, message,  statusCode = 200 ,data = null) {
  const response = { success: true, message };
  if (data) {
    response.data = data;
  }
  res.status(statusCode).json(response);
}

function sendErrorResponse(res, message,error = null,  statusCode = 500 ) {
  const response = { success: false, error: message };
  if (error) {
    response.errorDetails = error;
  }
  res.status(statusCode).json(response);
}

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
