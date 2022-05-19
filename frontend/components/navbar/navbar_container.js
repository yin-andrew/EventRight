import { connect } from "react-redux";
import { logout } from "../../action/session_actions";
import Navbar from "./navbar";


const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
    logout: ()=>dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar);