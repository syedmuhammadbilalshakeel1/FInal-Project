import userReducer from "../reducers/user";
import userTypes from "../type/user";

describe("userReducer", () => {
   it("should handle USER_REQUEST", () => {
      const initialState = {
         userInfo: {},
         loading: false,
         error: null,
         message: null,
      };

      const action = {
         type: userTypes.USER_REQUEST,
      };

      const expectedState = {
         userInfo: {},
         loading: true,
         error: null,
         message: null,
      };

      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle USER_LOGIN_SUCCESS", () => {
      const initialState = {
         userInfo: {},
         loading: true,
         error: null,
         message: null,
      };

      const userInfo = {
         name: "John Doe",
         email: "john@example.com",
      };

      const action = {
         type: userTypes.USER_LOGIN_SUCCESS,
         payload: userInfo,
      };

      const expectedState = {
         userInfo: userInfo,
         loading: false,
         error: null,
         message: null,
      };

      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle USER_UPDATE_SUCCESS", () => {
      const initialState = {
         userInfo: {
            name: "John Doe",
            email: "john@example.com",
         },
         loading: true,
         error: null,
         message: null,
      };

      const updatedUserInfo = {
         name: "Jane Smith",
         email: "jane@example.com",
      };

      const action = {
         type: userTypes.USER_UPDATE_SUCCESS,
         payload: {
            userInfo: updatedUserInfo,
            message: "User updated successfully",
         },
      };

      const expectedState = {
         userInfo: updatedUserInfo,
         loading: false,
         error: null,
         message: "User updated successfully",
      };

      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle USER_FAILURE", () => {
      const initialState = {
         userInfo: {},
         loading: true,
         error: null,
         message: null,
      };

      const error = "Failed to fetch user data";

      const action = {
         type: userTypes.USER_FAILURE,
         payload: error,
      };

      const expectedState = {
         userInfo: {},
         loading: false,
         error: error,
         message: null,
      };

      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle CLEAR_ERROR_MESSAGES", () => {
      const initialState = {
         userInfo: {},
         loading: true,
         error: "Failed to fetch user data",
         message: "User updated successfully",
      };

      const action = {
         type: userTypes.CLEAR_ERROR_MESSAGES,
      };

      const expectedState = {
         userInfo: {},
         loading: false,
         error: null,
         message: null,
      };

      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         userInfo: {},
         loading: false,
         error: null,
         message: null,
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = userReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
