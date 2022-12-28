import React from "react";
import { connect } from "react-redux";
import { addUser, deleteUser } from "./users.actions";

const Users = ({ users, addUser, deleteUser }) => {
  const onAddUser = () => {
    const userId = Math.round(Math.random() * 1000000)

    const newUser = {
      id: userId,
      name: `User # ${userId}`
    }

    addUser(newUser);
  }

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onAddUser}>Create user</button>
      <ul className="users__list">
        {users.map(({ id, name }) => (
          <li key={id} className="users__list-item">
            <span>{name}</span>
            <button className="users__delete-btn" onClick={() => deleteUser(id)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapState = ({ users }) => ({ users: users.usersList });

const mapDispatch = (dispatch) => ({ 
  addUser: (dataUser) => dispatch(addUser(dataUser)),
  deleteUser: (userId) => dispatch(deleteUser(userId))
})

const connetor = connect(mapState, mapDispatch);

export default connetor(Users);
