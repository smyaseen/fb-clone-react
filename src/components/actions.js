export const LOAD_USER = "LOAD_USER";
export const loadUser = (user) => ({
  type: LOAD_USER,
  payload: { user },
});

export const SIGNUP_USER = "SIGNUP_USER";
export const signupUser = (user) => ({
  type: SIGNUP_USER,
  payload: { user },
});

export const LOGOUT_USER = "LOGOUT_USER";
export const logout_user = (user) => ({
  type: LOGOUT_USER,
  payload: { user },
});

export const LOAD_POSTS = "LOAD_POSTS";
export const load_posts = (posts) => ({
  type: LOAD_POSTS,
  payload: { posts },
});
