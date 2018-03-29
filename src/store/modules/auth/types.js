// Getters (GET*)
export const AUTH_IS_LOGGED = 'AUTH_IS_LOGGED';
export const AUTH_GET_USERNAME = 'AUTH_GET_USERNAME';
export const AUTH_GET_EMAIL = 'AUTH_GET_EMAIL';

// Mutations (SET*, ADD*, REMOVE*)
// [CONTEXT]_[ACTION]_[PROPERTY]
export const AUTH_SET_USER = 'AUTH_SET_USER';
export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN';
export const AUTH_REMOVE_TOKEN = 'AUTH_REMOVE_TOKEN';

// Actions (FETCH*, CREATE*, UPDATE*, DELETE*)
// [CONTEXT]_[ACTION]_[PROPERTY]_[STATUS]
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';