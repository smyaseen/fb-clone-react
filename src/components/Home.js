import { connect } from "react-redux";

const Home = ({ user }) => {
  return <h1>Home Page</h1>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
