import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = ({ user }) => {
  const history = useHistory();
  return (
    <div>
      <h1>Home</h1>
      {user.length === 0 ? history.push("/login") : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
