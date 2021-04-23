module.exports = {
  CURRENT_YEAR: new Date().getFullYear(),
  AUTHORIZATION: 'Authorization',

  PHOTO_MAX_SIZE: 2 * 1980 * 2524, // 2MB
  FILE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  VIDEO_MAX_SIZE: 15 * 1024 * 1024, // 15MB
  PHOTOS_MIMETYPES: [
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/tiff',
    'image/webp',
  ],

  DOCS_MIMETYPES: [
    'application/msword', // DOC
    'application/pdf', // PDF
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLS
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOC 2007
  ],

  VIDEOS_MIMETYPES: [
    'video/3gpp',
    'video/mpeg',
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'video/x-m4v',
    'video/ms-asf',
  ],
}
