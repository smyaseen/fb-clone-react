import { LOAD_USER, SIGNUP_USER, LOGOUT_USER, LOAD_POSTS } from "./actions";

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

export const posts = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_POSTS: {
      const { posts } = payload;
      return posts;
    }
    default:
      return state;
  }
};
