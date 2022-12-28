import React from "react";
import { connect } from "react-redux";
import Pagination from "./Pagination";
import User from "./User";
import { nextPage, prevPage } from "./users.actions";

const UsersList = ({ currentPage, users, goNext, goPrev }) => {
  const itemsPerPage = 3;
  const fromUser = currentPage * itemsPerPage;
  const toUser = (currentPage + 1) * itemsPerPage;
  const copyUsers = users.slice(fromUser, toUser);
  const totalItems = users.length;
  
  return (
    <div>
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        goNext={goNext}
        goPrev={goPrev}
      />
      <ul className="users">
        {copyUsers.map(user => <User key={user.id} {...user}/>)}
      </ul>
    </div>
  );
}
const mapState = ({ users }) => ({ users: users.usersList, currentPage: users.currentPage });

const mapDispatch = (dispatch) => ({ 
  goNext: () => dispatch(nextPage()),
  goPrev: () => dispatch(prevPage())
})

const connetor = connect(mapState, mapDispatch);

export default connetor(UsersList);
