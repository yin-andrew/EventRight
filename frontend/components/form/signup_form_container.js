import { connect } from "react-redux";
import { signup, clearErrors } from "../../action/session_actions";
import SignupForm from "./signup_form";

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = dispatch => ({
    signup: user=> dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()) 
});

export default connect(mSTP, mDTP)(SignupForm);