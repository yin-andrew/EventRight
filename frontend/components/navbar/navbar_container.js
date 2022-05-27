import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../action/session_actions";
import { clearLikes } from "../../action/like_actions";
import Navbar from "./navbar";


const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
    logout: ()=>dispatch(logout()),
    clearLikes: () => dispatch(clearLikes())
})

export default withRouter(connect(mSTP, mDTP)(Navbar));