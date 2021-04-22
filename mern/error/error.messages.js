const {
  BAD_REQUEST,
  FORBIDDEN,
  CREATED,
  DELETE,
  NOT_FOUND,
  UNAUTHORIZED,
  NO_CONTENT,
} = require('../constant/errorCodes.enum')

module.exports = {
  CREATE_BODY: {
    message: 'Created',
    code: CREATED,
  },
  NO_CONTENTS: {
    message: 'empty content',
    code: NO_CONTENT,
  },
  NOT_VALID_ID: {
    message: 'User ID must be grater than 0',
    code: BAD_REQUEST,
  },
  WRONG_EMAIL_OR_PASS: {
    message: 'Email or password is not valid',
    code: BAD_REQUEST,
  },
  JUST_ONE_PHOTO: {
    message: 'You can upload just one photo as avatar',
    code: BAD_REQUEST,
  },
  TOO_BIG_FILE: {
    message: 'Too big file',
    code: BAD_REQUEST,
  },
  WRONG_FILE_EXTENSION: {
    message: 'Wrong file extension',
    code: BAD_REQUEST,
  },
  NOT_VALID_TOKEN: {
    message: 'Unauthorized access',
    code: UNAUTHORIZED,
  },
  PERMISSION_DENIED: {
    message: 'Unauthorized ',
    code: UNAUTHORIZED,
  },
  NOT_VALID_BODY: {
    message: 'Request is not valid',
    code: FORBIDDEN,
  },
  NOT_FOUND_BODY: {
    message: 'This resource not_found',
    code: NOT_FOUND,
  },
  DELETE_BODY: {
    message: 'delete',
    code: DELETE,
  },
}
