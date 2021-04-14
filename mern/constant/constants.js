module.exports = {
    CURRENT_YEAR: new Date().getFullYear(),
    AUTHORIZATION: 'Authorization',
    CHECK_REFRESH_TOKEN_TIME: (24 * 60 * 60 * 1000 * 30)
    PHOTO_MAX_SIZE: 2 * 1024 * 1024,
    FILE_MAX_SIZE: 5 * 1024 * 1024,
    FILE_MAX_QOUNTITY: 5,
    PHOTO_MAX_QOUNTITY: 5,
    PHOTOS_MIMETYPES: [
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/tiff',
        'image/webp'
    ],
    DOCS_MIMETYPES: [
        'application/msword',
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
};