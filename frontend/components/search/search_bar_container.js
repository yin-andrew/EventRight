import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearEvents, searchEvents } from "../../action/event_actions";
import SearchBar from "./search_bar";

const mSTP = (state, ownProps) => ({
    errors: state.errors.events
})

const mDTP = dispatch => ({
    searchEvents: query=>dispatch(searchEvents(query)),
    clearEvents: ()=>dispatch(clearEvents())
});

export default withRouter(connect(mSTP, mDTP)(SearchBar));