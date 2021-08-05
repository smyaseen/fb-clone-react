import React, { useState } from "react";
import fbTextSVG from "../fb-text.svg";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Signup from "./Signup";
const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  return (
    <div className="main">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-8">
                <img
                  className="fb-text-logo"
                  src={fbTextSVG}
                  alt="fb-text-logo"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>
                  Connect with friends and the world around you on Facebook.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email or Phone Number"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-100 fw-bold"
                      >
                        Login
                      </button>
                    </form>
                    <hr />
                    <button
                      type="button"
                      className="btn btn-success w-100 fw-bold"
                      onClick={handleShowSignup}
                    >
                      Create New Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showSignup} onHide={handleCloseSignup}>
        <div className="shadow-lg">
          <Modal.Header>
            <Modal.Title>
              <h1>Sign Up</h1>
              <h6>It’s quick and easy.</h6>
            </Modal.Title>
            <Button
              className="btn btn-danger"
              id="modal-close-btn"
              onClick={handleCloseSignup}
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Signup closeModal={handleCloseSignup} />
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
