import React, { useState } from "react";
import { signupUserThunk } from "./thunks";
import { connect } from "react-redux";

const Signup = ({ closeModal, onSignupPressed }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  return (
    <form>
      <div className="mb-3">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              aria-describedby="firstNameHelp"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              aria-describedby="lastNameHelp"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              aria-describedby="passwordHelp"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <span id="signUpTags">Birthday</span>
            <input
              type="date"
              className="form-control"
              id="exampleInputMonth"
              aria-describedby="monthHelp"
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <span id="signUpTags">Gender</span>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card" id="card-gender">
                <div className="card-body">
                  <span className="me-2">Male</span>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card" id="card-gender">
                <div className="card-body">
                  <span className="me-2">Female</span>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              onClick={async () => {
                if (email && password) {
                  await onSignupPressed(
                    email,
                    password,
                    firstName,
                    lastName,
                    birthday,
                    gender
                  );

                  closeModal();
                }
              }}
              className="btn btn-success w-50 fw-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSignupPressed: (email, password, firstName, lastName, dOB, gender) =>
    dispatch(
      signupUserThunk(email, password, firstName, lastName, dOB, gender)
    ),
});

export default connect(null, mapDispatchToProps)(Signup);
