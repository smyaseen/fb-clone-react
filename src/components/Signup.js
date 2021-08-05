const Signup = ({ closeModal }) => {
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
              value="2021-01"
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
              onClick={closeModal}
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

export default Signup;
