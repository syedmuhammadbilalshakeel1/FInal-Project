import userTypes from "../type/user";

const initialState = {
  userInfo: {},
  loading: false,
  error: null,
  message: null,
};
// eslint-disable-next-line default-param-last
function userReducer(state = initialState, action) {
  switch (action.type) {
    case userTypes.USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case userTypes.USER_LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
        loading: false,
        error: null,
        message: null,
      };
    case userTypes.USER_UPDATE_SUCCESS:
      return {
        userInfo: action.payload.userInfo,
        loading: false,
        error: null,
        message: action.payload.message,
      };
    case userTypes.USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: null,
      };
    case userTypes.CLEAR_ERROR_MESSAGES:
      return {
        ...state,
        loading: false,
        error: null,
        message: null,
      };
    default:
      return state;
  }
}

export default userReducer;
