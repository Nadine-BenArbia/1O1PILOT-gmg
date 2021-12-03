import { CLEAR_ERRORS, CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constant/User";

const initialstate = {
  user: null,
  errors: null,
  isLoad: false,
  isAuth: false,
};

const userReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, isLoad: true };
    case REGISTER_USER:
      //msg,user,token
      localStorage.setItem("token", payload.token);
      return { ...state, isLoad: false, user: payload.user, isAuth: true };
      case LOGIN_USER:
        // payload:{msg,user,token}
        localStorage.setItem("token", payload.token);
        return { ...state, isLoad: false, user: payload.user, isAuth: true };
      case CURRENT_USER:
        return { ...state, user: payload.user, isLoad: false, isAuth: true };
      case FAIL_USER:
        return { ...state, errors: payload.errors, isLoad: false };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return {
          user: null,
          errors: null,
          isLoad: false,
          isAuth: false,
        };
      case CLEAR_ERRORS:
        return { ...state, errors: null };
      default:
        return state;
    }
};
export default userReducer;
