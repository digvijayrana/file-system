const getFileType = async(fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    console.log('file extension:', extension);
  
    // Check if the extension matches known file types
    switch (extension) {
      case 'pdf':
      case 'png':
      case 'jpeg':
      case 'jpg':
      case 'csv':
        return true; // Return true if the file type is supported
      default:
        return false; // Return false if the file type is not supported
    }
  };
  
  module.exports = { getFileType };
  