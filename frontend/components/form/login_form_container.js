import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearErrors } from "../../action/session_actions";


const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = (dispatch, ownProps) => ({
    login: user=>dispatch(login(user)),
    clearErrors: ()=> dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(LoginForm);