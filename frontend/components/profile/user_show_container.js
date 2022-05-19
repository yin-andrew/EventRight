import { connect } from "react-redux"
import { logout } from "../../action/session_actions";
import userShow from "./user_show"

const mSTP = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
});
// if !currentUser return null for re render;

const mDTP = dispatch => ({
    logout: ()=> dispatch(logout())
});

export default connect(mSTP, mDTP)(userShow);