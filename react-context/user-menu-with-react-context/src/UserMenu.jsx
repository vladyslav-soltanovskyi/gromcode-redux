import React from 'react';
import { UserContext } from './user-context';

class UserMenu extends React.Component {
  render() {
    const { avatar_url, name } = this.context;

    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {name}</span>
        <img
          alt="User Avatar"
          src={avatar_url}
          className="menu__avatar"
        />
      </div>
    );
  }
}
UserMenu.contextType = UserContext;

export default UserMenu;