import { loadUser } from "./actions";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    let userFound;

    data.map((user) => {
      if (user.email === email && user.password === password) {
        userFound = user;
        return user;
      } else return user;
    });

    if (userFound) {
      dispatch(loadUser(userFound));
    } else {
      const errorMessage = { code: 403, message: "wrong user or pass" };
      throw errorMessage;
    }

    return true;
  } catch (e) {
    dispatch(displayAlert(e.message));
    return false;
  }
};

export const signupUser =
  (userEmail, userPassword, userFirstName, userLastName, userDOB, userGender) =>
  async (dispatch) => {
    try {
      const user = {
        id: 2,
        email: userEmail,
        password: userPassword,
        firstName: userFirstName,
        lastName: userLastName,
        dateOfBirth: userDOB,
        gender: userGender,
      };

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      dispatch(loadUser(data));

      return true;
    } catch (e) {
      dispatch(displayAlert(e.message));
      return false;
    }
  };

export const displayAlert = (text) => () => {
  alert(text);
};
