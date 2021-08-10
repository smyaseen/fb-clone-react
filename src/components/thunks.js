import { loadUser, signupUser, logout_user, load_posts } from "./actions";
import firebase from "./Firebase";

let idCount = 0;

(async () => {
  const res = await fetch("http://localhost:5000/users");
  const data = await res.json();

  data.map((user) => (idCount = user.id > idCount ? user.id : idCount));
})();

(async () => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  const users = db.collection("users").doc("BdGPFfUgFYnt3e6LqhmH");
  const doc = await users.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data());
  }
})();

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    const resPosts = await fetch("http://localhost:5000/posts");
    const dataPosts = await resPosts.json();

    let userFound;

    data.map((user) => {
      if (user.email === email && user.password === password) {
        userFound = user;
        return user;
      } else return user;
    });

    if (userFound) {
      dispatch(loadUser(userFound));
      dispatch(load_posts(dataPosts));
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

export const signupUserThunk =
  (userEmail, userPassword, userFirstName, userLastName, userDOB, userGender) =>
  async (dispatch) => {
    try {
      const user = {
        id: ++idCount,
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

      const postRes = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          posts: [],
        }),
      });

      const data = await res.json();

      const postData = await postRes.json();

      dispatch(signupUser(data));
      dispatch(load_posts(postData));

      return true;
    } catch (e) {
      dispatch(displayAlert(e.message));
      return false;
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(logout_user(""));
    dispatch(loadUser(""));
    return true;
  } catch (e) {
    dispatch(displayAlert(e.message));
    return false;
  }
};

export const makePost = (user, post) => async (dispatch, getState) => {
  try {
    const allPosts = getState().posts;

    let posts = [];

    allPosts.map((usr) => (usr.id === user.id ? (posts = usr["posts"]) : usr));
    posts.push(post);

    const data = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      posts: posts,
    };

    const res = await fetch(`http://localhost:5000/posts/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    dispatch(load_posts(allPosts));
  } catch (e) {
    dispatch(displayAlert(e.message));
    return false;
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
