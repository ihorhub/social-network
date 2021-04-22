const ErrorHandler = require('../error/errorHandler')
const {
  JUST_ONE_PHOTO,
  TOO_BIG_FILE,
  WRONG_FILE_EXTENSION,
} = require('../error/error.messages')
const {
  DOCS_MIMETYPES,
  FILE_MAX_SIZE,
  PHOTO_MAX_SIZE,
  PHOTOS_MIMETYPES,
  VIDEOS_MIMETYPES,
  VIDEO_MAX_SIZE,
} = require('../constant/constants')

module.exports = {
  checkFile: (req, res, next) => {
    try {
      const { files } = req
      const docs = []
      const photos = []
      const videos = []

      const allFiles = Object.values(files)

      for (let i = 0; i < allFiles.length; i++) {
        const { name, size, mimetype } = allFiles[i]

        if (PHOTOS_MIMETYPES.includes(mimetype)) {
          // PHOTO
          if (PHOTO_MAX_SIZE < size) {
            throw new ErrorHandler(TOO_BIG_FILE.message, TOO_BIG_FILE.code)
          }

          photos.push(allFiles[i])
        } else if (DOCS_MIMETYPES.includes(mimetype)) {
          // doc
          if (FILE_MAX_SIZE < size) {
            throw new ErrorHandler(TOO_BIG_FILE.message, TOO_BIG_FILE.code)
          }

          docs.push(allFiles[i])
        } else if (VIDEOS_MIMETYPES.includes(mimetype)) {
          // video
          if (VIDEO_MAX_SIZE < size) {
            throw new ErrorHandler(TOO_BIG_FILE.message, TOO_BIG_FILE.code)
          }

          videos.push(allFiles[i])
        } else {
          throw new ErrorHandler(
            WRONG_FILE_EXTENSION.message,
            WRONG_FILE_EXTENSION.code
          )
        }
      }

      req.docs = docs
      req.photos = photos
      req.videos = videos

      next()
    } catch (e) {
      next(e)
    }
  },

  checkAvatar: (req, res, next) => {
    try {
      if (req.photos.length > 1) {
        throw new ErrorHandler(JUST_ONE_PHOTO.message, JUST_ONE_PHOTO.code)
      }

      ;[req.avatar] = req.photos
      // req.avatar = req.photos[0];

      next()
    } catch (e) {
      next(e)
    }
  },
}
