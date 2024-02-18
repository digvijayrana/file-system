const categorizeFile = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
        case 'pdf':
            return 'PDF';
        case 'jpg':
        case 'jpeg':
        case 'png':
            return 'Image';
        case 'csv':
            return 'CSV';
        default:
            return 'Other';
    }
};

module.exports = categorizeFile;
