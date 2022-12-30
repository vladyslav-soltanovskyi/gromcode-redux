import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { isFetchingSelector, userDataSelector } from "./users.selectors";

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if(!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;
  
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  userData: propTypes.shape(),
  isFetching: propTypes.bool.isRequired
}

UserInfo.defaultValue = {
  userData: null
}

const mapState = (state) => ({
  isFetching: isFetchingSelector(state),
  userData: userDataSelector(state)
})

export default connect(mapState)(UserInfo);