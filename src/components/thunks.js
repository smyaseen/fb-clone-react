import { loadUser, signupUser, logout_user, load_posts } from "./actions";
import firebase from "./Firebase";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const db = firebase.firestore();

    const errorMessage = { code: 403, message: "wrong user or pass" };

    const users = await db.collection("users").doc(email).get();
    if (users.exists) {
      if (users.get("password") === password) {
        const posts = await db.collection("posts").doc("posts").get();
        if (posts.exists) {
          const postsRev = posts.data().posts.reverse();
          dispatch(load_posts(postsRev));
        }
        dispatch(loadUser(users.data()));
      }
    } else {
      throw errorMessage;
    }
    firebase.firestore().terminate();

    return true;
  } catch (e) {
    firebase.firestore().terminate();
    dispatch(displayAlert(e.message));
    return false;
  }
};

export const signupUserThunk =
  (userEmail, userPassword, userFirstName, userLastName, userDOB, userGender) =>
  async (dispatch) => {
    try {
      const db = firebase.firestore();
      const emailAsID = userEmail;

      const user = {
        email: userEmail,
        password: userPassword,
        firstName: userFirstName,
        lastName: userLastName,
        dateOfBirth: userDOB,
        gender: userGender,
      };

      await db.collection("users").doc(emailAsID).set(user);

      const posts = await db.collection("posts").doc("posts").get();
      const postsRev = posts.data().posts.reverse();

      dispatch(signupUser(user));
      dispatch(load_posts(postsRev));
      firebase.firestore().terminate();

      return true;
    } catch (e) {
      firebase.firestore().terminate();

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

    const db = firebase.firestore();

    const posts = db.collection("posts").doc("posts");

    if (posts) {
      const newPost = {
        author: user.firstName + " " + user.lastName,
        post: post,
        timeAndDate: new Date().toString().split("GMT")[0],
      };

      await posts.update({
        posts: firebase.firestore.FieldValue.arrayUnion(newPost),
      });

      dispatch(load_posts([newPost, ...allPosts]));
    }

    firebase.firestore().terminate();
  } catch (e) {
    firebase.firestore().terminate();
    dispatch(displayAlert(e.message));
    return false;
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
