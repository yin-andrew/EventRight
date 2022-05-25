import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchEvents } from "../../action/event_actions";
import SearchBar from "./search_bar";

const mDTP = dispatch => ({
    searchEvents: query=>dispatch(searchEvents(query))
});

export default withRouter(connect(null, mDTP)(SearchBar));