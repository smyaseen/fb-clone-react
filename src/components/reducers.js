import { LOAD_USER, SET_USER } from "./actions";

export const user = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER: {
      const { user } = payload;
      return user;
    }
    case SET_USER: {
      const { user } = payload;

      return user;
    }
    default:
      return state;
  }
};
