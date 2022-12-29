import Options from "./Options.jsx";
import { connect } from "react-redux";
import { toggleOption } from "./options.actions";
import { selectedOptionsSelector } from "./options.selectors";

const mapState = (state) => ({
  options: selectedOptionsSelector(state)
});

const mapDispatch = {
  moveOption: toggleOption
}

export default connect(mapState, mapDispatch)(Options);