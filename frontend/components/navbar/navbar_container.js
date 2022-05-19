import { connect } from "react-redux";
import Navbar from "./navbar";


const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id]
});

export default connect(mSTP, null)(Navbar);