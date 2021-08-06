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
