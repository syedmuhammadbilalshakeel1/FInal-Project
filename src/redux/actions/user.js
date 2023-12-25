import userTypes from "../type/user";
import useServer from "../../hooks/useServer";

export function userRequest() {
  return {
    type: userTypes.USER_REQUEST,
  };
}
export function setUserInfo(data) {
  return {
    type: userTypes.USER_LOGIN_SUCCESS,
    payload: data,
  };
}
export function updateUserInfo(data) {
  return {
    type: userTypes.USER_UPDATE_SUCCESS,
    payload: data,
  };
}
export function userRequestFailure(data) {
  return {
    type: userTypes.USER_FAILURE,
    payload: data,
  };
}
export function clearErrorAndMessages() {
  return {
    type: userTypes.CLEAR_ERROR_MESSAGES,
  };
}

export const logInUser = (userData) => {
  return async (dispatch) => {
    const { loginUser, getUser } = useServer();
    try {
      dispatch(userRequest());
      const loginResult = await loginUser(userData);
      const user = await getUser(loginResult.token);
      const res = {
        ...loginResult,
        ...user,
      };
      dispatch(setUserInfo(res));
    } catch (error) {
      dispatch(userRequestFailure(error));
    }
  };
};

export const updateUser = (updatedData, token) => {
  return async (dispatch) => {
    const { updateUserData } = useServer();
    try {
      dispatch(userRequest());
      const updatedUser = await updateUserData(updatedData, token);
      if (updatedUser.enabled) {
        dispatch(
          updateUserInfo({ userInfo: { token, ...updatedUser }, message: { data: "User data changed succesfully" } })
        );
      } else {
        dispatch(userRequestFailure(updatedUser));
      }
    } catch (error) {
      dispatch(userRequestFailure(error));
    }
  };
};

export const changePassword = (passwords, token) => {
  return async (dispatch) => {
    const { changeUserPassword } = useServer();
    try {
      dispatch(userRequest());
      const result = await changeUserPassword(passwords, token);
      if (result.customer) {
        dispatch(updateUserInfo({ userInfo: { token, ...result.customer }, message: { password: result.message } }));
      } else {
        dispatch(userRequestFailure(result));
      }
    } catch (error) {
      dispatch(userRequestFailure(error));
    }
  };
};
