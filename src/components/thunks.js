import { loadUser, setUser } from "./actions";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    let found = false;

    let userFound = "";

    data.map((user) => {
      if (user.email === email && user.password === password) {
        found = true;
        userFound = user;
        return user;
      } else return user;
    });

    if (found) {
      dispatch(loadUser(userFound));
    } else {
      const errorMessage = { code: 403, message: "wrong user or pass" };
      throw errorMessage;
    }

    return found;
  } catch (e) {
    dispatch(displayAlert(e.message));
    return false;
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};

export const userLoggedIn = (user) => (dispatch) => {
  dispatch(setUser(user));
};
