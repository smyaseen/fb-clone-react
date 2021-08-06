import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { logoutUser } from "./thunks";
import home from "./home.png";

const Home = ({ user, onLogoutPressed }) => {
  const history = useHistory();

  const routeChangeToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Facebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" id="homeLogoParent">
                <img src={home} id="homeLogo" alt="home" />
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => {
                  routeChangeToLogin();
                  onLogoutPressed();
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Home</h1>
      {user.length === 0 ? routeChangeToLogin() : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutPressed: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
