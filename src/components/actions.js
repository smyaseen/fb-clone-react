export const LOAD_USER = "LOAD_USER";
export const loadUser = (user) => ({
  type: LOAD_USER,
  payload: { user },
});

export const SET_USER = "SET_USER";
export const setUser = (user) => ({
  type: SET_USER,
  payload: { user },
});
