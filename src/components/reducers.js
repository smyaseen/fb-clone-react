import { LOAD_USER, SIGNUP_USER, LOGOUT_USER } from "./actions";

export const user = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER: {
      const { user } = payload;
      return user;
    }
    case SIGNUP_USER: {
      const { user } = payload;
      return user;
    }
    case LOGOUT_USER: {
      const { user } = payload;
      return user;
    }

    default:
      return state;
  }
};
