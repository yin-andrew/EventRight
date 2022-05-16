import { connect } from "react-redux";
import Greeting from "./greeting";
import { logout } from "../../action/session_actions";

const mSTP = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
    logout: ()=>dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);