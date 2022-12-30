import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserData } from "./users.actions";

const SearchField = ({ getUser }) => {
  const [userName, setUserName] = React.useState('');
  const onChange = ({ target }) => {
    setUserName(target.value);
  }

  const handleSearchUser = () => getUser(userName);

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        onChange={onChange}
        value={userName}
      />
      <button className="name-form__btn btn" onClick={handleSearchUser}>Show</button>
    </div>
  );
}

SearchField.propTypes = {
  getUser: propTypes.func.isRequired
}

const mapDispatch =  {
  getUser: fetchUserData
}

export default connect(null, mapDispatch)(SearchField);