import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Navbar, Card, Nav, Container, NavDropdown } from "react-bootstrap";
import { logoutUser, makePost } from "./thunks";
import home from "./home.png";
import facebook from "./facebook.png";
import person from "./person.png";
import addPhoto from "./addPhoto.png";

const Home = ({ user, allPosts, onLogoutPressed, onEnterPressed }) => {
  const history = useHistory();
  let post;

  const routeChangeToLogin = () => {
    history.push("/login");
  };

  const makePostOnEnter = (e) => {
    if (e.keyCode === 13) {
      if (post) {
        onEnterPressed(user, post);
      }
    }
  };

  return (
    <div>
      {user.length === 0 ? routeChangeToLogin() : null}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img id="facebookLogoHome" src={facebook} alt="facebook" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" id="homeLogoParent">
                <img src={home} id="homeLogo" alt="home" />
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <div className="row">
                    <div className="col">
                      <img src={person} alt="profile pic" />
                    </div>
                    <div className="col">
                      <h5>{user.firstName + " " + user.lastName}</h5>
                      <h6>See your profile</h6>
                    </div>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  onClick={() => {
                    routeChangeToLogin();
                    onLogoutPressed();
                  }}
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card id="postCard" className="w-25 m-auto mt-2">
        <Card.Body>
          <div className="row">
            <div className="col-1">
              <img src={person} alt="profilePic" />
            </div>
            <div className="col">
              <input
                type="post"
                className="form-control"
                id="postInput"
                placeholder={"What's on your mind, " + user.firstName + "?"}
                onKeyDown={(e) => makePostOnEnter(e)}
                onChange={(e) => (post = e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-2">
            <button className="btn">
              <img id="addPhotoIcon" src={addPhoto} /> Add Photo
            </button>
          </div>
        </Card.Body>
      </Card>
      {allPosts.map((userPost) =>
        userPost["posts"].map((post) => (
          <Card id="post" className="w-25 m-auto mt-2">
            <Card.Body>
              <div className="row">
                <div className="col">
                  <img src={person} alt="profilePic" />
                  {userPost.firstName + " " + userPost.lastName}
                </div>
              </div>
              <div className="row justify-content-center">{post}</div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  allPosts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutPressed: () => dispatch(logoutUser()),
  onEnterPressed: (user, post) => dispatch(makePost(user, post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
